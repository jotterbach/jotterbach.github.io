---
layout: post
title: Exit Data-driven, Entrance Data-informed
---

#Exit: Data-driven, Entrance: Data-informed

Big data, data science, data-driven and now data-informed? What is it about all these hot topics that makes everyone so excited and how do all these things fit together? To understand the origin of these terms and their meanings we need to look a bit into the history of the very young field of Data Science and what it is and [why it is so hot field](https://speakerd.s3.amazonaws.com/presentations/c47f606815d34e7e8b7b1ca8be55eff1/Why_Data_Science__2_.pdf). While doing so we will also encounter topics such as big data, machine learning and what statistics and domain knowledge have to do with the mix.

##Yet another attempt of defining Data Science ...

There are gazillions of blogs, papers, articles, diagramms and other electronic information channels that already try to define and clarify the very young and still obsucre-fuzzy term 'Data Science' and it will still be years before a clear definition will even be close to come. However, it seems that there is for now some agreement of it's main ingredients nicely summarized in [Drew Conway's famous Venn-diagram](http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram)

<center>
	[![Drew Conway\'s Data Science Venn Diagram](/resources/cdl_blog/Data_Science_VD.png)](http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram)
</center>

A common quote defines a data scientist as an individual *who is better at statistics than any software engineer and better at software engineering than any statistician* ([@josh_wills, 2012](https://twitter.com/josh_wills/status/198093512149958656)). This captures but the basics of what practioners of this disicpline cover. As seen in the Venn diagram above, Data Science finds itself at the intersection of Statistics, Machine Leanning and a particular business need (research question).

- **Statistics** is maybe the most obvious component as it is not surprising that Data Science is concerned with analysing data using averagages, correlations and more complicated mathematical tools. This is supplemented by

- **Machine Learning** subsums the programming and data munging aspects. It is used to automatically sift through data that are unwieldly to analyse by a human such as, e.g., data with too many features to manually inspect (this is sometimes referred to as an aspect defining Big Data). The output typically is a certain number of features that are important within a given business problem and can be used to gain inisght using

- the **Domain Knowledge** is needed to actually identify and pose the urgent questions that are driving business actions. It is the one key ingredient that is not generalizable accross industry segments and as has to be acquired for every new problem that is encountered.

The most formal definition I found is provided by NIST's [Big Data Framework](http://bigdatawg.nist.gov/V1_output_docs.php):

> Data science is the empirical synthesis of actionable knowledge from raw data through the complete data lifecycle process.

Apart from introducing new keywords that I will not go into more detail here, I want to draw attention to the little word *actionable*. This is the key component of Data Science that distinguishes it from mere data analysis and whose implementation gives rise to the dicotomy of data-driven vs. data-informed.


##Promises and shortcomings of Data Science - the Hype cycle

The [Gartner 2014 Hype Cycle report](http://www.gartner.com/newsroom/id/2819918) for the emerging technologies puts *Data Science* at the point where it just enters the region of inflated expectations.

<center>
	[![Gartner 2014 Hype Cycle](/resources/cdl_blog/gartner_2014_emergingTech_hypecycle.png)](http://www.gartner.com/newsroom/id/2819918)
</center>

A consequence of this hype-inflation is an unreasonable expectation of the problem-solving power of of Data Science. Most prominently, one of the early proponents of Big Data and Data Science, Wired's editor in chied, Chris Anderson, blogged in 2008 that the advent of the new data age will bring '[The End of Theory: The Data Deluge Makes the Scientific Method Obsolete](http://archive.wired.com/science/discoveries/magazine/16-07/pb_theory)'. It is not hard to see that this projection is off; already in the light of understanding highly complex processes where sufficient data is not and might never be available. A detailed argument (that goes beyond just a response to Anderson's opinion) has been formulated by Nick Barrowman in his article about [Correlation, Causation and Confusion](www.thenewatlantis.com/publications/correlation-causation-and-confusion).

The realization that Data Science and in particular Applied Machine Learning is not completely agnostic of the problem space it is applied to has some serious implications for the analyst's approach to unknown data. Most importantly the domain knowledge is indispensable for correctly judging the predictions of the algorithms and making correspondingly wise decisions without blindly trusting the outcomes of a computer.


##Actionable Business Insights: Data-Driven vs. Data-Informed

The expression '*Be data informed, not data driven*' seems to originate with Facebook's Adam Mosseri's [talk in 2010](https://www.youtube.com/watch?v=bKZiXAFeBeY). He coined these terms to explicitly distinguish two ways of approaching a data problem

- The **Data Driven** approach analyses the data and then adjusts the system in order to optimize a certain metric. An example would be the placement of an ad on a website. We move the ad slightly until the number of clicks on the ad is maximal. The problem of this approach is that you can get trapped in locally optimal points, i.e. points where any deviation leads to a decreasing click rate, however you cannot be sure that there is not an even better way of displaying the ad. A good description of this idea is given in a [blog](http://52weeksofux.com/post/694598769/the-local-maximum) by Joshua Porter. To find the absolute best solution, an immense amount of data and time is necessary (technically and ininite amount of both).

Another shortcoming of the data-driven approach is that not everything can be formulated as an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem), i.e. the fundamental mathematical formulation of Machine Learning. Hence the collection of proper data is not always guaranteed; convince yourself, by thinking about collecting data for a problem, where you don't have a good idea of a what a satisfying answer has to look like. To circumvent these problems one can apply

- The **Data Informed** way of viewing a problem aims to avoids micro-optimization [^] as mentioned above. Furthermore it allows to include decision-making inputs that cannot be cast into a "standard ML form", such as:
	- Qualitative data
	- Strategic interests
	- Regulatory bodies
	- Business interests
	- Competion
	- Market

Data-Informed decisions essentially leverage the best of two worlds: The analysis of data given a hypothesis, followed by a well-rounded decision, that again leads to the collection of new data to improve business. This process is nicely summarized in Joe Blitzstein's visualization of the [Data Science Process](cs109.org) and has even a industry standard know as [CRISP-DM](https://en.wikipedia.org/wiki/Cross_Industry_Standard_Process_for_Data_Mining)

<center>
	[![Data Science Process](/resources/cdl_blog/Blitzstein_DataScientistWorkflow.png)](cs109.org)
</center>

##Where to go next ...
It is clear that Data Science will have [major impacts](http://www.pewinternet.org/2014/08/06/future-of-jobs/) on almost every aspect of our (not only digital) lives. The extent though will strongly depend on our ability to make sense of the data and develop tools and intuitions to understand and check computerized predictions against reality. Moreover it requires a better understanding of its limitations as well as its mathematical-statistical foundations. Without [thorough basic knowledge](http://www.pewinternet.org/2014/11/25/web-iq/), Data Science and Machine Learning, will be seen as belonging to the side of the Dark Arts and [raise scepticism](http://www.pewinternet.org/2014/04/03/older-adults-and-technology-use/). This applies equally to small as well as big data.


[^note-id]: According to Facebook *A micro-optimization is when one interest over-optimizes for itself at the expense of another, and this is a very difficult thing for us as we scale. As we scale, a division of labor becomes invariably sort of more intense, and you have different people representing different interests…*