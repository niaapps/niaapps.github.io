---
layout: post
title: INIT Hackathon
date: 2021-07-15 8:00:00 -0400
categories: updates-coding
---

 <meta property="og:description"name="description" content="Post about my time at MLH INIT">
 <meta property="og:image" content="https://niaapps.github.io/images/d3.png" alt="virtual donut I made" />
<link href="/css/syntax.css" rel="stylesheet">
<!-- Need to copy/paste to each post: Don't forget to change updates-personal or updates-coding-->
<div class="feed" markdown="1">
 [For my email subscribers, please click here](https://niaapps.github.io/niaapps-blog/updates-coding/{{page.date | date:"%Y/%m/%d/"}}{{page.slug}}.html "Link to this post")
</div>

Hi there readers!

My most recent tech adventure was a hackathon called INIT 2022 (short for initiate) hosted by <a href="https://mlh.io/" target="_blank" title="MLH website">Major League Hacking.</a> INIT is an event geared towards beginners and centers around learning. Unlike other hackathons, there are no prizes. It's about preparing for the upcoming hackathon season, building on skills you already possess and adding new ones to your toolkit. While there was a point system, it was only for fun. To participate you had to join a guild (team) and earn points for your guild by completing challenges. There was leaderboard, and each point you earned for yourself also gave a point to your guild. My Guild just missed top 10, coming in 11th place. The light competitiveness made the event lively, even if getting the most points only gave you bragging rights. The event had tons of workshops available. They allowed you to follow along and learn new tech, languages or skills. This hackathon spanned over a week and a day. We were encouraged to take days off (in my case time for work) and to get sleep when necessary (no 2am workshops for me!) On the bright side most of the workshops were recorded on twitch, so if there is anything you wanted to learn but missed you can come back to it.

Today I will be writing about the 3 of the challenges I participated in. I found this hackathon easy-going. Most of the intermediate challenges were being sponsored by specific software I didn't need. Instead, I found myself doing a lot of beginner level and no-code challenges. 


## No Code Challenges

### Misconception Graphic about Tech
If you came here from my instagram you may have already seen this! This challenge was to create a graphic about a misconception in tech. When I often speak with people who are older than I, they relent how they would have loved to get into tech but feel too old to start now. This is a common misconception that if you don't start early that you will fall behind, or not do well, but this simply is not true! It is never too late to start a tech career. All it takes is consistency to develop any new skill.

<div class="scale-img">
<img id="img-id" src="/../../images/misconcept.png" alt="Graphic about never too late to start in tech" width="500px" height="auto">
</div>

### Try something that intimidates you
One challenge was to try something that intimidates you. I have been coding since 2013, and am good at it. Often when you code you sometimes need graphic design. A great example is video games. I feel comfortable coding the back end of a video game, but designing a character or an object? Creating it so that it is recognizable and has proper lighting etc? These are all things I can’t really do with code. For a long time I’ve brushed off, choosing projects that don’t require the skill. When I saw this challenge I immediately thought *“Design”*. I followed a tutorial and made my first virtual design project… a 3D donut with lighting and all. The icing is gooey, the bread part looks soft and baked well. I would eat it if I could. The experience gave me such a deeper appreciation for designers in tech because making this donut took a lot of time and editing. The program I used was Blender 3D a computer graphics software toolset. Below are some photos from beginning to end:
<div class="scale-img" id="donut">
  <img  src="/../../images/d1.png" alt="alt-text" width="300px" height="auto">
  <img  src="/../../images/d2.png" alt="alt-text" width="300px" height="auto">
  <img  src="/../../images/d3.png" alt="alt-text" width="300px" height="auto">
  <img  src="/../../images/d7.png" alt="alt-text" width="300px" height="auto">
  <img  src="/../../images/d10.png" alt="alt-text" width="500px" height="auto">

</div>

## Coding Challenges
While I did participate in a few coding challenges most of them were very beginner level friendly. For example sorting a list in your preferred language. [Not the most exciting stuff]. I will only be highlighting one coding challenge since all the others have leetcode equivalents out there.

### Mobile App
I originally started this app with 20 minutes to go for the submission deadline of "Create a useless app". I did not make the time crunch because I had work and other responsibilities so tabled it hoping I could redeem it for points on another challenge. On the last days of the hackathon there was a challenge for "Create a Mobile App" so I took my code and finished it. I present to you: MotivateApp!

MotivateApp features Happy the cat, a character from the popular anime Fairy Tail. When you tap on Happy he will say nice things to you and brighten your day, below is a video demo of MotivateApp and some code behind it.

<div class="scale-img">
<iframe width="500" height="300" src="https://www.youtube.com/embed/6Qd8EAYmceA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

You can find the full code on GitHub <a href="" target="_blank" title="MotivateApp on GitHub">here.</a>
Here is MainActivity.java :
<div class="code">

{% highlight java linenos %}
package com.niaapps.motivateapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
TextView main;
ImageButton happy;
String [] array;
int count =0;
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        main = findViewById(R.id.motivate);
        happy = findViewById(R.id.imageButton2);
        array =  getResources().getStringArray(R.array.messages);


        happy.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                main.setText(array[count]);
                count++;

                if(count >= array.length){
                    count = 0;
                }
            }
        });
    }

}

{% endhighlight %}

</div>

What the above does is cycle through an array of messages when an ImageButton (Happy) is clicked. When it reaches the last index, it resets itself and starts from the first message once again. You can find the XML portion (the UI and strings.xml) on GitHub.

*What's next for MotivateApp?*
If I were to improve this simple project I would probably make an object from the Random Java class so Happy randomizes the things he says instead of showing them in order. I also would probably add more sayings in addition to sound and small animations to spice it up.

There were a few challenges where I had unfinished work due to the deadlines, such as, creating a multiplayer game, but will write about them later as I finish and improve what I do have.

Thank you for reading!


<div class="button-post">
    <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2021/07/07/AI-Throughout-Time.html" class="post-button" id="button-nxt">Previous Post</a>
    <!-- <a href="" class="post-button" id="button-nxt">Next Post</a> -->

</div>
