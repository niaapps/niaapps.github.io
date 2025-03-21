---
layout: post
title: "AI Throughout Time"
date: 2021-07-07 08:00:00 -0400
categories: updates-coding
---
<!-- unofficial launch is 7/7-->
 <meta name="description" content="Dive into the AI world!">
<!-- Need to copy/paste to each post: Don't forget to change updates-personal or updates-coding-->
<div class="feed" markdown="1">
 [For my email subscribers, please click here](https://niaapps.github.io/niaapps-blog/updates-coding/{{page.date | date:"%Y/%m/%d/"}}{{page.slug}}.html "Link to this post")
</div>

Hi Readers. The other day I asked for some feedback on what you want to learn more about. I got a reply asking to explore more about AI or Artificial Intelligence.

When you hear AI, what is the first thing that comes to mind? Are you an enthusiast, knowing the first AI were used to play chess against humans? Do you think of Alexa, the AI on Amazon devices, or being able to say "Hey Google!" to your android phone(Siri for iPhones)? Do you recall AI like <a href="https://twitter.com/RealSophiaRobot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" title="">Sohpia</a> the human-like robot who can tweet, hold a conversation and so much more! Maybe your mind goes to the technical side, to ML (Machine learning). All of these are under the umbrella of artificial intelligence. This post will be talking about several AI projects from the last 10 years to today.


## The ML of my AI <sub class="mouse-over">(Pun on "Apple of my Eye")</sub>
Before we get into specific and exciting tech let's lay some groundwork. In order for any AI to operate they have to be taught first.

### Machine Learning
Imagine you are trying to teach a child how to get ready for bed. First you would do the things for them to give them the general structure: brushing their teeth, washing their face, etc... Then once they know the steps, you would monitor them to verify they can do it themselves, correcting any mistakes they make in the process. Machine learning (ML) is a lot like this example. We teach computers how to do a task and then monitor them until they have an acceptable success:fail ratio for deployment. ML allows computers to explore data and recognize patterns. An example would be YouTube suggesting relevant videos to you. It makes a prediction based on your watch history, your location and its internal data on videos you haven’t watched yet. ML is essentially the term for teaching AI or machines.

### Deep Learning, Neural Networks
Deep learning(DL) is a subset of ML. Deep learning is ML that is based off of the human brain. AI that learn with deep learning will have an artificial neural network. DL requires a large data set to teach the machine. This is both expensive and time-consuming as you often need <a href="http://niaapps.github.io/niaapps-blog/updates-coding/2021/05/31/Cryoto-Craze.html#GPU" target="_blank" title="My last post where I talk more about GPU's">GPU’s</a> which possess higher processing power. AIs that employ DL will take in a data-set, teach themselves to recognize patterns and then give predictions based on what it learned. Neural networks are how we model the human brain. These networks are made up of artificial neurons. They have an input and output layer, and some layers in between that help AI decipher information it takes in.

### Symbolic AI
Before Deep learning existed AI was dominated by Symbolic AI AKA Good, Old-Fashioned AI. Symbolic AI does not require massive amounts of data like other ML. It does not ensue training or guesswork like other methods either. Symbolic AI do have access to a knowledge base- symbols to represent our real world. By representing problems as symbol it uses logic to problem-solve. Symbolic AI use relational statements. Let’s say we have a <a href="http://niaapps.github.io/niaapps-blog/updates-coding/2021/07/15/INIT-Hackathon.html#donut" target="_blank" title="Virtual Strawberry Donut I made during a hackathon">strawberry donut.</a> We can represent symbols inside ().<br/>
So:<br/>
<br/> 
(donut)<br/> 
<br/> 
Relations are used as descriptors, descriptors are shown next to the symbol, so:<br/> 
<br/> 
strawberry(donut)<br/> 
<br/>
Let's say I eat this donut:<br/>
<br/> 
Eat(Nia, Donut) <br/>
<br/> 
Symbolic AI uses truth tables, or propositional logic to understand the world around it.
Let's say I am eating a freshly baked strawberry donut.

<table>
  <tr>
    <th>fresh(donut)</th>
    <th>strawberry(donut)</th>
    <th>Eat(Nia,donut)</th>
    <th>fresh(donut) AND strawberry(donut) AND Eat(Nia,donut)</th>
  </tr>
  <tr>
    <td>true</td>
  	<td>true</td>
    <td>true</td>
    <td>true</td>
  </tr>
</table>

If you’ve ever taken a discrete math class, this is an AND truth table. You’d know that for the last column to be true the first 3 must also be true. AND meaning propositional logic or gates. AND is true when both statements are true and false if one or more statement is false. Another common gate is OR, which is true if either statement is true, and false if both are false.

This is a short example of how an AI could come to understand a situation. It would most likely see true as 1, and false as 0. It would compute AND as multiplication and OR as addition. Symbolic AI has these and other gates at its disposal to figure out the world and solve problems. It is admirable how they accomplished so much with so little, before the advent of Deep Learning.

### Natural Language Processing
Natural language processing(NLP) allows AI to understand our everyday language. It grants them the ability to translate sentences from one language to another. This is because it can understand the meaning of a sentence. NLP is rule based human language. It is often used with Deep learning(Neural NLP) to help enhance AI’s ability to understand voice commands. NLP includes speech recognition, sentiment analysis, understanding references, and name entity recognition. (Ex: understanding that Seattle is a city, or that Yessenia is a person’s name). NLP also deals with natural language generation; coming up with sentences on its own to respond to users. This type of ML is used in a lot of AI because the everyday user will still need to communicate with its machine and direct it to use it. Previous to Deep learning, NLP was used with Symbolic AI or Symbolic NLP. 


## About 10 years ago...
#### (2010 - 2015) 
10 years ago when you heard of AI the connotations were either gaming (both video games and popular game shows) or the budding virtual assistants.

#### Kinect
In 2010 Microsoft came out with the “Kinect” for it’s Xbox 360 console. It was the first gaming device to track human movements using infrared and a 3D camera. It uses AI algorithms to process the data it receives about your environment through its lens. Then in turn it controls the console without a physical controller. Kinect was taught through machine learning how the human body works, so it correctly digests the input it receives. It was taught to understand depth: how close or far you were to it in view of you, as well as detecting the different parts of a person. Telling apart our arms from legs, head from chest, etc. The same technology is used in a <a href="https://www.microsoft.com/en-us/research/blog/kinect-sign-language-translator-part-1/" target="_blank" title="">kinect sign language translator</a>. You can explore Kinect's other uses <a href="https://analyticsindiamag.com/kinect-sensor-the-ai-tool-you-did-not-know-you-had/" target="_blank" title="">here.</a>


#### Watson
IBM released its question-answering computer “Watson” in 2010. It could answer questions if posed in natural language. Watson is used for information retrieval, advanced natural language processing, knowledge representation, and automated reasoning. All of these skills applied to questions and answering, open to nearly any topic. Watson competed against Ken Jennings and Brad Rutter some of Jeopardy!’s top past players. Watson won against both of them in practice runs before airing, and twice in two actual games. Watson also played against US Congress members, also claiming a win. You can read more in detail <a href="https://en.wikipedia.org/wiki/Watson_(computer)#Jeopardy!" target="_blank" title="Recounting of Watson on Jeopardy!">here.</a>


#### Siri
In 2007 SRI Artificial intelligence center developed the template for what would later become Siri. Apple acquired the tech in 2010, tweaking it for their IOS devices before releasing it in 2011. Siri is the first modern digital virtual assistant. Siri uses NLP and machine learning to aid its users.


#### Alexa
Alexa, Amazon’s virtual assistant was debuted in 2013. Alexa like other assistants can process natural language questions, and as of 2018 can even have back and forth dialogue with its users. Alexa was taught with Deep learning. In 2019 <a href="https://www.theverge.com/2019/1/4/18168565/amazon-alexa-devices-how-many-sold-number-100-million-dave-limp" target="_blank" title="">The Verge</a> reported 100 million devices with Alexa on them had been sold. 


#### Cortana
Following Apple’s lead Microsoft developed their virtual assistant Cortana. It was released for their phones in 2014, expanding it onto PC’s in 2015. Microsoft eventually discontinued the assistant on their phones in 2017. Again, like the other virtual assistants, NLP plays a big part as well as DL.


## 5 years ago to today
#### (2016-2021) 
AI from 5 years ago to today have branched out into so many different areas unlike 10 years ago. We are on the brink many amazing discoveries in multiple areas. Some areas include entertainment, business, and general research.

#### Google Assistant
Google also followed suit of Apple and Microsoft and released their Google Assistant in 2016. Today it comes standard on phones, Google home and home-mini and more. The same NLP is used as well as DL to interact and understand its user’s better as well as provide more accurate searches and help with tasks.


#### Sophia
Hanson Robotics had us on the edge of our seats in 2016 when they debuted Sophia, a human-like robot. "She" was created for researching human-robot interactions, and it’s potential applications for entertainment. Sophia is the first robot Innovation Ambassador for the United Nations Development Programme. Like IBM’s Watson, Sophia uses NLP, in addition to neural networks, symbolic AI and more. Sophia uses machine perception and can recognize human faces and even has emotions. Explore more about Sophia <a href="https://www.hansonrobotics.com/sophia/" target="_blank" title="More about Sophia">here.</a> 


#### Facebook Chat-bots
Facebook Artificial Intelligence Research(FAIR) lab created two chat-bots in 2017. Both bots used machine learning algorithms to teach them how to converse. FAIR had both chat-bots learn how to negotiate. They were given a set of items (each having a point value) and told to split the items between themselves and someone (human) or something (another chatbot or other AI) else. Eventually to develop more of this skill they had these chat-bots go through “Reinforcement Learning” with each other. Left to their own devices the two chat-bots deviated from their normal negotiation patterns. They eventually created a new way of communicating that diverged from human language. We know that they were communicating because points were still awarded when a trade was made. Even if the language looks like gibberish to the human eye, it is still indicative of the bots trying to negotiate. The situation was unexpected, but it helped further AI research. Specifically, how AI operate when not being pushed to do what we want them to do, what do <em>they</em> choose to do? For it’s desired purpose the project was a failure and eventually shut down. From an objective point of view research can be drawn, taken and used from this instance. You can read more <a href="https://engineering.fb.com/2017/06/14/ml-applications/deal-or-no-deal-training-ai-bots-to-negotiate/" target="_blank" title="FB engineering article on the chabots">here.</a> You can find the <a href="https://github.com/facebookresearch/end-to-end-negotiator" targer="_blank" title="code of chatbots on github">github</a> repo and view the code or deploy it yourself!

<div class="scale-img">
  <img id="img-id" src="/../../images/scarybeauty.jpg" alt="Android Alter 3 performing Scary Beauty in Germany" width="500px" height="auto">
</div>

#### Android Alter 3
The next piece of AI is a jointly developed project from researches at the University of Tokyo and Osaka University. They released Android Alter 3 in 2018. Its purpose is the similar to Sophia, to understand how humans would react to an autonomous robot. The researchers hope to “explore fundamental questions of whether robots can obtain a sense of life, and what life itself may mean.”
Android Alter has prosthetic skin for it’s face, neck and arms, it was not designed to be identical for humans. This AI actually conducts a human orchestra. Its movements are based on a CPG (central pattern generator) which functions like a human spinal cord. Alter 3 also uses a neural network. This project has had performances around the world, from Australia to Japan and even Germany. The piece Alter 3 conducts is called “Scary Beauty” produced by Keiichiro Shibuya. Alter 3 decides the tempo, volume and singing expression. <a href="https://youtu.be/UFkItzIC02g" target="_blank" title="">Here</a> is a clip of a performance in Tokyo.

<div class="scale-img">
  <img id="img-id" src="/../../images/waymo.png" alt="Waymo Driver" width="300px" height="auto">
  <img id="img-id" src="/../../images/waymo2.png" alt="Waymo One" width="500px" height="auto">
  <img id="img-id" src="/../../images/waymohow.jpg" alt="How Waymo &quot;see&quot;" width="475px" height="auto">
  <img id="img-id" src="/../../images/via.jpg" alt="Waymo Via" width="350px" height="auto">
</div>

#### Waymo Driver
If you recall in 2008 Google was starting development on self-driving cars, or autonomous vehicles. In 2009 Google founded Waymo with the specific purpose to keep working on self-driving cars. 9 years later Waymo Driver had its debut. The technology can be applied to several car models and in Phoenix Arizona you can catch a ride on the Waymo One. It is like Lyft or Uber, you can use their app to get a ride around the city, except Waymo One drives itself. This tech has been tested in 10+ states and Waymo asserts they are “The most experienced driver in the world”. Waymo Driver has driven billions of miles in simulation and millions of miles on public roads. In addition to Waymo One for people Waymo Driver can also be used on trucks or what they call Waymo Via for moving goods across the country. Waymo Driver uses machine learning to detect the things around it as it drives. Whether it's other cars, cyclists or pedestrians, it predicts what they may do and takes precaution accordingly. You can explore more about Waymo <a href="https://waymo.com/waymo-driver/" target="_blank" title="">here.</a>


#### AI and Covid-19 vaccines
In February 2020 Baidu a Chinese tech company aided in the development of covid-19 vaccines with their LinearFold AI algorithm. According to Baidu: 
<blockquote>
"LinearFold predicts the secondary structure of the ribonucleic acid (RNA) sequence of a virus—and does so significantly faster than traditional RNA folding algorithms. LinearFold was able to predict the secondary structure of the SARS-CoV-2 RNA sequence in only 27 seconds, 120 times faster than other methods. This is significant, because the key breakthrough of covid-19 vaccines has been the development of messenger RNA (mRNA) vaccines. Instead of conventional approaches, which insert a small portion of a virus to trigger a human immune response, mRNA teaches cells how to make a protein that can prompt an immune response, which greatly shortens the time span involved in development and approval."
</blockquote>
It is not specified what AI learning techniques were used, or how the algorithm was developed. I thought the  inclusion of AI in the medical field was too significant to not mention. 


<div class="scale-img">
<img id="img-id" src="/../../images/van-gogh.png" alt="My letter from Van Gogh AI" width="500px" height="auto">
</div>

#### Letters from beyond the grave
In June of this year my partner took me on a date to the Immersive Van Gogh exhibit here in NYC. While it was enchanting and exciting, I mention it because at the end in the gift shop you could scan a QR code and receive a “letter from Van Gogh”. You guessed it! They had an AI read all Van Gogh’s past letters and trained it to write in his style. You give the AI your name as ask it a question, or give it some sort of topic and “he” will write you your very own letter. Receive your own letter <a href="https://www.lettersfromvincentny.com/" target="_blank" title="Letter writing Van Gogh AI">here.</a>


I have highlighted interesting and important AI here, but <a href="https://www.g2.com/articles/history-of-artificial-intelligence" target="_blank" title="Complete History of AI">here</a> is a more comprehensive list if you wish to learn more. Also of note is a organization that hopes to teach the AI leaders of tomorrow, <a href="https://www.corp.aiclub.world/ai-for-kids" target="_blank" title="AI for kids">AI for kids.</a>

While writing this I’ve found myself a little inspired. If you can think of a fictional AI from a game, movie, TV show or anime comment it! I plan to compare fictional AI to real-world AI, and see what tech we have surpassed, measure up to, and hope to achieve in the future.

Thank you for reading!

<div class="button-post">
<a href="https://niaapps.github.io/niaapps-blog/updates-personal/2021/06/04/Culture-Dip.html" class="post-button" id="button-nxt">Previous Post</a>
<a href="https://niaapps.github.io/niaapps-blog/updates-coding/2021/07/15/INIT-Hackathon.html" class="post-button" id="button-nxt">Next Post</a>

</div>

<div class="thumbnail">
 <img id="img-id" src="/../../images/ai.jpg" alt="alt text">
</div>