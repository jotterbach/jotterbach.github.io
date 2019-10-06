---
layout: post
title: Principal Component Analysis (PCA) for Feature Selection and some of its Pitfalls
---

A typical approach in Data Science is what I call *featurization of the Universe*. What I mean by that is that we extract and engineer all the features possible for a given problem. To give an example: In a timeseries problem, one could use cumulative sums, moving averages with variable window sizes, discrete state changes, average differences, etc. as features, which quickly becomes very large. Alternatively, data source can be so rich that already the raw extraction produces a vast amount of data, e.g. dummification of the U.S. states leads already to 50 variables [^fn-independence].

In this case [*exploratory data analysis* (EDA)](https://en.wikipedia.org/wiki/Exploratory_data_analysis) is challenging and we need to resort to alternative methods of visualizing and exploring the feature space.

One approach is to reduce the dimensionality of the feature space and poke around in this reduced feature space. A basic technique well-suited for this problem is the [*Principal Component Analysis*](https://en.wikipedia.org/wiki/Principal_component_analysis) which tries to find the directions of most variation in your data set. Let's look at a simple 2D plot to understand what that means

![PCA in 2 dimensions](/resources/pca_blog/pca_2D.png){: img width="500px"}

Looking a the 'original' data points (blue dots) it is quite obvious that dimensions 1 and 2 are not independent and that neither of them is ideally suited for describing the data. However, looking at the two indicated vectors in the data it seems we can find a transformation that will result in completely independent dimension -- or put another way it will de-correlate the features in the new coordinate system. As an added benefit, the new dimensions align with the directions of maximal variation, and hence we can assign a sense of *importance* with that dimension.

**Why is this useful?** Imagine that the dimensionality of the feature set is larger than just two or three. Using a PCA we can now identify what are the most important dimensions and just keep a few of them to explain most of the variance we see in out data. Hence we can drastically reduce the dimensionality of the data and make EDA feasible again. Moreover, it will also enable us to identify what the most important variables in the *original* feature space are, that contribute most to the most important PCs. Intuitively, one can imagine, that a dimension that has not much variability cannot explain much of the happenings and thus is not as important as more variable dimensions.

**How do we get there?** Let's talk some math (feel free to skip if you don't want to). Technically, performing a PCA is just finding the [eigenvalues](https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix) $$\lambda_j$$ and [-vectors](https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix) $$\mathbb{e}_j$$ of the data's correlation matrix $$\Sigma = Y^T Y$$, where $$Y = X-\mu_X$$ and $$X$$ is an $$N\times M$$ matrix of data points: each row is one of $$N$$ samples with each column representing one of the $$M$$ features. $$\mu_X$$ is the empirical mean value of the data, and we will come back later to why we need to substract it.

Since $$\Sigma$$ is positive-semidefinite the matrix of eigenvectors can be used to [bring the correlation matrix to its diagonal form](http://s-mat-pcs.oulu.fi/~mpa/matreng/ematr4_2.htm)

$$
\begin{align}
\Lambda \, & = \, V \Sigma V^T \, = \, \text{diag}(\lambda_1, \dots, \lambda_M) \\
& = \, V Y^T Y V^T.
\end{align}
$$

Since $$\Lambda$$ is a diagonal matrix we can now associate certain eigen-vectors with the direction of most variation (the ones with the largets eigenvalues). However, calculating the whole matrix $$Y^TY$$ might be very costly (not to speak of its full diagonalization!) and we might not be interested in all the eigenvalues and -vectors, but merely want to keep the largest ones.


T this end, we have to use a generalization of the eigen-decomposition known as the [*Singular Value Decomposition* (SVD)](https://en.wikipedia.org/wiki/Singular_value_decomposition). Any positve semi-definite $$m\times n$$ matrix $$A$$ can be represented as a product of three special matrices

$$
\begin{align}
A \; = \; U S V
\end{align}
$$

where $$U$$, $$S$$ and $$V$$ are of dimension $$m\times m$$, $$m \times n$$ and $$n \times n$$, respectively. Moreover, $$S$$ is a rectangular-diagonal matrix with positive-semidefinite entries - the *singular values*. The columns of $$U$$ and $$V$$ are orthogonal and normalized (or orthonormal) and hence fullfill the relation that $$U^TU = \mathbb{1}_{m\times m}$$ and $$V^TV = \mathbb{1}_{n\times n}$$ [^fn-orthonormality]. So let $$A=Y$$ then we can easily calculate

$$
\begin{align}
Y^T Y \, & = \, V^T S^T U^T U S V \\
& = \, V^T S^TS V \\
& = V^T \Lambda V
\end{align}.
$$

Comparing this expression with the one above we are finally able to define the *principal components* as

$$
\begin{align}
P = Y V^T = U S
\end{align}
$$

There are a couple of **interesting and useful** relationships in here:

* Since $$\Lambda$$ contains the eigenvalues of the correlation matrix, its entries corresponds to the variances of the data in a given direction. However, $$\Lambda= S^TS$$ and $$\Lambda$$, $$S$$ are diagonal, so that $$s_j = \sqrt{\lambda_j}$$ is the standard deviation of the data along a certain dimension

* The principal component $$P_j = s_j U_j$$ is then just the left-singular vector scaled by the standard-deviation of the data in the corresponding direction.

* If we only need the first $$q$$ principal components it suffices to multiply the data with just the first $$q$$ rows of the right-singular vectors $$V$$

**How does it look like in practice? Or: why scaling the data is important!**

*Dimensionality Reduction*


The main use of PCA is to reduce the size of the feature space while retaining as much of the information as possible. A way too see how much information we retain is to look at the *explained variance ratio* of the principal components. If we define the full variance of a data set as $$\sigma = \sum_j \lambda_j$$ then the explained variance ratio of component $$j$$ is defined as $$r_j = \frac{\lambda_j}{\sigma}$$. To demonstrate this we use a copy of the UCI ML Breast Cancer Wisconsin (Diagnostic) dataset easily [accessible through scikit-learn](https://github.com/scikit-learn/scikit-learn/blob/master/sklearn/datasets/base.py#L303). Fitting the PCA can be done in a few lines

~~~
import sklearn.datasets as ds
from sklearn.decomposition import PCA

data = ds.load_breast_cancer()['data']
pca_trafo = PCA().fit(data)

plt.semilogy(pca_trafo.explained_variance_ratio, '--o')
~~~
{: .python}

Looking at the output it seems that with a single component we can explain $$98.2\%$$ of the variance!
![Cancer data set PCA explained variance ratio](/resources/pca_blog/explained_variance_ratio.png){: .text.img-right width="60%"}
This sounds to good to be true, and unfortunately it is. The interpretation of the singular values of the SVD underlying the PCA says that the plotted values correspond to the variance of the data along their principal components. However, that also means that original dimensions that have intrinsically a much larger variance will have more impact on the principal component. This is well confirmed if we look at the variance ratios of the data along the dimension of the original features.
![Cancer data set feature variance ratio](/resources/pca_blog/original_feature_variance.png){: .text.img-left width="60%"}
As suspected two features along add up to more than $$90\%$$ of the full variance of the data and hence dominate the explained variance ratio of the PCA. Also note that there are 11 orders of magnitude of difference here (the y-axis is logarithmic) so that some dimensions seem to have almost no variance at all.

To prevent those few dimensions from dominanting the PCA it is highly suggested to [normalize your data using z-scaling](https://en.wikipedia.org/wiki/Standard_score). This can again easily be done in sklearn

~~~
import sklearn.datasets as ds
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

z_scaler = StandardScaler()
data = ds.load_breast_cancer()['data'];

z_data = z_scaler.fit_transform(data)
pca_trafo = PCA().fit(z_data);

plt.semilogy(pca_trafo.explained_variance_ratio_, '--o');
plt.semilogy(pca_trafo.explained_variance_ratio_.cumsum(), '--o');
~~~
{: .python}

Looking at the explained variance ratio and its cumulative version, the variances slope of much less quickly, though still almost linear in logarithmic scale. This means that we have a much better handle on the variation within the data set and reading of from the cumulative explained variance it seems that with keeping only 5 principal components we can explain $$\sim 80\%$$ of the full variance.
![Explained variance ratio of scaled data set](/resources/pca_blog/explained_variance_ratio_scaled.png){: img width="500px"}
With this we reduced the size of the input space by a factor of $$6$$ while compromising only $$20\%$$ of potential information!

*Feature importance*

Another common use in for PCA is to identify features that are most contributing to a the principal components. Or asked another way: If my principal component vector would be a unit vector, how would the original data point look like? This is especially important when interpretability of your analysis has to be kept high, by either knowing how the PCs are constructed or by identifying and keeping only features that have big influences.

We can answer this with sklearn's PCA inversion applied to the identity matrix

~~~
import sklearn.datasets as ds
from sklearn.decomposition import PCA

pca_trafo = PCA()
data = ds.load_breast_cancer()['data']
pca_data = pca_trafo.fit_transform(data)

sns.heatmap(np.log(pca_trafo.inverse_transform(np.eye(data.shape[1]))), cmap="hot", cbar=False)
~~~
{: .python}

Looking at the resulting heatmap (notice the logarithmic scale in the plotting part)
![Cancer data set pca inversion](/resources/pca_blog/pca_inversion.png){: .text.img-left width="60%"}
we obtain a very peculiar striped pattern. Intuitively, one would expect an almost noisy pattern due to the orthonormality of the singular vectors. To understand this we need to go back to some math. In the previous section we said that to calculate the principal components we substract the mean from the data set and obtain the principal component as $$P = (X-\mu_X) V^T$$. Inverting this relation to calculate the data $$X$$ from a given principal component we obtain:

$$
\begin{align}
X \, = \, PV + \mu_X.
\end{align}
$$

For large means the data is dominated by those biased dimensions. To get a visual picture have a glance at the first figure of the post: The principal components are given by the black arrows and are clearly orthogonal. However if we shift the data by its mean the resulting arrows are the red ones which are clearly far from being orthogonal! Take-away: for large means the data is be goverened by it's biased even if it has a lot of variance.

To get a read on the actual information that individual features contribute to the PCA's we normalize the data and look at the mean and variance of each feature contribution aggregated over all principal components[^fn-dimensional-dependence].
![Average PCA contribution in scaled data set](/resources/pca_blog/pca_inversion_scaled.png){: img width="500px"}
Given this result we could try to only keep features with large absolute mean and see how those perform in a modeling task. However, these ponderings are going beyond the scope of this blog. One could also think of other ways to analyze the contributions to the principal components -- playground for creativity ahead!

**What's the deal?**

In essence you should use PCA with caution and look at the outcomes and predictions of your PCA. If explained variance tells you that a single component is enough to explain everything you might have forgotten to normalize (maybe you don't want to normalize, though). Similar conclusion if your inversion is not orthonormal your data might be governed by large biases.

Looking at PCAs and understanding them gives you insights into your data, especially if the dimensionality exceed simple EDA practices. Moreover, it gets your creative juices flowing of how to combine, engineer and/or eliminate features. The relevant code snippets can be found in my [github repo](https://github.com/jotterbach/Data-Exploration-and-Numerical-Experimentation/blob/master/Data-Analytics/PCA_Pitfalls.ipynb). Enjoy playing!






[^fn-independence]: In fact only 49 states if we enforce indpendence, and there are no missing values.

[^fn-orthonormality]: Strictly speaking this is only true if $$A$$ is real and symmetric. For a matrix over the complex numbers $$\mathbb{C}$$ we need to replace the transpose with the Hermitian conjugate.

[^fn-dimensional-dependence]: Note that this quantity depends strongly on how many PCs are kept after dimensionality reduction.


