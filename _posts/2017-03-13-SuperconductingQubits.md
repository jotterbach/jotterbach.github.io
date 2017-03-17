---
layout: post
title: What are Superconducting Qubits? A more mathematical excursion
---


* TOC
{:toc}

## Motivation

Quantum Computing recently received quite some coverage including Wired's article on the [race to sell true quantum computers](https://www.wired.com/2017/03/race-sell-true-quantum-computers-begins-really-exist/) and a full [Economist Technology Quarterly](http://www.economist.com/printedition/2017-03-11) segment on [Quantum Leaps](http://www.economist.com/news/leaders/21718503-strangeness-quantum-realm-opens-up-exciting-new-technological-possibilities-quantum). This motivated me to review my basic understanding of the architectures that are underlying these efforts to build a scalable Quantum Computer.
The physical implementation all these systems --in one way or another-- have in common is the [Superconducting Qubit (SCQ)](https://en.wikipedia.org/wiki/Superconducting_quantum_computing). What kind of beast is this? Is it similar to an atom? Unfortunately it's not quite as simple as the qubit relies heavily on superconductivity -- a macroscopic quantum state that involves many paricles and cannot be described using a simple atom pictures. Hence, I decided to write up a more or less back-of-the-envelope calculation to motivate and clarify the origins of the SCQ. 

On the way we need to introduce some complex concepts that help us understand how we can quantize a macroscopic electromechanical circuit element. Moreover, we briefly touch on two surprising quantum effects that underlie the SCQ: The quantization of the magnetic flux and the Josphson effect. After all these ingredients are ready we can then proceed to discuss what the SCQ is and how we can think about it.

As always, I hope you enjoy reading the post!

## Quantization of the LC Circuit 

### Canonical Quantization
In order to approach the challenge of deriving the physics of a SCQ we follow the approach of [canonical quantization](https://en.wikipedia.org/wiki/Canonical_quantization). This framework consists in identifiying the canonical, conjugate variables of teh classical counterpart of the system under consideration and replacing the [Poisson bracket](https://en.wikipedia.org/wiki/Poisson_bracket) algebra with [canonical commutation relations](https://en.wikipedia.org/wiki/Canonical_commutation_relation). The standard example is a harmonic oscillator whose classical Hamiltonian is given by

$$
\begin{align}
\mathcal{H} \,=\, \frac{1}{2m}p^2 + \frac{1}{2}m \omega^2 x^2
\end{align}
$$

where $$m$$ is the mass of the oscillator and $$\omega$$ is the resonance frequency. In classical mechanics the position $$x$$ and momentum $$p$$ are canonically conjugate and fulfill the Poisson bracket algebra

$$
\begin{align}
\{x, p\} \,=\, 0.
\end{align}
$$

Using the rules of canonical quantization we replace the Poisson bracket with commutation relations leading to

$$
\begin{align}
\{x, p\} \longrightarrow [\hat x, \hat p] \, = \, i\hbar
\end{align}
$$

and promote the conjugate variables to operator leading to the quantum mechanical Hamiltonian

$$
\begin{align}
\hat{H} \,=\, \frac{1}{2m}\hat p^2 + \frac{1}{2}m \omega^2 \hat x^2.
\end{align}
$$

We will not go into the details of the solution as the [quantum mechanical harmonic oscillator](https://en.wikipedia.org/wiki/Quantum_harmonic_oscillator) is a well studied system and we will find a different implementation of it when quantizing the LC-circuit.

### Lagrangian of the LC circuit

On our journey to derive the origin of a SCQ we need to understand how to quantize electromechanic circuit elements. We start this by exploring a simple linear system -- the LC-circuit, an element consisting of a capacitor and a inductor.

FIGURE HERE

To derive the equation governing the system (the equations of motion) we will need [Kirchhoff voltage law](https://en.wikipedia.org/wiki/Kirchhoff's_circuit_laws) which states that the sum over all voltages in a closed circuit is zero

$$
\begin{align}
\sum_k V_k \,=\, 0
\end{align}
$$

The voltages droping in the simple LC-circuit are

- the **capacitor voltage** $$V_C\,=\,\frac{Q}{C}$$ where $$Q$$ is the total charge and $$C$$ is the capacitance of the capacitor.
- the **inductor voltage** $$V_L\,=\, L \frac{dI}{dt}$$ with $$I\,=\,\frac{dQ}{dt}$$ being the current and $$L$$ the inductance

Putting those together and using Kirchhoff's law we find

$$
\begin{align}
L\frac{d^2Q}{dt^2} + \frac{Q}{C} = 0.
\end{align}
$$

While we could solve the LC-circuit at this point [^fn-LC-solution] it is instrumental for us to identify the canonically conjugate variable of this problem. To do this we reexpress Kirchhoffs law using the energies connected with capacitor and inductor:

- the **capacitor energy** is given by $$E_C\,=\,Q^2/2C$$.
- the **inductor energy** is $$E_L\,=\,LI^2/2\,=\,\Phi^2/2L$$, where we introduced the magnetic flux $$\Phi = LI$$.

At this point we need to perform some magic for people that are not familiar with Lagrangian mechanics or the Euler-Lagrange formalism (feel free to skip a couple of paragraphs where we find the conjugate variables). It turns out that when studying the energy balance of the LC circuit we can interpret $$E_L$$ as kinetic energy $$T$$ and $$E_C$ as potential energy $$U$$. With this we can define the [Lagrangian of the LC-circuit](http://www.ingvet.kau.se/juerfuch/kurs/amek/prst/15_ldec.pdf) as

$$
\begin{align}
\mathcal{L}\,=\, T-U\,=\,\frac{L\dot{Q}^2}{2} - \frac{Q^2}{2C}
\end{align}
$$

where we did the replacement $$I\,=\,\frac{dQ}{dt}$$. Using the [Euler-Lagrange equation](https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation) we find

$$
\begin{align}
\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{Q}} - \frac{\partial \mathcal{L}}{Q}\,=\, L\frac{d^2Q}{dt^2} + \frac{Q}{C} = 0
\end{align}
$$

which is exactly the law we found using Kirchhoff's voltage rule above! The Euler-Lagrange formalism also allows us to compute the conjugate variable to the charge $$Q$$ as

$$
\begin{align}
p_Q\,=\,\frac{\partial \mathcal{L}}{\partial \dot{Q}}\,=\, L\dot{Q}\,=\,LI\,=\Phi
\end{align}
$$

Now, we are very close: Using the canonically conjugate pair $$Q$$ and $$\Phi$$ we can write the Hamiltonian[^fn-legendre] as 

$$
\begin{align}
\mathcal{H}\,=\, T+U \,=\,\frac{\Phi^2}{2L} + \frac{Q^2}{2C}.
\end{align}
$$

Promoting those variables to quantum operators and employing canonical quantization we find the dynamics of the system described by the Hamiltonian

$$
\begin{align}
H\,=\, T+U \,=\,\frac{\hat\Phi^2}{2L} + \frac{\hat Q^2}{2C}.
\end{align}
$$

with commutiation relations

$$
\begin{align}
[\hat\Phi,\hat Q]\,=\,i\hbar.
\end{align}
$$

Comparing this to the results of the previous section we see that this system mimics a harmonic oscillator with frequency $$\omega=\sqrt{1/LC}$$ and quantum mechanical variables given by charge $$\hat Q$$ and magnetic flux $$\hat\Phi$$. The implications are similarly profound as for the standard position-momentum oscillator describing a particle in a square well. We can either know the charge precisely but not know the flux at all and vice versa. However, this system is describing a macroscopic electromagnetic circuit element rather than a single atomic particle!

### Solution and Comparison to the harmonic Oscillator


## The Jospehson Junction
With the procedure to quantize an electromagnetic circuit element we are now able to tackle the derivation of a SCQ. First we need to introduce the concept of a quantized magnetic flux (we now also explain what that actually is) and need to understand some basic properties of a Josephson junction.
Let's get started!

### Flux Quantization
When describing the energy of an inductor we introduced the quantity

$$
\begin{align}
\Phi\,=\,LI
\end{align}
$$

which we called magnetic flux. Using [Faraday's law](https://en.wikipedia.org/wiki/Faraday's_law_of_induction) this quantity can also be written as

$$
\begin{align}
\Phi\,=\,B\cdot A
\end{align}
$$

where $$B$$ is a constant magnetic field permeating a closed area $$A$$, e.g. a magnetic field permeating a wire loop. This law was one of the fundational observations in the postulation of Maxwell's equations.

This is where some magical macroscopic quantum physics happens[^fn-flux-quantization]. Consider now a superconductor whose quantum state is described by a macroscopic wave-function

$$
\begin{align}
\vert \psi(x)\rangle\,=\,\sqrt{\rho}\textrm{e}^{i\theta}.
\end{align}
$$

Here $$\rho$$ describes the charge density of the conductor and $$\theta$$ is the phase of the wave-function. If the superconductor is forms a solid ring then the requirement of a single-valued wave-function leads to the relation that

$$
\begin{align}
\vert \psi(x)\rangle\,=\,\vert \psi(x + 2\pi n)\rangle\,
\end{align}
$$
i.e. we can fix the value of the phase function only up tp a factor of $$2\pi n$$, $$n\in \mathbb{Z}$$ due to the periodicity of the complex exponential. Now it turns out that the phase of the quantum mechanical wave-function is proportional to the current flowing in the superconductor [^fn-wf-phase]. This is the origin of the resistance-free perma-current in superconductors. However, as we saw the current also determines the magnetic flux in a system and putting all these things together we arrive at a suprising observations of a [quantized magentic flux](https://en.wikipedia.org/wiki/Magnetic_flux_quantum)

$$
\begin{align}
2\pi n \,=\,\frac{q}{\hbar}\Phi.
\end{align}
$$

The basic flux quantum is defined as

$$
\begin{align}
\Phi_0 \,=\,\frac{\pi \hbar}{2e}.
\end{align}
$$

where $$e$$ is the electron charge. This is remarkable if you think about it. A macroscopic object, i.e. a superconducting ring, exposes quantized behavior in the magnetic field that can penetrate the ring. All non-interger components of the flux cannot enter the area enclosed by the conductor!

### Josephson Effect
![Josephson Junction diagram](/resources/SuperconductingQubits/Single_josephson_junction.png){: .text.img-right width="40%"}
Now on to part II of the quantum magic. Let us now investigate what happens if we couple two superconductors A, B via an insulating junction C. This setup is called a *Josephson Junction* and is depicted in the picture. We can describe this system using coupled Schr&ouml;dinger-equations as

$$ 
\begin{align}
i\hbar\frac{\partial}{\partial t}
\begin{pmatrix}
\psi_A \\ \psi_B
\end{pmatrix} \,=\, 
\begin{pmatrix}
qV/2 & K \\ K & -qV/2
\end{pmatrix} 
\begin{pmatrix}
\psi_A \\ \psi_B
\end{pmatrix} 
\end{align}
$$

where $$K$$ is a small constant describing the coupling of the states $$\psi_A$$ and $$\psi_B$$ throught the junction. The energy $$qV$$ is proportional to the voltage that is dropping over the junction if the superconductors are terminated by a battery. Making the ansatz for a macroscopic wave-function $$\psi_i\,=\,\sqrt{\rho_i}\textrm{e}^{i\theta_i}$$  it follows that we can describe the current through the junction by

$$
\begin{align}
I_C \,=\,\dot \rho_A \,=\,-\dot \rho_B \,=\, I_0 \text{sin}(\phi).
\end{align}
$$

where $$\phi = \theta_A -\theta_B$$ is the relative phase difference and $$I_0$$ is a constant depending on the junction details. This equation implies that no matter what the charge imbalance between the different superconductors, for certain phase differences there can no tunneling current happen!

The above ansatz lets us also connect the phase difference to the voltage

$$
\begin{align}
\dot \phi \,=\,\dot \theta_A - \dot \theta_B\,=\,\frac{qV}{\hbar}
\end{align}
$$

which will become important when deriving the SCQ in the next section.

## The Current-Biased Josephson Junction

![Phase Qubit Schema](/resources/SuperconductingQubits/CurrentBiasedJosephsonJunction.png){: .text.img-left width="50%"}
To gain insight into the emergence of a superconducting qubit we limit ourselves to a special type of qubit -- the [superconducting phase qubit](https://en.wikipedia.org/wiki/Phase_qubit). The electric circuit consists of a capacitor (C) in series with a Jospehson Junction (JJ). Those elements are furthermore biased with an additional current $$I_b$$ (see figure).

We will in the following derive the semi-classical Lagrangian for the system by using the macroscopic wave function of the JJ and afterwards use canonical quantization to arrive at the Hamiltonian of the current-biased Josephson Junction that gives rise to the *washboard* potential and superconducting phase qubits.

### Lagrangian and the Washboard potential
To derive the Hamiltonian governing the SCQ we use the same approach when quantizing the LC circuit. The relevant currents are 

- at the **capacitor**: $$I_C\,= C \frac{d V_C}{dt}\,=\,\frac{\hbar}{q}\ddot \phi$$ where we used the relation with the phase difference of the superconductors
- at the **junction**: $$I_J\,=\, I_0 \text{sin}(\phi)$$
- the **circuit bias** current $$I_b$$

Using Kirchhoff's current conservation law we find

$$
\begin{align}
\frac{\hbar}{q}\ddot \phi + I_0 \text{sin}(\phi) \,=\,I_b.
\end{align}
$$

With this we can use the definition of the [Euler-Lagrange equations](https://arxiv.org/pdf/cond-mat/0508729.pdf) and identfy the different energy contributions as **kinetic energy**

$$
\begin{align}
T \,=\, \frac{\hbar^2}{4 E_C}\dot \phi ^2
\end{align}
$$

with the Cooper pair energy $$E_C = (2e)^2/2C$$ and **potential energy**

$$
\begin{align}
W \,=\, E_J\left[1-\text{cos}(\phi) \right] - E_J\frac{I_b}{I_0}\phi
\end{align}
$$

with the Josephson energy $$E_J = \hbar I_0 / 2e$$. It is instructive to construct the conjugate variable to the phase $$\phi$$. Using the Lagrange formalism from before we compute

$$
\begin{align}
p_\phi\,=\,\frac{\partial T}{\partial \dot{\phi}}\,=\, \frac{\hbar}{2e} CV\,=\,\frac{\hbar}{2e} Q\,=\,\hbar n,
\end{align}
$$

where we introduced the number of charge pairs $$n=Q/2e$$. As in the case of the LC-circuit we find that the total charge (measured in units of $$2e$$) is canonically conjugate to the phase difference and hence we cannot measure both phase difference and charge in the circuit with arbitrary precision. 

Applying the rules of canonical quantization we can define the conjuate operator of the phase as $$\hat p_\phi\,=\,-i\hbar\frac{\partial}{\partial \phi}$$ which then leads to the pair number operator

$$
\begin{align}
\hat n\,=\,-i\frac{\partial}{\partial \phi}
\end{align}
$$

resulting in the commutation relations

$$
\begin{align}
[\hat n,\hat \phi]\,=\,i.
\end{align}
$$

and the Hamiltonian of the current-biased JJ (omitting a constant)

$$
\begin{align}
H\,=\,E_C \hat n^2 - E_J \text{cos}(\hat \phi) - E_J \frac{I_b}{I_0} \hat \phi
\end{align}
$$

It is worthwhile to take a look at this for a bit: The pair number term takes the role of the kinetic energy, which moves in a potential generated by the phase operator. Due to its form the potential is also called the *washboard* potential (see image below).

![Josephson Junction diagram](/resources/SuperconductingQubits/washboard_potential.png)

The ratio $$r_I = \frac{I_b}{I_0}$$ of bias to junction current controlls the depth of the potential. For a ratio larger than $$\vert r_I\vert>1$$ all minima vanish which will have implications for the qubit we discuss below.


### The superconducting phase qubit - bound states of the washboard


[^fn-LC-solution]: Dividing by the inductance $$L$$ reveals the equation of motion of a harmonic oscillator with frequency $$\omega\,=\,\sqrt{1/LC}$$.

[^fn-legendre]: Technically we should perform a Legendre transformation, but it turns out that for simple systems the Hamiltonian is just the sum of the obvious energy contributions.

[^fn-flux-quantization]: A more rigorous introduction can be found in the Feynman lectures Vol. 3. This segment only introduces the basic idea, but a more detailed derivation requires the description of more fundamental physics than fits into this post.

[^fn-wf-phase]: This is a much more general concept: The gradient of a general quantum-mechanical phase is driving the probability flow of a system. In the case of a superconductor this turns out to be the actual charge current.

[^fn-LC-lagrangian]: http://www.ingvet.kau.se/juerfuch/kurs/amek/prst/15_ldec.pdf