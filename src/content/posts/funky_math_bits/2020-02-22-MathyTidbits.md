---
type: post
date: "2020-02-22"
title: Mathy Tidbits
---

Sometimes you come across some mathy problems, that surprise you. Either because of the simplicity or because they turn out harder than you originally. Here, I want to collect some of these tidbits.

# On expectation values of Gaussian random variables.
For this one I owe some thanks to Nick Ryder.

Almost everyone in some STEM field came across the problem to compute the expectation value of the norm of a high-dimensional Gaussian vector, i.e.

$$
S = \mathbb{E}_{x\sim \mathcal{N}(0, \sigma^2)}\left[\|x\|_2 \right],
$$

with some $x\in \mathbb{R}^N$. The standard trick is to rewrite this expectation value as an integral

$$
S = \int\text{d}^Nx \sqrt{\sum_i x_i^2} \frac{1}{(\sqrt{2\pi}\sigma)^N}\text{e}^{-\frac{1}{2\sigma^2}\sum_i x_i^2},
$$

introduce spherical coordinates $r^2 = \sum_i x_i^2$ and turn the high dimensional integral into a simpler one dimensional integral over the radius

$$
S = \int\text{d}\Omega\text{dr}\; r^{N-1} r \frac{1}{(\sqrt{2\pi}\sigma)^N}\text{e}^{-\frac{1}{2\sigma^2}r^2}.
$$

Here we use $\text{d}\Omega$ to denote the $N-1$-dimensional [spherical surface element](https://en.wikipedia.org/wiki/N-sphere). The area of the unit sphere in $N$ dimensions evaluates to

$$
A_{N-1} =\int_{\partial B_N}\text{d}\Omega\;=\; \frac{2\pi^{\frac{N}{2}}}{\Gamma(\frac{N}{2})},
$$

where $\Gamma(\cdot)$ denotes [Euler's Gamma function](https://en.wikipedia.org/wiki/Gamma_function). The remaining integral then reads

$$
S = \frac{2\pi^{\frac{N+1}{2}}}{\Gamma(\frac{N+1}{2})} \frac{1}{(\sqrt{2\pi}\sigma)^N} \int\text{dr}\; r^N \text{e}^{-\frac{1}{2\sigma^2}r^2}.
$$

and with a [lookup table](https://en.wikipedia.org/wiki/Gaussian_integral) evaluates to 

$$
S = \frac{2\pi^{\frac{N}{2}}}{\Gamma(\frac{N}{2})} \frac{1}{(\sqrt{2\pi}\sigma)^N} \frac{\Gamma(\frac{N+1}{2})}{2}(2\sigma^2)^{\frac{N+1}{2}} = \sqrt{2}\sigma \frac{\Gamma(\frac{N+1}{2})}{\Gamma(\frac{N}{2})} \approx \sqrt{N}\sigma + \mathcal{O}(N^{-1/2}).
$$

While this calculation is by no means trivial, it is still straight forward and merely requires keeping track of all the fransformations and looking up well known results. (BTW. computing the expectation of the square norm $\|x\|_2^2$ is significantly easier! The reason is that the integral decomposes into a bunch of independent one-dimensional Gaussians that just need to be summed up. The square-root couples the variables, making this a little harder on the eye.)

However, what happens if we are interested in a different norm instead of the Euclidean square norm? 

$$
E_{x \sim \mathcal{N(0, \sigma^2 \mathbf{1})}}\big[||x||_\infty \big]
$$

Using the definition $|x||_\infty = \max_{i<D}\big[\{|x_1|, \dots,|x_D| \}\big]$, we see that we need to estimate the extreme value statistic of the absolute value of a Gaussian random variable. We start with the fact that the PDF of the absolute value of a Gaussian RV is given by the [half-Normal distribution](https://en.wikipedia.org/wiki/Half-normal_distribution)

$$
p(x;\sigma) = \frac{\sqrt{2}}{\sqrt{\pi}\sigma}\textrm{exp}\left[-\frac{x^2}{2\sigma^2} \right] \mathbf{1}_{x>0}
$$

The corresponding CDF is then given by

$$
F(x;\sigma) = \textrm{erf}\left[\frac{x}{2\sqrt{\sigma}} \right] \mathbf{1}_{x>0}
$$

From the theory of order statistics we know that the distribution of the maximum of a set of $N$ i.i.d. RVs is given by
$$
P(X \leq x) = F^N(x)
$$

Since each dimension of the Gaussian vector is independently drawn, we have $D$ i.i.d. random variables. Using this fact, plugging all the relevant equations into each other and forming the derivative we obtain the relevant PDF as

$$
p(x; \sigma) = \frac{\sqrt{2}}{\sqrt{\pi}\sigma} N \textrm{exp}\left[-\frac{x^2}{2\sigma^2} \right] \textrm{erf}\left[\frac{x}{\sqrt{2}\sigma} \right]^{N-1} \mathbf{1}_{x>0}
$$

With this we can finally compute the expectation value as 

$$
E_{x \sim \mathcal{N(0, \sigma^2 \mathbf{1})}}\big[||x||_\infty \big] = \frac{\sqrt{2}}{\sqrt{\pi}\sigma} N\int_0^\infty\text{d}x\; x \textrm{exp}\left[-\frac{x^2}{2\sigma^2} \right] \textrm{erf}\left[\frac{x}{\sqrt{2}\sigma} \right]^{N-1}
$$

Normalizing the integration variables by introducing $y=\frac{x}{\sqrt{2}\sigma}$ we have

$$
E_{x \sim \mathcal{N(0, \sigma^2 \mathbf{1})}}\big[||x||_\infty \big] = \frac{2\sqrt{2}}{\sqrt{\pi}} N\sigma \int_0^\infty\text{d}y\; y \textrm{exp}\left [-y^2 \right] \textrm{erf}\left[y \right]^{N-1}
$$