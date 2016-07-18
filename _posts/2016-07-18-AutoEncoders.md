---
layout: post
title: Unsupervised Representation Learning a.k.a. Autoencoders
---

Quite in line with the last blog posts about [Principal Component Analysis (PCA)](https://jotterbach.github.io/2016/03/24/Principal_Component_Analysis/) and [t-distributed Stochastic Neighbor Embedding (t-SNE)](https://jotterbach.github.io/2016/05/23/TSNE/) I want to discuss another dimensionality reduction technique that originated in the Neural Network (NN) community, known as [Autoencoders](https://?).

The idea behind an autoencoder is conceputally quite simple and results in very powerful outcomes if applied correctly. Unfortunately, however, it suffers from the typical problem of NNs in that the outcomes are not readily interpretable[^fn-images] and somewhat harder to train. But before we jump into the autoencoder let's do some preparatory work for motivation and understanding. The [code](https://github.com/jotterbach/dstk) and and a [notebook](https://github.com/jotterbach/Data-Exploration-and-Numerical-Experimentation/blob/master/Numerical-Experimentation/AutoEncoder_for_AdsDataset.ipynb) are available on my personal github.

## Lossy compression
![Linear model wtih noise](/resources/dae_blog/simple_noisy_model.png){: .text.img-right width="60%"}
To illustrate the idea let's look at a simple model where we have two dimension that follow the relationship 

$$
y \sim \alpha + \beta x + \epsilon
$$

with a noise term $\epsilon \sim \mathcal{N}(0, 0.1), a bias $\alpha$ and a slope $\beta$ as show in the figure to the left. To truthfully represent the full data we would have to store $2N$ floats as we have two dimensions and $N$ data points. However, it is quite obvious that we would also store a lot of the noise that is actually not important for the model. If we can afford to "loose" some information it would be possible to store the data with just $N+2$ floats -- $N$ values for $x$, the bias $\alpha$ and the slope $\beta$. For large $N$ we would get a compression of a factor $2$ by reducing the noise. As a side benefit, we made the considerably simplified the data, as we reduced the number of dimensions from two to one! This is the general idea for lossy compression algorithms[^fn-jpeg] to reduce the data by removing "noise".  The idea of removing noise to reduce data is directly generalizable to higher dimensions, though technically significantly more challenging.

## Non-linear Representations in Neural Networks
The second ingredient we need before diving into the Denoising Autoencoder (DAE) is to understand what simple NNs learn to separate features that are not linearly separable. I will steal this beautiful example from [Chris Olah's blog](https://colah.github.io/posts/2015-01-Visualizing-Representations/) which is defintely worth reading as well.
Let's have a look at the blue and red curves in the original image below
![Logit on linearly inseparable classes](/resources/dae_blog/netvis-simple-NoHid.png){: img width="90%"}
A neural network without any hidden layers and a sigmoid activation function is a fancy way of writting a [Logistic Regression](https://?) which is a linear model. The trained models learns that the best possible way to split the two curves by classifying samples within the blue and red shaded regions. However, in the center we have misclassification of blue points, whereas on the edges we misclassify red points. The linear decision boundary minimizes the misclassification rate as any other linear separator would do a worse job.

The introduction of a hidden layer changes the game dramatically! 
![NN on linearly inseparable classes](/resources/dae_blog/netvis-simple-2S.png){: img width="90%"}
The NN learns a non-linear transformation, that makes the two classes _linearly separable in the hidden layer_ and hence forms a non-linear decision boundary in the original input space. To visualize this we can look at the distorsions of the underlying grid, when going from the input to the hidden layer. As a result the NN is able to perfectly speparate those classes[^fn-overfitting]!


## The Denoising Autoencoder
Now we can tackle the DAE: We combine the concepts of lossy compression and non-linear representation. The idea is to learn a non-linear representation of the data that minimizes noise while maximizing the ability to truthfully restore the data from the compressed format. The network structure is quite simple and consist of two major components, the encoder and the decoder network. 

**Encoder:** Here, we start with $$m$$ input nodes, corresponding to the dimensionality of the input data and reduce this to $k$ nodes corresponding to the desired dimensionality size of the compressed data, i.e. we learn a function

$$
e: \mathbb{R}^m \mapsto \mathbb{R}^k, x \rightarrow z = \sigma(e\cdot x).
$$

where $$\sigma$$ is the activation function and $$e$$ is a $$k\times m$$ matrix of weights. Even though this looks like a simple matrix multiplication, this need not be the case as we can string several hidden layers together to for the transformation $e$, thus making the represeantaion more non-linear.

**Decoder:** there are two generally used decoder types - the tied and untied decoder. In case of a tied decoder, we use the inverse transformation $$e^{-1}$$, which for a single layer is just the matrix transpose. This results in a stiffer system, but has the advantage of a having to learn fewer parameters and is hence less prone to overfitting. The untied decoder learns a complete separate representation:

$$
d: \mathbb{R}^k\mapsto \mathbb{R}^m, z \rightarrow \sigma(d\cdot z).
$$

to efficiently map the compressed data to the originial input space. Here $$d$$ is a $$k\times m$$ matrix. This type needs much more training data as the complete network has typically twice as many parameters as the tied autoencoder network.

**Learning objective:** The reason why this system is called _autoencoder_ is the objective funtion the system wants to minimize:

$$
L = \sum_i (x-\sigma(d\cdot \sigma(e\cdot x)))^2.
$$

It tries to optimize the decoded representation of the data with respect to itself. It should be pointed out that the loss function doesn't need to be a squared error loss, but can be chosen appropriately for the input data, e.g. log-loss for binary input data. Note that depending on the activation function the input data needs to be scaled. E.g. the sigmoid clamps the output to the interval $$[-1, 1]$$ and hence the data has to be scaled to fit within this range for the autoencoder to work correctly.

## What is this good for?
The first thing to note is that it an unsupervised technique, meaning it doesn't need labelled data. This in turn means that it can be used for clustering or as a feature preprocessor by learning new representations. Learning an encoder lets us reduce the dimensionality of the data while preserving a lot of information by learning important, potentially nonlinear, features. The dimensionality-reduced data can then be fed into a unsupervised / semi-supervised clustering algorithm that can now perform its magic without suffering from the [Curse of Dimensionality](https://jotterbach.github.io/2016/05/23/TSNE/). In some cases further clustering might not even be necessary as the non-linear features already learn such structures in the compressed data.

A second use case is the pretraining of a Deep Neural Network (similar to a Deep Belief Network). In this case the autoencoder learns a good weight initialization that can then be used to further train the network using supervised techniques

###Example
To demonstrate the workings of the autoencoder, I want to create a two-dimensional visualization of the [Internet Advertisment dataset](https://archive.ics.uci.edu/ml/datasets/Internet+Advertisements). The data contains 1560 features and only 3300 records. Hence we easily run into the curse of dimensionality as the density in the high-dimensional space is quite small. ![Training loss for Autoencoder](/resources/dae_blog/traing_loss_ads.png){: .text.img-right width="60%"} Using a deep autoencoder to reduce the dimensionality to two dimensions we can get an intuition about how the data is distributed and what kind of features can be learned. For the plots, I implemented my own Autoencoder using [TensorFlow](https://www.tensorflow.org/)[^fn-JMetzen]. The code can be found in the [DataScience ToolKit](https://github.com/jotterbach/dstk) package on my github repository. The figure showing the training losses displays the typical learing curve of a Neural Network in that it has plateaus followed by steep rapid descends in loss. The black dashed lines indicate the epochs where the learning rate was adjusted. ![Output values of first layer](/resources/dae_blog/first_layer_output.png){: .text.img-left width="60%"} To ensure that the autoencoder is not saturated, i.e. that the hidden layers by default output $$1$$ or $$-1$$ we look a the mean value of the outputs of the first layer (and strictly speaking we should also look at the other layers).

To see what feature distribution the network learned, we can look at a scatter plot of the encoded representation. Note that the AE distributed the features nicely across the range $$[-1, 1] \times [-1,1]$$ making maximum use of the available space; another indication that the individual layers are not saturated.
![Encoder representation](/resources/dae_blog/encoded_representation.png){: img width="90%"}
The AE learns to distinguish some kinds of advertisment from non-advertisments quite well, so we could train a good classifier on those. However, we also see a big cluster, where ads and non-ads overlap significantly. We can conclude that in this region the spaming ads are very successful in hiding between the non-ads and we might have to do more feature engineering to find good splitting features.

###Final notes for training an AE
To summarize, I want to provide a list of things that you can try for successfully training an AutoEncoder:

- Use the [softsign](https://en.wikipedia.org/wiki/Activation_function) function as activation. It is not as steep as the sigmoid and does not saturate as easily
- To choose the number and size of layers make reasonable steps between the input and output layers. Don't make the model to complex/big as you need more data to train it. Also think of using a tied encoder if the available data is small.
- Normalize and center your data to be uniform around $$0$$
- Adjust the learning rates during training
- Monitor your layers to avoid saturation

I hope this was helpful. As alwyas a [IPython Notebook](https://github.com/jotterbach/Data-Exploration-and-Numerical-Experimentation/blob/master/Numerical-Experimentation/AutoEncoder_for_AdsDataset.ipynb) is available on my personal github account. Enjoy playing with AutoEncoders!


[^fn-images]: There is one recent exception for image classification. It turns out that due to convolutioon and pooling increasing number of layers learn more and more complex features, that tend to [represent structures of the input images](https://www.cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf). However, these cases are for foudn in supervised learning as opposed to autoencoders.

[^fn-jpeg]: One such compression algorithm is jpeg. In a nutshell: To compress the data a two-dimensional Fourier transform is applied to the image. Afterwards the high-frequency components are removed, the inverse transformation performed and the resulting picture is stored. The result is a "washing out" of sharp edges resulting in a loss of contrast and a blurrier image, but reduced size.

[^fn-overfitting]: In practice this perfect separation might not be desirable as it indicates strong overfitting to the training data and makes generalization to new data questionable.

[^fn-JMetzen]: I also relied heavily on ideas presented in the very nice blog post of Jan Hendrik Metzen on [Variational Auto Encoders](https://jmetzen.github.io/2015-11-27/vae.html)