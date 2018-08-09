---
layout: post
title: Monte Carlo methods for solving Ordinary Differential Equations
---

I found myself recently refreshing my knowledge about [Ordinary Differential Equations](https://en.wikipedia.org/wiki/Ordinary_differential_equation) (ODEs) and methods of how to solve them. Since I haven't blogged for a while, I thought this might be a nice topic to pick up this habit again.

In this post, I want to share some--rather na&iuml;ve--ways of how to solve ODEs with Monte-Carlo techniques. This is not typically done for simple ODEs as there are more powerful tools, such as the various [Runge-Kutta methods](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods), but it builds intuition of how they work in cases when applied to high-dimensional _Partial Differential Equations_ (PDEs) or _Stochastic Differential Equations_ (SDEs). As always the code to produce all the plots can be found in an [IPython Notebook](https://github.com/jotterbach/Data-Exploration-and-Numerical-Experimentation/blob/master/Numerical-Experimentation/Monte%20Carlo%20Methods%20to%20solve%20ODEs.ipynb)[^fn-paper]

## First-order Ordinary Differential Equations
To start off, let me introduce the mathematical form of _first-order_ ODEs, the equations we will study in this post[^fn-ode-book]:

$$
\begin{align}
\frac{dy}{dx} \,=\, f(y(x), x), \text{ such that } y(x_0) = y_0.
\end{align}
$$

The function $$f(y, x)$$ can be arbitrarily complex and non-linear in both arguments and the value pair $$(x_0, y_0)$$ defines the intial values for the equation. This form of the ODE is known as the [_Initial Value Problem_](https://en.wikipedia.org/wiki/Initial_value_problem). To guarantee the existence of a solution one typically assumes that the $$f$$ is contiuous over the domain we want to solve it over and fulfills the [Lipschitz condition](https://christiancosgrove.com/blog/2018/01/04/spectral-normalization-explained.html) in order to guarantee uniqueness of this solution. To reason why this equation is called _first-order_ lies in the fact that only the first derivative on $$y$$ is present in the equation. To round out all the nomenclature, the ODE is called _linear_ if $$f(y, x)$$ is at most linear in the dependent variable $$y$$, i.e. is of the form $$f(y,x) = s(x) + y(x) t(x)$$.

The function $$f(y, x)$$ represents the gradient of the function $$y(x)$$ given the function value $$y(x)$$ at point $$x$$ and can be best visualized using a [Direction Field](http://tutorial.math.lamar.edu/Classes/DE/DirectionFields.aspx)--a kind of vector field for ODEs. This vector is defined as 

$$
\begin{align}
\mathbf{v} \,=\, \frac{1}{\sqrt(1 + f^2(y,x))}\begin{pmatrix} 1 \\ f(y(x), x) \end{pmatrix}
\end{align}
$$

and we can use the usual vector field visualization techniques. Intuitively this vector represents the slope at the point $$(x,y)$$ and points into the direction of change. Solutions to the ODE flow along this vector field and hence one can obtain a visual sense for family of solutions to the ODE.

To make make this more concrete let us consider the function

$$
\begin{align}
f(y, x) \,=\, x^3 + 2  x^2 - 3^x.
\end{align}
$$

No worries about any interpretation of this equation, I made it up. However, we can already see that any analytic solution is hard to come by and we would like to understand how a solution of this ODE flows through the parameter space.
![Direction Field](/resources/mc_ode/direction_field.png){: .text.img-left width="70%"}
The direction field induced by this equation is shown to the left. The first observation we might have is that the pattern is repeating itself along the $$y$$-direction. This is to be expected for this ODE, as $$f$$ does not depend on $$y$$. Second, we observe that on the left side, the solution has steep negative gradiends, indicating a strong decay, before a flatter region followed by a steep rise on the right side. At this point I feel, we already have a decent understanding how potential solutions to this ODE will generally behave and we postpone the actual numerical solution towards a later point.

Before moving on to the next section, I need to point out that we can always convert the first-order ODE given above into an integral equation:

$$
\begin{align}
y(x) \,=\, y(x_0) + \int_{x_0}^x \text{d}\xi \;f(y(\xi), \xi).
\end{align}
$$

Essentially, this is what modern ODE solvers are doing and applying [Simpsons Rule](https://jeremykun.com/2012/01/08/numerical-integration/) to this integral directly results in the [fourth-order Runge-Kutta equations](https://www.uni-muenster.de/imperia/md/content/physik_tp/lectures/ss2017/numerische_Methoden_fuer_komplexe_Systeme_II/rkm-1.pdf).

## Monte Carlo Integration
The second ingredient of this blog post involves Monte Carlo (MC) techniques. MC is a work horse in many areas ranging from fundamental science over applied engineering to financial industry. A rather short, but nevertheless nice introduction can be found in [this lecture](https://inst.eecs.berkeley.edu/~cs294-13/fa09/lectures/scribe-lecture4.pdf). Instead of motivating MC integration through the more usual approach of [Buffon's needle](https://en.wikipedia.org/wiki/Buffon%27s_needle) or [estimating $$\pi$$](https://en.wikipedia.org/wiki/Monte_Carlo_integration) through rejection sampling, I want to take a slightly different approach. The objects of interest are integrals of the form

$$
\begin{align}
 I = \int_a^b \text{d}x\; f(x).
\end{align}
$$

For some geometrical shapes, such as rectangles, this integral is easily solved as $$I = \texttt{height}\times\texttt{width}$$. However, this is not quite as easy for more complicated shapes or arbitrary function. However, we can make use of the [mean value theorem of integration](https://en.wikipedia.org/wiki/Mean_value_theorem#Mean_value_theorems_for_definite_integrals): It states that, for any reasonably behaved function, there exists a point $$c \in [a, b]$$ such that the integral evaluates to 

$$
\begin{align}
 I = f(c) \cdot (b-a) = f^* (b-a)
\end{align}
$$

where we use $$f^{*}$$ to indicate that this is a special value of this funtion. At this special point the integral can
be expressed through the area formula for a rectangle $$I = \texttt{height}\times\texttt{width}$$, where the effective
height is given by $$f^*$$. This value represents the _average height_ of the function $$f$$ over the interval $$[a,
b]$$. This means all we need to do to solve this integral is to estimate the average height of the function. However,
this can be done quite simple using random variables: Assume we draw $$M$$ random variables $$X_i\sim\mathcal{U}(a, b)$$
from the uniform distribution over $$[a, b]$$. We can then estimate the average height of $$f$$ as

$$
\begin{align}
f^* \,=\, &\mathbb{E}_{X\sim\mathcal{U}(a, b)}\left[f(X) \right] \nonumber \\
      =\, &\frac{1}{M}\sum_{i=1}^M f(X_i)
\end{align}
$$

Plugging this all together we arrive at a simple way to evaluate the above integral

$$
\begin{align}
 \int_a^b \text{d}x\; f(x) = \frac{b-a}{M}\sum_{i=1}^M f(X_i).
\end{align}
$$

What we achieved here is to turn integration into a sampling problem! The equation we derived is rather simplistic and there exist much more advanced strategies of how to sample. However, all of these techniques go back to the same basic intuition of trying to estimate the mean value of the function $$f$$ over the domain of interest. It is worth mentioning that the above description already allows us some rather intriguing insight into of MC: As we calculate averages, we know that the variance of the estimator decreases as $$1/\sqrt{M}$$ and hence we might need a lot of samples to get an accurate value[^fn-variance-reduction]. However, this convergence rate is _independent_ of the dimensionality of the integral and so ideally suited for high-dimensional problems! 

To put this into context, we consider the exemplary function:

$$
\begin{align}
 y = f(x) = \frac{sin^2(x)}{x^2}.
\end{align}
$$

This is also know as the [cardinal sine](https://en.wikipedia.org/wiki/Sinc_function) of simply [`sinc`](https://en.wikipedia.org/wiki/Sinc_function) function. It plays a crucial role in areas reaging from signal processing, mechanical engineering, math to optical and quantum physics and many more. The integral

$$
\begin{align}
 I = \int_{-x}^{x} \text{d}\xi\; \frac{sin^2(\xi)}{\xi^2}.
\end{align}
$$

has no closed form solution and hence proves a good testing ground for our integration routine. The Monte-Carlo integration can be done in a few lines of code

```python
def func(x):
    return np.sinc(x)**2

xr = np.random.uniform(low=-3.5, high=3.5, size=5000)
yr = func(xr)

I = 2 * 3.5 * np.mean(yr)
```

We compare this with the exact solution obtained using the [$$\texttt{scipy.integrate.quadrature}$$](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.quadrature.html) functionality. Putting this all into a single figure we obtain

![MC integration of sinc function](/resources/mc_ode/mc_integration.png){: img width="100%"}

Let's take this plot apart. The central curve of the main plot shows the `sinc` function. The red straight line shows the value of the exact integral over the `sinc` obtain using scipy, whereas the black dashed line shows the estimated integral value using Monte Carlo. The grey bar shows the three standard-deviation confidence interval of the estimate. We see that the exact and Monte Carlo values overlap within the confidence bounds. To obtain the MC value we sample $$500$$ independent $$x$$-values and compute their corresponding function value $$y=f(x)$$. The upper histogram shows the distribution of the sampled $$x$$-values, whereas the right histogram shows the distribution of corresponding $$y$$ values. The MC value of the integral is obtained by computing the mean of the sampled $$yy$$ values multiplied by the length of the sampling interval of the $$x$$-values.

## Solve linear ODEs with Monte Carlo Sampling
Ok! Now we're ready to combine ODEs and MC techniques. Let us first focus on linear ODEs which are independent of $$y$$, i.e., let us consider the equation

$$
\begin{align}
\frac{dy}{dx} \,=\, f(x), \text{ with } y(x_0) = y_0.
\end{align}
$$

We can directly write down the solution as

$$
\begin{align}
y(x) \,=\,& y(x_0) + \int_{x_0}^x \text{d}\xi \;f(\xi) \\
       =\,& y(x_0) + \sum_{i=1}^N \int_{x_{i-1}}^{x_{i}} \text{d}\xi \;f(\xi)
\end{align}
$$

where we identified $$x_N=x$$ and split the integral into smaller, discrete chunks. Appyling the [Monte Carlo estimator](https://inst.eecs.berkeley.edu/~cs294-13/fa09/lectures/scribe-lecture4.pdf), we can rewrite this as

$$
\begin{align}
y(x) \,=\, y(x_0) + \sum_{i=1}^N \left[ \frac{x_i - x_{i-1}}{K} \sum_{k=1}^K f(x_k) \right].
\end{align}
$$

To bring some clarity into this mess we can mangle the above equation a bit further until we arrive at iterative procedure:

$$
\begin{align}
y(x_i) \,=\, & y(x_{i-1}) + \frac{x_i - x_{i-1}}{K} \sum_{k=1}^K f(x_k), \\
        = \, & y(x_{i-1}) + \mathbb{E}_{x \sim \mathcal{U}(x_{i-1}, x_i) }[f(x)]
\end{align}
$$

This is amazing! What we achieved now is the ability to solve a differential equation by uniformly sampling random points in space and evaluating the gradient function $$f$$. We do not need any intricate step size estimation, adaptive grid technique or other method. Just random sampling is enough![^fn-importance-sampling] MC not only allows us to compute tricky integrals, but also to solve differential equations.

This method can also easily be implemented in a few lines of code. First let us define the MC integration routine:

```python
def mc_int(func, domain, n_samples):
    """
    :param func: Lambda function of the gradient field. Signature should be `func(x)`
    :param domain: Endpoints of the integration domain
    :param n_samples: Number of random samples for the estimate
    """
    samples = np.random.uniform(low=domain[0], high=domain[1], size=(n_samples,))
    volume = abs(domain[1] - domain[0])
    return np.mean(func(samples)) * volume
```

All that remains to do is to put this together with the iteration, which can be easily coded up as

```python
def mc_solver(func, y0, x, n_samples):
    """
    :param func: Lambda function of the gradient field. Signature should be `func(x)`
    :param y0: Initial function value corresponding to the x0. The latter is given as the first element of x
    :param x: Domain points over which the field `func` should be integrated
    :param n_samples: Number of random samples for the estimate
    """
    vals = [y0]
    for lo, hi in zip(x[:-1], x[1:]):
        vals.append(vals[-1] + mc_int(func, (lo, hi), n_samples))
    return np.asarray(vals)
```

Alright. Let's try this on the function we introduced above. We can numerically compute the field as

```python
def f(x):
    return x**3 + 2 * x**2 - 3**x
```


Plugging everything together we can solve and plot the ODE.
![Solved linear ODE](/resources/mc_ode/solution_direction_field.png){: img width="100%"}
As expected the solution flows along the direction field lines. Moreover the MC solution also lets us estimate the confidence in the solution as visualized by the three standard deviation green band around the solution.


## The world is nonlinear ...

If all we could do is to tackle linear ODEs then this approach would not be very powerful. Fortunately, it is straight forward to generalize this approach to nonlinear ODEs resulting in the iterative prescription

$$
\begin{align}
y(x_i) \,= \, y(x_{i-1}) + \mathbb{E}_{x \sim \mathcal{U}(x_{i-1}, x_i) }[f(y(x), x)].
\end{align}
$$

The right hand side now explicitly depends on $$y(x)$$, i.e. on the random point we are just sampling. This value is of course not available at computation time and we need to make an approximation to make this problem tractable. A simple approximation is to replace $$y(x) \rightarrow y(x_{i-1}) = y_{i-1}$$[^fn-approximation]. This leads to the final procedure

$$
\begin{align}
y(x_i) \,= \, y_{i-1} + \mathbb{E}_{x \sim \mathcal{U}(x_{i-1}, x_i) }[f(y_{i-1}, x)].
\end{align}
$$

This is again quickly expressed in a few lines of code as we only need to add a single line of code to incorporate the approximation.

```python
def nonlinear_mc_solver(func, y0, t, n_samples=2):
    """
    :param func: Lambda function of the nonlinear gradient field. Signature should be `func(y0, x)`
    :param y0: Initial function value corresponding to the x0. The latter is given as the first element of x
    :param x: Domain points over which the field `func` should be integrated
    :param n_samples: Number of random samples for the estimate
    """
    sols = [y0]
    for lo, hi in zip(t[:-1], t[1:]) :
        part_func = lambda v: func(x=v, y=sols[-1])
        sols.append(sols[-1] + mc_int(part_func, (lo, hi), n_samples=n_samples))
    return np.asarray(sols)
```

To demonstrate the feasibility of this let us consider the highly non-trivial gradient field

$$
\begin{align}
f(y, x) \,= \, x \sqrt{|y|} + \sin^3 \left(\frac{\pi}{2} x \right) - 3\; \Theta(x-2),
\end{align}
$$

where $$\Theta(x)$$ denotes the [Heaviside step function](https://en.wikipedia.org/wiki/Heaviside_step_function). In code:

```python
def f(y, x):
    return  x * np.sqrt(np.abs(y)) + np.sin(x * np.pi/2)**3 - 5 * (x > 2)
```

Throwing this into the solver with the initial conditions $$(x_0, y_0) = (-4, 4)$$ we get a nice plot
![Solved nonlinear ODE](/resources/mc_ode/nl_solution_direction_field.png){: img width="100%"}
This method works amazingly well as can be seen when compared to the [$$\texttt{scipy.integrate.odeint}$$](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.odeint.html) solver. The inset shows the absolute difference between the solutions, which is small compared to the absolute scale. Also it is nice to see that the solution again hugs the flow of the direction field, showing the power of this visualization method.

## Conclusion
I hope you enjoyed this little introduction into differential equation and Monte Carlo integration. As always the code to produce all the plots can be found in an [IPython Notebook](https://github.com/jotterbach/Data-Exploration-and-Numerical-Experimentation/blob/master/Numerical-Experimentation/Monte%20Carlo%20Methods%20to%20solve%20ODEs.ipynb). Feel free to check it oput and play with it. Hopefully it won't take me again as long to write another post.


#### Footnotes
[^fn-paper]: After writing this up, I also came across the paper [Solving Initial Value Ordinary Differential Equations By Monte Carlo Method](http://static.bsu.az/w24/PIAMV4%20N2%202015/6%20Akhtar.pdf) by M. Akhtar et al. (Proc. IAM, 4, 2, 2015, p 149--184). The presentation is quite similar, but deals with implicit ODEs and is less introductory.

[^fn-ode-book]: A good book with introductory as well as more advanced topics on ODEs has been written [by Agarwal, R. P., & O'Regan, D. (2008). An introduction to ordinary differential equations](https://books.google.com/books?hl=en&lr=&id=myd2ULPJYn0C&oi=fnd&pg=PP6&dq=An+Introduction+to+Ordinary+Differential+Equations+Universitext&ots=eSbQxunJWy&sig=NbNrjfP-cj3jKC9MURodau753UY).

[^fn-variance-reduction]: This is where more advanced sampling techniques such as importance sampling, rejection sampling and others come into play. The basic idea is to come up with strategies to reduce the variance and speed up convergence of the estimator.

[^fn-importance-sampling]: Note that this also gives us a way to change the distribution we are sampling under. This becomes important when we have a feeling for the function we want to integrate and want to emphasize certain regions more. This is known as importance sampling and the estimator then becomes $$\mathbb{E}_{x \sim \mathcal{U}(a, b)}[f(x)] = \mathbb{E}_{x \sim p}[f(x) / p(x)]$$

[^fn-approximation]: There are of course many more advanced approximations, but for our purposes this naive approach is sufficient. 




