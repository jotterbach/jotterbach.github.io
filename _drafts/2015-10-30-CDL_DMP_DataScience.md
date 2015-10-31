---
layout: post
title: Data-informed decision making in Academia?
---

First Big Data and data science, then data-driven and now data-informed? What is it about all these hot topics that makes everyone so excited and does it have any place in Academia? 

Data Science is an incredibly young[^fn-comparedToStatistics] and [flaming hot](https://speakerd.s3.amazonaws.com/presentations/c47f606815d34e7e8b7b1ca8be55eff1/Why_Data_Science__2_.pdf) field[^fn-googleCounts]. The promises (and accordingly stakes) this discipline holds are high, and as we will see shortly, follow a classic [hype cycle](https://en.wikipedia.org/wiki/Hype_cycle). Nevertheless, it will have major impacts on all aspects of life, with personalized advertisement and [self-quantification](https://en.wikipedia.org/wiki/Quantified_Self) leading the charge. But is there a place in Academia? To understand this let's first understand more about Data Science, it's promises and workflows and finally venture a little into its potential academic applications.

##Yet another attempt of defining Data Science ...

There are gazillions of blogs, papers, articles, diagramms and other electronic information channels that already try to define and clarify the very young and still obsucre-fuzzy term 'Data Science' and it will still be years before a clear definition will even be close to come. However, it seems that there is for now some agreement of it's main ingredients nicely summarized in [Drew Conway's famous Venn-diagram](http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram)

[![Drew Conway\'s Data Science Venn Diagram](/resources/cdl_blog/Data_Science_VD.png)](http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram)

A common quote defines a data scientist as an individual *who is better at statistics than any software engineer and better at software engineering than any statistician* ([@josh_wills, 2012](https://twitter.com/josh_wills/status/198093512149958656)). This captures but the basics of what practioners of this disicpline cover. As seen in the Venn diagram above, Data Science finds itself at the intersection of Statistics, Machine Leanning and a particular business need (research question).

- **Statistics** is maybe the most obvious component as it is not surprising that Data Science is concerned with analysing data using averagages, correlations and more complicated mathematical tools. This is supplemented by

- **Machine Learning** subsums the programming and data munging aspects. It is used to automatically sift through data that are unwieldly to analyse by a human such as, e.g., data with too many features to manually inspect (this is sometimes referred to as an aspect defining Big Data). The output typically is a certain number of features that are important within a given business problem and can be used to gain inisght using

- the **Domain Knowledge** is needed to actually identify and pose the urgent questions that are driving business actions. It is the one key ingredient that is not generalizable accross industry segments and as has to be acquired for every new problem that is encountered.

The most formal definition I found is provided by NIST's [Big Data Framework](http://bigdatawg.nist.gov/V1_output_docs.php):

> Data science is the empirical synthesis of actionable knowledge from raw data through the complete data lifecycle process.

Apart from introducing new keywords that I will not go into more detail here, I want to draw attention to the little word *actionable*. This is the key component of Data Science that distinguishes it from mere data analysis and whose implementation gives rise to the dicotomy of data-driven vs. data-informed.


##Promises and shortcomings of Data Science - the Hype cycle

The [Gartner 2014 Hype Cycle report](http://www.gartner.com/newsroom/id/2819918) for the emerging technologies puts *Data Science* at the point where it just enters the region of inflated expectations.

[![Gartner 2014 Hype Cycle](/resources/cdl_blog/gartner_2014_emergingTech_hypecycle.png)](http://www.gartner.com/newsroom/id/2819918)

A consequence of this hype-inflation is an unreasonable expectation of the problem-solving power of of Data Science. Most prominently, one of the early proponents of Big Data and Data Science, Wired's editor in chied, Chris Anderson, blogged in 2008 that the advent of the new data age will bring '[The End of Theory: The Data Deluge Makes the Scientific Method Obsolete](http://archive.wired.com/science/discoveries/magazine/16-07/pb_theory)'. It is not hard to see that this projection is off; already in the light of understanding highly complex processes where sufficient data is not and might never be available. A detailed argument (that goes beyond just a response to Anderson's opinion) has been formulated by Nick Barrowman in his article about [Correlation, Causation and Confusion](www.thenewatlantis.com/publications/correlation-causation-and-confusion).

The realization that Data Science and in particular Applied Machine Learning is not completely agnostic of the problem space it is applied to has some serious implications for the analyst's approach to unknown data. Most importantly the domain knowledge is indispensable for correctly judging the predictions of the algorithms and making correspondingly wise decisions without blindly trusting the outcomes of a computer.


##Actionable Business Insights: Data-Driven vs. Data-Informed

The expression '*Be data informed, not data driven*' seems to originate with Facebook's Adam Mosseri's [talk in 2010](https://www.youtube.com/watch?v=bKZiXAFeBeY). He coined these terms to explicitly distinguish two ways of approaching a data problem

- The **Data Driven** approach analyses the data and then adjusts the system in order to optimize a certain metric. An example would be the placement of an ad on a website. We move the ad slightly until the number of clicks on the ad is maximal. The problem of this approach is that you can get trapped in locally optimal points, i.e. points where any deviation leads to a decreasing click rate, however you cannot be sure that there is not an even better way of displaying the ad. A good description of this idea is given in a [blog](http://52weeksofux.com/post/694598769/the-local-maximum) by Joshua Porter. To find the absolute best solution, an immense amount of data and time is necessary (technically and ininite amount of both).

Another shortcoming of the data-driven approach is that not everything can be formulated as an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem), i.e. the fundamental mathematical formulation of Machine Learning. Hence the collection of proper data is not always guaranteed; convince yourself, by thinking about collecting data for a problem, where you don't have a good idea of a what a satisfying answer has to look like. To circumvent these problems one can apply

- The **Data Informed** way of viewing a problem aims to avoids micro-optimization as mentioned above. Furthermore it allows to include decision-making inputs that cannot be cast into a "standard ML form", such as:
	- Qualitative data
	- Strategic interests
	- Regulatory bodies
	- Business interests
	- Competion
	- Market

Data-Informed decisions essentially leverage the best of two worlds: The analysis of data given a hypothesis, followed by a well-rounded decision, that again leads to the collection of new data to improve business. This process is nicely summarized in Joe Blitzstein's visualization of the [Data Science Process](cs109.org) and has even a industry standard know as [CRISP-DM](https://en.wikipedia.org/wiki/Cross_Industry_Standard_Process_for_Data_Mining)

[![Data Science Process](/resources/cdl_blog/Blitzstein_DataScientistWorkflow.png)](cs109.org)

##Is there some place in Academia?
There has long been calls to Academia to better prepare students (especially Ph.D. graduates) for the job market and the explosion of Data Science as the [sexiest job of the 21st century](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century/) led to the creation of many [Data Science Master programms](http://www.mastersindatascience.org/). The value of these programms is not foreseeable yet, as not many graduates have hit the market, but it shows that Academia is trying to hear parts of the call.

However, apart from prepaparing students for life outside the Academy, is there a place for applying Data Science to academic fields, and maybe establish it as a scientific field? Data Science comprises much more than the typical one-off statistical data analysis of a typical scientific study and touches many aspects of data management, data warehousing, reproducabilty, and data-best-practices. To advance Science as a field it will become necessary for researchers and staff to develop a $$\pi$$-shaped skills profile (as coined by Alex Szalay)

![Pi-shaped skill set](/resources/cdl_blog/pi_shaped_skills.png)

The first leg, a.k.a. the domain speciality or domain knowledge, is certainly already established after years of efforts to advance a field. However, this already hints at a fundamental problem that 'Data Science' as a scientific field will face. A domain-agnostic approach to it must be fundamentally flawed as it would lack the domain expertise as its third important pillar. Consequently, establishing a scientific field with the goal of a standalone model like 'Data Science as a Service' is likely to fail - the Data Scientist will have to be embedded in a field with sufficient domain expertise and need to learn cross-disciplinary techniques to successfully tackle the data challenges at hand.

This directly feeds into the second, to-be-developed, leg, which  contains the broad segment of advanced computational literacy. As more and more people are starting to leave the Academy it becomes obvious that the current system [dis-incentivices this development](https://jakevdp.github.io/blog/2014/08/22/hacking-academia/). However, it also hints at very low-hanging fruits to improve the handling of scientific data by starting to adopt simple best-practices and encouraging students to develop these skills, rather than creating an irreproducible, one-off study. Recognizing efforts to make studies repeatable, transparent and well-documented is crucial to advance the ever-more-diversified scientific fields into the next century, to preserve their efforts and more importantly make them *discoverable*. As Denis Diderot put it in his 1755 Encyclopedie:

> As long as the centuries continue to unfold, the number of books will grow continually, and one can predict that a time will come when it will be almost as difficult to learn anything from books as from the direct study of the whole universe. It will be almost as convenient to search for some bit of truth concealed in nature as it will be to find it hidden away in an immense multitude of bound volumes.

To prevent this from happening, we need to think about re-organizing the way scientific information is produced and stored. And the first step is to change incentives from within.

##Where to go next ...
It is clear that Data Science will have [major impacts](http://www.pewinternet.org/2014/08/06/future-of-jobs/) on almost every aspect of our (not only digital) lives. The extent though will strongly depend on our ability to make sense of the data and develop tools and intuitions to understand and check computerized predictions against reality. Moreover it requires a better understanding of its limitations as well as its mathematical-statistical foundations. Without [thorough basic knowledge](http://www.pewinternet.org/2014/11/25/web-iq/), Data Science and Machine Learning, will be seen as belonging to the side of the Dark Arts and [raise scepticism](http://www.pewinternet.org/2014/04/03/older-adults-and-technology-use/). This applies equally to small as well as big data and strongly dependes on our success in making data discoverable and processable.


[^fn-comparedToStatistics]: There is an ongoing and hot debate if Data Science is not just Statistics in disguise. I believe it is not as it adds several components not found in the classical studies of Statistics. However, I do not want to engage in this almost religiously fought discussion. 

[^fn-googleCounts]: Searching for `Data Science` on Google Search yields about 283,000,000 results in 0.48 seconds (!) and the count is rising.

##About the author
Dr. Johannes Otterbach is a Data Scientist at LendUp with a passion for big data technologies and applications to real world problems. He is an established scientist with more than 15 publications in high impact journals and he has won several awards. Before joining LendUp he worked as a software engineer at Palantir Technologies. He earned his Ph.D. in Physics from the University of Kaiserslautern, Germany in topics related to Quantum Computing and held a postdoctoral fellowship in the Harvard Physics department where he broadened his interests in research and computational problems.