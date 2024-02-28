---
layout: post
title: "I'm an AI Convert: Cautiously Excited for the Future"
date: 2024-01-12 14:00:00 -0400
categories: updates-coding
---
Hello Reader, welcome back.

As the title states (which GPT-3.5 helped me write), I'm slowly becoming more comfortable with the idea of a world that integrates AI into our day to day life. I've always teetered between cautiously optimistic to mostly pessimistic when regarding AI. From facial recognition AI being faulty for BIPOC, to deciding who "owns" art styles, AI has felt like more headache than help from where I was standing. Well, until I was put on an AI project at work. I'm held by an NDA so you won't be getting specifics, only things that are already publically available. This post is more about a look ahead based on my learnings through the work. I learned so much on the project, and am thankful that I went in with an open mind. It was honestly wonderful. It really opened my mind to what can be achieved with Artificial Intelligence. I'd never dared to imagine positives with AI. If you've read my <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2021/07/07/AI-Throughout-Time.html" target="_blank" title="AI throughout Time">previous work</a>, you already know how cynical I used to feel, and even so, that post was meant to be a stepping stone to the place I am now with AI. Let's get into it. 

### The Dark Side
Here is my take. AI is replacing some things. I think this can be both good and bad.

 It can take time for new things to integrate into our society. AI is no differet. There are pros and cons. Our legal systems worldwide are still accomodating all the new changes, navigating and attempting to assert guardrails. The fact of the matter is capitalism is a hellscape and people need to eat. AI taking jobs away is a *real* possibility. From a coder's standpoint, I know we aren't going to be eliminated, and I think the same logic that brought me to that conclusion can also be applied to some other industries -- but I'll get into that more later. 
^Src ab regulation

-writemore
Take [come up with an easy example anyone can understand.] for example.

 Automation in our current system can simplify and replace certain jobs. Under our current socioeconomic system, people in such industries will not survive if AI keeps going in the direction it's moving. If [companies] were making this change with supporting communities in mind, I see AI being widely accepted. If we move away from this fast-paced lifestyle, I see AI as a tool that can improve all of our lives.

Imagine for a moment:
> A country commissons and provides data to an AI model that is trained to calculate how much water, nutrient-rich or dense soil, sunlight and other variables neccesary to provide a community with food on a yearly basis. Taking the weather data from the last 10 years into account, it formulates a plan of what to grow when and where. We then find these condiitions and over a few years attempt to work out the kinks - making something like this sustainable in the real world. 

Of course, there are things AI can't do - the actual planting and harvesting (maybe in a few years), preparing these crops for natural disasters due to climate change, and more -- but you can imagine how this powerful tool can be used to benefit the masses.
Unfortunately, this feels like a pipe dream - money will always be the focus of the rich. I am a believer that a better world is possible but I'm not so jaded to think it's going to happen overnight.

We also have cons around intellectual property. Generative AI has been used to steal art from artists. It's as simple as feeding midjourney instagram photos of from your favorite artist and prompting it to generate something based on the references. (Feefal or other artist src) It's not perfect, but it gets better with time. I personally do not believe that AI art carries the same prose, emotion and weight that art made by artists does. I think there is something inherently human that AI cannot reproduce. That doesn't mean that AI art is not pretty. I have the pixel 8 and I use the features to make cute phone backgrounds, but it's trained on things like nature and doesn't make anything involving humans (check). It's trained on nature, objects, plants and etc. But that doesn't stop people who do not hold that value from stealing from artists or devaluing their work using GenAI like Midjourney and more. [This really works me up. Imagine spending your life perfecting your craft and someone rips off your art with AI and then makes merch of it.] 

As mentioned [need to check] in a <link> previous AI post - facial recognition AI continues to fail us. Just last year, IN 2023! It's silly to me, that we are allowing tech without regulation be used. It can harm people's lives. [article of black woman who was arrested in front of her kids] AI can have a place in our society, but these aformentioned cons only really scratch the surface. If this is something you'd like me to continue to write about, I can -- but I intentioanlly included main bad points to not depress us too much. I wanted to acknowledge the mind bogglingly bad before I get into more hopeful, promising and dare I say - exciting developments.

### The Bright Side
AI has real world opportunity to simplify the way we operate in our daily lives. In addition to my wishful example in the last section, AI does have more realistic potential pros.
research , coding bit, etc

Middle: Will we ever divest from money-first things and exploitative practices? - write more.


Now the AI we use today definitely isn't there yet. It's on its way for sure, but keep in mind this was a concepting project. Our designers’ task was to imagine and design as if this world existed. The dev team was responsible for taking these designs and creating a live demo or prototype. You may be wondering then, if the tech doesn't exist yet, what was our deliverable? Using the current tools available, we created 2 developed prototypes, both with a chat interface to mimic one way of what it would be like to:

On this project we actually leveraged not one but two popular publically available models - so if you're a coder, you can definitely get some value out of reading ahead from my experience. We used ChatGPT and PaLM2. Having worked with both now I can definitely say I picked up on some immediate similarities and differences. ChatGPT is a lot easier to work with, but I have to give props to Google because PaLM2 wasn't far behind and Gemini was released after I rolled off the project. (In hindsight it's funny because if Gemini became publically available I can only imagine how different this blog post would be.)

Again, while I'm held by a NDA, the learnings I can share are around Prompt Engineering. If you have been following others in tech you may know what this means, but for the sake of: Prompt Engineering is _.

We used primarily Few Shot, a prompt engineering technique where you give a model a few examples of input and output of what you want it to generate. Most of the time adding more examples, or repeating ourselves was a hacky-fix.

Some pros/cons to each: (convert to table.)

    PaLM2 would not listen to certain constraints initially, where GPT-3.5 would, for example, shorten our personal agent responses so users weren't getting walls of text.
    PaLM2 took some finagling to get parseable, clean JSON to work with, and in some cases, like meal plans for the second proto it simply refused to do so.
    With PaLM2 we had to repeat ourselves several times in the prompt to get it to “listen”
    When only relying on function calls, ChatGPT would sometimes immediately jump ahead of steps in our cycle of what we wanted to return, which begs the question -- are we actually using AI to it's full capacity? If it's trying to automate and simplify a cycle we have defined for users, it begs the question - shouldn't we then rework that cycle to keep up with it, instead of slowing it down?**
 
 **That being said, I do think the way we are operating AI is a little counterintuitive - we have it using/displaying GUIs so we can understand how it is “thinking” and taking action. This is good for enforcing guardrails, but on the other hand we could be slowing them down and preventing potential. The AI of today are error prone, and so having it interact with our computers like humans do is useful to debug, course correct and monitor. But a future where they aren’t error prone, or can even identify errors and fix themselves approaches… and we’re left to speculate what that future interaction, automation and execution looks like.
 


### Hallucination… a good thing?

On this project we turned an AI weakness into a strength. Essentially were letting these models hallucinate (make-up false information) for a purpose.

We mimiced things like an "internet search", we hallucinate specialties for fake AI tools. We were limited to whatever training data the models already had though, but in the future you could also create/us a Vector DB.


###  Taking a step back
So, what does this new AI powered world look like?

None of us have *the* answer. We are only left to brainstorm, speculate and create. Even onthe project we had some “black box” moments, so to speak. 

-Write more here

### The frightening question

With all these advancements I do want to highlight the feeling many hesitant developers have, myself included, previous to this project: “What happens to coders?”

AI can write code, so who is to say we won’t be replaced? On this project I’ve started to ask AI for help when stuck. I do try to figure things out on my own so I as a developer can understand what I’m building, but sometimes we hit a wall, and can’t move forward. GPT has been really helpful in those times, suggesting approaches or identifying syntax errors. AI also has great potential in automating testing, api integration and more.

In November OpenAi’s announcement about building custom GPTs, has already sparked a variety of promising examples.

Whether you are on or off board with AI, it is here, it is coming. The advances made even in the last 3 months have proven that. We can only hope to keep exploring and pushing forward to dream & drive how we want this future to unfold. It seems much more appealing to me to learn, grow and develop rather than hoping somebody else will figure it out.