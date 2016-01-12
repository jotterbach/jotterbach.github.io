---
layout: post
title: Social Choice and Dictatorship
---

I have always been intrigued by the concept of voting and how different voting systems try to implement concepts of 'fairness'. Any kind of voting tries to introduce the concept of [(partial) ordering](https://en.wikipedia.org/wiki/Partially_ordered_set)[^fn-ordering] by comparing different elements in a set (e.g. candidates in an election). Ordering in itself is a powerful concept, that together with the [axiom of choice](https://en.wikipedia.org/wiki/Axiom_of_choice) can be used to derive fundamental concepts of mathematics such as the [natural numbers](https://en.wikipedia.org/wiki/Natural_number).

Since ordering is a mathematical concept it should be possible to derive general statments about voting and I recently came across a well-known (but for me) surprising results: [Arrow's](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem) and the [Gibbard–Satterthwaite](https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem) theorems[^fn-theorem-reference]. In their essence those results state that any voting system that tries to implement two rather favorable and important concepts from 'fair' election implies that the system resembles a dictatorship. To get a better understand this surprising result let's introduce some notation and concepts:

- The set $$A=\{a,b\}$$ of candidates is called *alternatives*. We use the notation $$a\prec b$$ to indicate that *candidate $$b$$ is prefered over candidate $$a$$* and the symbol $$\prec$$ is said to induce a strict order on $$A$$.

A general expectation for any voting system is that if a candidate $$a$$ is the favored choice of any voter then $$a$$ is the winner of the election, i.e. is the winner of the social choice. In more mathematial terms this is called

- **Pareto Efficiency (PE)**: Whenever alternative $$a$$ is at the top of *every* individual's $$i$$ ranking $$r_i$$, then $$a$$ is at the top of the social choice (election) ranking $$R$$

The term [Pareto efficieny](https://en.wikipedia.org/wiki/Pareto_efficiency) originates from game theory. It states that a system is Pareto efficient if there is no opportunity to increase the well-being of any individual without hurting the well-being of at least one other individual.

A second expectation for 'fair' elections is the desire for mutual independence of candidate comparisons: If an election has at least three alternatives $$a,b,c$$ then the outcome should *only* depend on individual comparisons of $$a$$ to $$b$$, $$a$$ to $$c$$ and $$b$$ to $$c$$. In other words, the ranking of $$a$$ to $$b$$ should not depend on how the voters think about candidate $$c$$. To make this more rigorous we define the

- **Independence of Irrelevant Alternatives (IIA)**: If $$A = \{a, b\}$$ and $$b\prec a$$ then introducing a third alternative $$x$$ cannot alter the preference profile of $$a$$ and $$b$$.

The suprising result of [Kenneth Arrow](https://en.wikipedia.org/wiki/Kenneth_Arrow) shows that any voting system that is Pareto Efficient and Independent of Irrelevant Alternatives has to be a *dictatorship*! A social welfare function is a

- **Dictatorship**: If there is an individual $$i$$ whose preference sets candidate $$a$$ on top, then the social choice (election) also put $$a$$ on top, independent of the preferences of all other individuals.





[^fn-ordering]: There are two sorts of orderings: Partial and Total (strict) ordering. The former relies on comparability between some elements in a set, whereas the later can induce a total order as all elements of the set are comparable and can thus be ordered.

[^fn-theorem-reference]: A nice paper deriving the results on equal footing can be found [here](https://15bdb8d0-a-62cb3a1a-s-sites.googlegroups.com/site/philipjreny/arrow-gibbard-satterthwaite-econ-lett-2001.pdf)