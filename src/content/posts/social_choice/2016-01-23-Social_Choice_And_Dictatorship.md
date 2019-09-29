---
type: post
date: "2016-01-23"
title: Social Choice and Dictatorship
---

I have always been intrigued by the concept of voting and how different voting systems try to implement concepts of *'fairness'*. Moreover, the often used quote *'Not voting is like voting for your least favorite alternative'* is confusing at times and incomprehensible at others. Hence, I decided to shed some light on these questions for my own sake and came across a (for me) surprising and important result: Arrow's theorem. Two very simple and commonly accepted properties of an electoral system are fundamentally irreconcilable if a dictatorial election is to be avoided. Let's dig in.

Any kind of voting system tries to introduce the concept of [(partial) ordering](https://en.wikipedia.org/wiki/Partially_ordered_set)[^fn-ordering] by comparing different elements in a set (e.g. candidates in an election). Ordering in itself is a powerful concept, that together with the [axiom of choice](https://en.wikipedia.org/wiki/Axiom_of_choice) can be used to derive fundamental concepts of mathematics such as the [natural numbers](https://en.wikipedia.org/wiki/Natural_number).

Since ordering is a mathematical concept it should be possible to derive general statments about voting and I [stumbled](https://class.coursera.org/gametheory2-003) over two well-known results: [Arrow's](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem) and the [Gibbard–Satterthwaite](https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem) theorems[^fn-theorem-reference]. In their essence those results state that any voting system that tries to implement two rather favorable and important concepts from 'fair' election implies that the system resembles a dictatorship. To get a better understand this surprising result let's introduce some notation and concepts:

- The set $A=\{a,b\}$ of candidates is called *alternatives*. We use the notation $a\succ b$ to indicate that *candidate $a$ is prefered over candidate $b$* and the symbol $\succ$ is said to induce a strict order on $A$.

A general expectation for any voting system is that if a candidate $a$ is the favored choice of any voter then $a$ is the winner of the election, i.e. is the winner of the social choice. In more mathematial terms this is called

- **Pareto Efficiency (PE)**: Whenever alternative $a$ is at the top of *every* individual's $i$ ranking $r_i$, then $a$ is at the top of the social choice (election) ranking $R$

The term [Pareto efficieny](https://en.wikipedia.org/wiki/Pareto_efficiency) originates from game theory. It states that a system is Pareto efficient if there is no opportunity to increase the well-being of any individual without hurting the well-being of at least one other individual.

A second expectation for 'fair' elections is the desire for mutual independence of candidate comparisons: If an election has at least three alternatives $a,b,c$ then the outcome should *only* depend on individual comparisons of $a$ to $b$, $a$ to $c$ and $b$ to $c$. In other words, the ranking of $a$ to $b$ should not depend on how the voters think about candidate $c$. To make this more rigorous we define the

- **Independence of Irrelevant Alternatives (IIA)**: If $A = \{a, b\}$ and $a\succ b$ then introducing a third alternative $x$ cannot alter the preference profile of $a$ and $b$.

The suprising result of [Kenneth Arrow](https://en.wikipedia.org/wiki/Kenneth_Arrow) shows that any voting system that is Pareto Efficient and Independent of Irrelevant Alternatives has to be a *dictatorship*! A social welfare function is a

- **Dictatorship**: If there is an individual $i$ whose preference sets candidate $a$ on top, then the social choice (election) also put $a$ on top, independent of the preferences of all other individuals.

We will not be deriving this result here, but there is a nice [paper](https://15bdb8d0-a-62cb3a1a-s-sites.googlegroups.com/site/philipjreny/arrow-gibbard-satterthwaite-econ-lett-2001.pdf) giving a very intuitive proof. Instead we will discuss some popular voting systems and their seemingly paradoxical outcomes. This will help to understand why the above statement might be true.

### Popular Voting Systems and Examples
Let us look at some simple example to understand what the theorem implies and gain intuition about the complexity of election systems.

#### Example 1
We look at three groups of voters with their preference profiles after an election given by

$$
\text{499 voters: } a \succ b \succ c \\
\text{498 voters: } c \succ b \succ a \\
\text{3 voters: } b \succ c \succ a
$$

Depending on the voting schemes the outcome of the election is very different. Let us discuss some common systems:

- **[Condorcet winner](https://en.wikipedia.org/wiki/Condorcet_criterion)** is the alternative who has the most votes when compared with any other alternative. In the above example the Condorcet winner is $b$: Comparing $a$ to $b$ we have $499:501$, $a$ to $c$ results in $499:501$ and $b$ to $c$ has $502:498$ votes.


- **Borda** count: We assign each position in the profile a number (weight) and sum the alternative's weights to create a final ranking. E.g. the top alternative has weight $n-1$, the second $n-2$ and so on, with the least favorite given a weight of $0$. The Borda winner of the above voting profile is $b$.

- **Simple Plurality**: The alternative with the most votes wins. In the above case $a$ will be the winner.

- **Plurality with elimination** (also called *instant runoff* or *transferable voting*): The alternative with the majority of votes is the winner. If there is no winner eliminate the alternative with the fewest votes and repeat until there is a winner. In the above case alternative $c$ would be the winner: $b$ has the fewest votes and hence will be eliminated, consequently we need to distribute the votes to candidates $a$ and $c$ after which $c$ is the winner.

#### Example 2
Let us have a look at a different election with the outcomes:

$$
\text{35 voters: } a \succ c \succ b \\
\text{33 voters: } b \succ a \succ c \\
\text{32 voters: } c \succ b \succ a
$$

- **Successive Elimination**: Before the election we decide on a pre-determined order in which candidates will be compared with each other and eliminated. This is very similar to a bracket system.
	- **a, b, c** ordering: Comparing $a$ and $b$, $b$ wins, which in turn looses to $c$. So the winner is $c$.
	- **a, c, b** ordering: The winner is $b$.
	- **b, c, a** ordering: The winner is $a$.

The other voting schemes produce $a$ as the Condorcet, Borda and simple plurality winner and $b$ as the plurality with elimination winner.

### Some Shortcomings

#### Condorcet cycles

It seems that the Condorcet system is a very sensible choice for a voting system, however there are cases without such a winner. An example of this is *rock-paper-scissor*

$$
\text{1 voter: } a \succ b \succ c \\
\text{1 voter: } b \succ c \succ a \\
\text{1 voter: } c \succ a \succ b
$$

This example belongs to the more general class of [Condorcet cycles](http://rangevoting.org/CondorcetCycles.html) paradox. Within [rank ordering vote systems](https://en.wikipedia.org/wiki/Ranked_voting_system) this problem can unfortunately not be solved and one has to resort to [range voting systems](https://en.wikipedia.org/wiki/Range_voting). We will not go into further detail on those.

#### Successive Elimination

Let's look at the case where we introduce a fourth alternative $d$ Before the election we agree on the elimination scheme $a, b, c, d$. The preference profile after the vote is:

$$
\text{1 voter: } b \succ d \succ c \succ a \\
\text{1 voter: } a \succ b \succ d \succ c \\
\text{1 voter: } c \succ a \succ b \succ d
$$

Who is the winner? Comparing $a$ to $b$ eliminates $b$. Next we compare $a$ to $c$ leaving $c$ as a winner, who in turn losses to the final winner $d$.

Why is this a problem? If we only compared $b$ to $d$ then $b$ is strictly Pareto-dominant over $d$. Nevertheless the successive elimination elects $d$ as the winner.


### Final words
All of the above voting schemes make significant trade-offs to avoid a dictatorial election system. Most often them give up the independence of irrelevant alternatives (IIA) and introduce dependencies on third party candidates, as they need tie-breakers. In the case of successive elimination, the pre-determined order ensures IIA for the election but then violates the Pareto efficiency (PE) as it allows a strictly dominated candidate to be elected as winner.

What these examples should teach us, is that whenever we have the option to vote, we should! Consequences of not voting are hard to understand and simple arguments are more wrong than right. If you consider not voting, make sure you understand the impacts. Especially in  winner-takes-it-all electorial systems like the US, consequences can be large, as a [few votes can change the outcome of an election](https://en.wikipedia.org/wiki/Florida_election_recount) by giving them inproportional leverage due to the number of electorial votes a state brings to the table.



[^fn-ordering]: There are two sorts of orderings: Partial and Total (strict) ordering. The former relies on comparability between some elements in a set, whereas the later can induce a total order as all elements of the set are comparable and can thus be ordered.

[^fn-theorem-reference]: A nice paper deriving the results on equal footing can be found [here](https://15bdb8d0-a-62cb3a1a-s-sites.googlegroups.com/site/philipjreny/arrow-gibbard-satterthwaite-econ-lett-2001.pdf)
