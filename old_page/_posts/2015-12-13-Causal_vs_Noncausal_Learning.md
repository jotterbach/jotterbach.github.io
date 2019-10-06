---
layout: post
title: Causal vs. Non-Causal Learning using Neural Networks
---

In many real world problems we are faced with the task of infering the input values (settings) of a system given some expected or observed outcome. A simple example is inferring a set of environment variables from an observed light spectrum: E.g., pressure and temperature can shift and broaden spectral lines[^fn-pressure-bulbs] and we are faced with the question what the actural wave-length of the spectral line is. In a complex spectrum lines can start to overlap and hence there are several possibilities for the original line. Problems of this kind are often referred to as [inverse problems](https://en.wikipedia.org/wiki/Inverse_problem) and they rarely posses an easy or even single-valued solution.

For a [single-valued function](https://en.wikipedia.org/wiki/Single-valued_function) a given input produces only a single output, i.e. we can describe the relationship with a deterministic relationship:

$$
\begin{equation}
f: \mathcal{X} \rightarrow \mathcal{Y}
\end{equation}
$$

![Single Valued Function](/resources/ffn_mdn_blog/single_valued_function.svg){: img width="200px"}

This structure implies a sense of causality: Using $$x_1$$, we will always observe $$y_1$$. However the *inverse* is not true -- when asking what input leads to $$y_1$$ it could be either $$x_1$$ or $$x_2$$. We see that the inverse problem is a [multi-valued](http://mathworld.wolfram.com/MultivaluedFunction.html) function. A single value can produce several distinct outcomes and in this sense present a non-causal structure.

In general, modeling an "arbitrary" and complex relation is a formidable task. However, a Data Scientists toolbox contains a powerful companion: Neural Networks that, thanks to their flexibility, are ideally suited. The typical architecture of a [Feed Forward Neural Network](http://jotterbach.github.io/2015/11/05/ExploringNeuralNetworkEngineering/) (FFN) consists of a series of layers, each of which processing the (potentially nonlinear) outputs of the previous layer. The flow of information is hence directed from input to output and induces a causal relationship between the input and the output; i.e. they present single-valued functions. This standard architecture breaks down when faced with non-causal, multi-valued relations and to enable Neural Networks to learn such problems, a different output layer is needed that allows the prediction of multiple output values. The corresponding network is called a Mixture Density Model (MDN) and was introduced by [Bishop in 1994](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.120.5685).

To understand the differences of these approaches, let's play with a little toy problem with artificially generated data. The [IPython notebook](https://github.com/jotterbach/SimpleNeuralNets/blob/master/examples/Causal_vs_Noncausal_Learning.ipynb) and [source code for the network](https://github.com/jotterbach/SimpleNeuralNets/tree/master/SimpleNeuralNets) (based on Theano) can be found on my [github account](https://github.com/jotterbach).

##Learning causal relationship - The Feed-Forward Network architecture

The artifical data we will use for this post is generated from a simple cubic function

$$
\begin{equation}
\mathbb{r} = \begin{pmatrix} x \\ x^3 - \alpha x\end{pmatrix} + \text{noise}
\end{equation}
$$

where the noise is drawn from a Gaussian distribution:

![Toy data showing a causal relation](/resources/ffn_mdn_blog/ToyData.png){: img width="90%" }

### Causal relation

The structure of the data is simple with a clear input and target variable. To model the relationship we will train a FFN with a single input and output neuron and one hidden layer containing 25 neurons with a `tanh` activation. During training we record the loss of the training as well using a similarly generated training set.

![Train- and test-set losses](/resources/ffn_mdn_blog/TrainTestLossesSimpleFFN.png){: .text.img-left width="55%"}

As a learning objective I chose to minimize the standard squared-error loss. Using normalized gradient descent the loss function is clearly decreasing with increasing number of steps, but it is also interesting to see that there are very distinct points where the slope of loss curve significantly changes before entering another region of steep descent (Note that the plot is in log-log scale). A potential explanation for this behavior is cited in [LeCun et al., 2015](http://www.nature.com/nature/journal/v521/n7553/full/nature14539.html):

> In practice, poor local minima are rarely a problem with large networks. Regardless of the initial conditions, the system nearly always reaches solutions of very similar quality. Recent theoretical and empirical results strongly suggest that local minima are not a serious issue in general. Instead, the landscape is packed with a combinatorially large number of saddle points where the gradient is zero, and the surface curves up in most dimensions and curves down in the remainder

The [basic intuition](http://rinuboney.github.io/2015/10/18/theoretical-motivations-deep-learning.html) behind this phenomenon lies in the fact that in high dimensions it becomes increasingly unlikely that the loss surface curves upwards, i.e. the loss increases, in all direction we could choose to go [^fn-loss-surface]. In reverse, it is increasingly likely that there is another direction in which minimization can occur, and gradient decent is likely to find it (though it can get stuck).

After seeing that the training seems to work let's have a look at the actual prediction plotted with the training data:

![Prediction of a simple FFN for a cubic curve](/resources/ffn_mdn_blog/PredictionSimpleFNN.png){: .text.img-right width="55%"}

Fits pretty well to the data! The minimization objective clearly worked, with some exception at the edges around where the input $$x=\pm 1$$. Here the data is simply too sparse for the network to learn good values. This is a known effect as Neural Networks need enough data to learn good representations of the data. What might not be very well visible is that the deviations from the model become increase the further we extrapolate the predictions to regions where no training data was available. This problem is not specific to Neural Networks, but rather a generic problem of Machine Learning algorithms.

It should be pointed out that the used network is not a "deep" network as it contains only a single layer with only 25 neurons (and I saw similar results with even less neurons). Nevertheless the data fits remarkably well. (Now I'm curious to see how it compares to a Random Forest Regressor with limited depth. Maybe a topic of another post ...)

### Non-causal relation with a Feed-Forward Network

![Multivalued input-output relation](/resources/ffn_mdn_blog/NonCausalRelation_Data.png){: .text.img-left width="55%"}
The story changes dramatically when the data we are trying to learn has not such the nice property of a one-to-one or many-to-one mapping, such as single-valued functions. Exchanging the input and target variable, the resulting relation is now multi-valued. E.g. at input $$x=0$$ we find (at least) three values of the target variable.

![A FFN trying to approximate a multivalued function](/resources/ffn_mdn_blog/FFN_prediction_multivaluedData.png){: .text.img-right width="55%"}
Feeding this data into the FFN of the previous section leads to terrible results. This should not be surprising as the network is trying hard to fit a single valued function to a multivalued target. The root cause of this lies in the architecture of the network where the output layer is trying to predict the exact value of the target variable. Since there is only a single output, there is little hope of being able to approximately even reasonably close.

This is often referred to as learning causal relationships. A given input (action) leads to a single, predictable outcome (result) and hence there is intrisic causality in the architecture of a simple Feed-Forward Network. To learn Non-Causal relationships we need to modify the way the output layer models the target data. Let's look at that now.

##Learning a Non-Causal Relationship -- the Mixture Density Model

Despite the failure of the previous section, the findings give us an idea of how to proceed. Instead of predicting (with certainity) a specific target value $$t$$ given some input $$\mathbb x$$, let's try and predict a probability $$p(t \vert \mathbb{x})$$ of a given target value. E.g. if the data looks like it has some Gaussian noise the model would read

$$
\begin{equation}
p(t \vert \mathbb{x}) = \mathcal{N} \big(t \big\vert \mu(\mathbb{x}), \sigma(\mathbb{x}) \big).
\end{equation}
$$

The task of the FFN is now to learn the parameters $$\mu(\mathbb{x}), \sigma(\mathbb{x})$$ of the distribution. Drawing from the distribution at a given point $$\mathbb{x}$$ then gives us an estimate of the probability a given target value will occur.

This idea can now be easily generalized to multivalued functions! Given the data from above we could argue that in fact we have three distinct distribution that overlap to build a new, more complex distribution and hence the probaility of a given target value $$t$$ for an input $$\mathbb{x}$$ is then given by

$$
\begin{equation}
p(t \vert \mathbb{x}) = \sum_i^K \pi_i(\mathbb{x}) p_i(t \vert \mathbb{x})
\end{equation}
$$

where $$\pi_i(\mathbb{x})$$ are the mixture coefficients with $$\sum_i \pi_i(\mathbb{x}) = 1$$ and $$K$$ is the number of components in the mixture. Intuitively we can understand the final distribution as follows: For a given input $$\mathbb{x}$$ the probability of obtaining the target value $$t$$ is given by $$p(t \vert \mathbb{x})$$. In this way the FFN is now able to learn several values at once by not giving a definite answer but rather giving a probability for certain values of the target variable.

![Training and test losses of the MDN](/resources/ffn_mdn_blog/TrainTestLossMDN.png){: .text.img-left width="55%"}
To learn the distribution we need an optimization criterion that tells the network what "good" learning means. The default starting point is maximizing the [likelihood function](https://en.wikipedia.org/wiki/Likelihood_function) $$\mathcal{L}(\pi(\mathbb{x}), \mu(\mathbb{x}), \sigma(\mathbb{x}) \vert t)$$. However, to use gradient descent and other stable optimization problems it turns out that minimizing the negative log-likelihood[^fn-square-error-loss] is more optimal, i.e.

$$
\begin{equation}
J(\mathbb{w}_\text{opt}) = \min_\mathbb{w}\bigg[ -\sum_n^N\ln\bigg(\sum_i^K \pi_i(\mathbb{x}_n,\mathbb{w}) \mathcal{N} \big(t_n \big\vert \mu(\mathbb{x}_n,\mathbb{w}), \sigma(\mathbb{x}_n,\mathbb{w}) \big)  \bigg)\bigg]
\end{equation}
$$

Here we explicitly wrote out the weights $$\mathbb{w}$$ of the network and the sum over all $$N$$ training samples. Note that it "seems" as if the loss should always be positive as the mixture coefficients $$\pi_i$$ are always summing up to unity and the Normal distribution is normalized. However, for a very narrow Normal distribution there can be values much larger than $$1$$ which makes the sum larger than $$1$$ and hence the negative log is negative. A typical form of the loss-minimization with learning progress is shown in the above figure.

![Architecture of MDN output layer](/resources/ffn_mdn_blog/MDN_architecture.svg){: .text.img-left width="55%"}
Finally there is one more technicality we need to solve before trying to learn the multi-valued function from before: We need to connect the output of the network to the parameters of the mixture model. For a model with $$K$$ Normal components and an $$m$$-dimensional target we have $$K$$ mixtures and $$K$$ variances (we assume that the variance is the same in all dimensions; however it is easy to generalize the problem using a covariance matrix) and $$K\cdot m$$ mean values. In total number of output nodes of the network is then $$K(m+2)$$. The outputs of the network are real valued and unbounded, and in order to restrict the mixture coefficients and variances to their respective support we need apply a final transformation of the network's output values $$a^\mu, a^\sigma, a^\pi$$, according to

$$
\begin{equation}
\mu_{j,k} = a^\mu_{j,k} \\
\sigma_j = exp(a^\sigma_j) \\
\pi_j = \frac{exp(a^\pi_j)}{\sum_i^K exp(a^\pi_i)}
\end{equation}
$$

The last equation for the mixture coefficient $$\pi_i$$ is called the [softmax function](https://en.wikipedia.org/wiki/Softmax_function) and is also often used as an activation function for neurons in the hidden layer of a network.

With all this we are finally ready to tackle the learning problem of the "simple" multi-valued function from above. Letting the network run for 100k iterations we get a very good approximation of our data:

![Trained MDN](/resources/ffn_mdn_blog/Trained_MDN.png){: .img width="90%"}

The MDN does exactly what we wanted it to do: It is very narrow in the regions where the data is single valued indicating a high certainty. In the regions where the data is multivalued and broad the distribution has multiple peaks and gives almost equal probability to the three values.

With this we can also understand what the simple FFN was trying to learn when faced with the multi-valued input: It tried the best possible approximation given all the inputs, which is given by the conditional average of the probability distribution $$p(t \vert \mathbb{x}) = \sum_i^K \pi_i(\mathbb{x}) p_i(t \vert \mathbb{x})$$. However, the average of several solution is not necessarily a solution itself and hence in general fails to approximate the data.

### What's the take-away?

We saw that a FFN is able to approximate complicated functions as long as they are single-valued and follow a causal relationship. However, when this setting is violated the network fails to find any reasonable approximation to the data. We can repair this by allowing the network to learn a probability distribution rather than an exact input-output relation.

As take-away from all of this we should be careful when designing network architectures and think hard about the data and if it can be modelled in a causal way. This becomes especially hard in higher dimensions but also more important. It also highlights that standard loss-functions are not always suitable to a problem and the right choice can make the difference between the solution and failure of a problem.


[^fn-pressure-bulbs]: This is the reason why we see "white" light from energy-saving [mercury-vapor lamps](https://en.wikipedia.org/wiki/Mercury-vapor_lamp) and other vapor pressure bulbs.

[^fn-loss-surface]: Mathematically it is exponentially less likely with increasing dimensions that the surfaces curves upwards in every direction, unless you're close to the global maximum.

[^fn-square-error-loss]: In case of a very simple likelihood function given by just a simple Normal distribution of the weights, we recover the often used *squared-error-loss*.

