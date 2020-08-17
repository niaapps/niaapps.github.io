---
layout: post
title: "JavaScript Adventure"
date: 2020-08-17 16:00:00 -0400
categories: updates-coding
---
 <meta name="description" content="This is a coding post about work I have been doing in JavaScript both on this site and on a project I have for work.">
<!-- Need to copy/paste to each post: Don't forget to change updates-personal or updates-coding-->
<div class="feed" markdown="1">
 [For my email subscribers, please click here](https://niaapps.github.io/niaapps-blog/updates-coding/{{page.date | date:"%Y/%m/%d/"}}{{page.slug}}.html "Link to this post")
</div>
<link href="/css/syntax.css" rel="stylesheet">
<style>#section-1 ul, #section-2 ul, #section-3 ul{list-style:none;} 
.slider {
  -webkit-appearance: none;
  width             : 220px;
  height            : 19px;
  background        : #8ab5f5;
  outline           : thick;
  border-radius     : 25px;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance        : none;
  width             : 0;
  height            : 0;
  background-color  : transparent;
  cursor            : pointer;
  border-left       : 23px solid transparent;
  border-right      : 23px solid transparent;
  border-top        : 20px solid #f59657;
}
.slider::-moz-range-thumb {
  height          : 0;
  width           : 0;
  cursor          : pointer;
  background-color: transparent;
  border-left     : 23px solid transparent;
  border-right    : 23px solid transparent;
  border-top      : 20px solid #f59657;
}
#post-text{padding:20px;}
</style>
Hey Readers!

 This is a coding post about some work I have been doing in JavaScript both on this site and on a project I have for work. I'd say I'm a novice with JS because of how infrequently I use it as opposed to HTML & CSS. The language is widely used across the internet, so I pick it up when I need to. The challenge for me was that markdown/liquid is not intuitive for me. These new-age programming languages strip important parts so that you don’t have to be a techie to use them. In the same respect they lose abilities/functionality in some areas. I am old school in that sense. Figuring out how to use JavaScript with the markdown features for my site was my only hiccup.

Let’s lay groundwork, for those who don’t know. JavaScript ≠ Java. JavaScript, usually abbreviated to JS is a high level programming language that allows you to implement more complex features when developing webpages. The two demos I have for you today are a selector to sort my blog posts, and a Text size range slider. In the past the only significant work I can recall using JS for is making a site "infinite scroll." These really only scratch the surface, here is <a href="https://marvinthompson-code.netlify.app" target="_blank" title="Marvin's Portfolio site">Marvin Thompson</a> that has done way cooler stuff with JS. Marvin is another up and coming full stack web developer, and works with React which is a JS frame work. Linked above is his portfolio site. One notable project of his is <a href="https://facespace.netlify.app" target="_blank" title="FaceSpace is meant to be like Facebook">FaceSpace</a>. It is a social media project meant to emulate facebook. It just goes to show how much you can do with JS. Now that you have been amazed by the great work JS can achieve, here are the small things I've utilized it for:

I created a selector, or in plain terms a drop-down sort. I have been wanting to implement this feature for a while. Personally, having an idea vs executing it is a little daunting sometimes… It is easier to jump in if you’re being paid to do it, as opposed to doing something for my own site. I have slowly been finding myself becoming a perfectionist, so I worked up the nerve to dare to try something I may suck at first, like most beginners.

Here's some code:

CSS:
{% highlight css linenos %}
#coding-posts,
#personal-posts{display: none;}

#all-posts{display: inline-block;}
{% endhighlight %}
Html/markdown:
{% highlight html linenos %}

<!-- Declaring a selector and it's choices. -->
<div class="select-div"> 
  <select name="post-type" id="post-type" onchange="show_post_type(this)">
    <option value="1">All Posts</option>
    <option value="2">Coding Posts</option>
    <option value="3">Personal Posts </option>
  </select>
</div> 
<!-- seperate div for all posts -->
 <div id="all-posts">
  <ul>
  {% raw %}{% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" >{{ post.title }}</a>
     </li>
  {% endfor %}{% endraw %}
  </ul>
</div>
<!-- seperate div for coding posts -->
 <div id="coding-posts">
  <ul>
    {% raw %}{% for post in site.categories.updates-coding %}
      <li>
        <a href="{{ post.url }}" >{{ post.title }}</a>
      </li>  
    {% endfor %}{% endraw %}
  </ul>
</div>
<!-- seperate div for all posts -->
 <div id="personal-posts">
  <ul>
    {% raw %}{% for post in site.categories.updates-personal %}
      <li>
        <a href="{{ post.url }}" >{{ post.title }}</a>
      </li>
    {% endfor %}{%endraw%}
  </ul> 
</div>
{% endhighlight %}

The way this works is each div for all posts, coding posts and personal posts have markdown in them that generates an unordered list with links to respective posts. In markdown, each post has a category declared in its front matter. I use a for loop to generate each. By default in the CSS above you can see the all posts div is shown and the separated personal and coding posts are set to display none. Next is the JS to tell the selector which div to display and which divs to hide, switching each time a new selection is made:

{% highlight html linenos %}
<script>
  function show_post_type(element){
  /*In the HTML above we set the value of all posts to 1, coding posts to 2 
    and personal posts to 3.
    We passed the selector in as element, now test in 3 separate if statements*/ 
  if(element.value == 1){
    document.getElementById("all-posts").style.display = 'inline-block';
    document.getElementById("personal-posts").style.display = 'none';
    document.getElementById("coding-posts").style.display = 'none';
    }
  if(element.value == 2){
    document.getElementById("coding-posts").style.display = 'inline-block';
    document.getElementById("all-posts").style.display = 'none';
    document.getElementById("personal-posts").style.display = 'none';
    }
  if(element.value == 3){
    document.getElementById("personal-posts").style.display = 'inline-block';
    document.getElementById("all-posts").style.display = 'none';
    document.getElementById("coding-posts").style.display = 'none';
    }
  }
  </script>
  {% endhighlight %}

Each separate if statement contains a block that passes the id of each div, changing the CSS style display to either inline-block or none depending on what we need. I also made the selector black to fit the webpage theme. <a href="https://niaapps.github.io/niaapps-blog/" target="_blank" title="">You can see it in action on my blog home page</a>, and below is a gif to demonstrate.

<img alt="gif of selector on blog home page" src="/../../images/js-demo.gif" onContextMenu="alert('Please don\'t download this photo!');return false;">

The next thing I made with JS is a text size range slider for a client's site.  I used an input tag with the type set to range to achieve this. It is an accessibility feature that you should consider implementing on your own website. Creating accessible web pages is important in addition to minimum standards being required by law.


The HTML:

{% highlight html linenos %}
<div class="slidecontainer">
<p>Text Size: <span id="size"></span></p>  
<input type="range" min="16" max="30" value="16" class="slider" id="font-range">
</div>
{% endhighlight %}

The CSS:
{% highlight css linenos %}
.slider {
  -webkit-appearance: none;
  width             : 220px;
  height            : 19px;
  background        : #8ab5f5;
  outline           : thick;
  border-radius     : 25px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance        : none;
  width             : 0;
  height            : 0;
  background-color  : transparent;
  cursor            : pointer;
  border-left       : 23px solid transparent;
  border-right      : 23px solid transparent;
  border-top        : 20px solid #f59657;
}

.slider::-moz-range-thumb {
  height          : 0;
  width           : 0;
  cursor          : pointer;
  background-color: transparent;
  border-left     : 23px solid transparent;
  border-right    : 23px solid transparent;
  border-top      : 20px solid #f59657;
}

{% endhighlight %}

The JS:
{% highlight html linenos %}
<script>
  var slider = document.getElementById("font-range");
  var output = document.getElementById("size");
  output.innerHTML = slider.value;  
  slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("post-text").style.fontSize = output.innerHTML;}
</script>
{% endhighlight %}


So how does this work? Begin by setting a div's id to equal "post-text"(any text you want to change in size). Above is a function that takes the output of the slider and sets the style font-size of post-text to be equal to it. The second line is so the user can see the value they are setting it to. I chose these colors to fit my client's site, but any would do if you were to implement this. I created the "arrow" or triangle by using border-left, top & right on the "thumb". It is important to code for both moz (Mozilla) and WebKit (chrome, safari). Check out the demo below:

<div class="slidecontainer">
<p>Text Size: <span id="size"></span></p>  
<input type="range" min="19" max="40" value="19" class="slider" id="font-range">
 </div>

<script>
  var slider = document.getElementById("font-range");
  var output = document.getElementById("size");
  output.innerHTML = slider.value;  
  slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("post-text").style.fontSize = output.innerHTML;}
</script>  

<div id="post-text">Hi, this text will change size!</div>
Those are the two bits of JS I have coded recently. Thanks for reading. Leave a comment about what lovely things in JS you've seen/coded below! I'd love to be inspired. Again check out Marvin's stuff too, my post here is truly the tip of the iceberg! Till next time!


<!-- ex img w/ directory to root and discourage download pop up -->
<div class="thumbnail">
  <img id="img-id" src="/../../images/js.jpg" alt="alt text" onContextMenu="alert('Please don\'t download this photo!');return false;">
  </a>
</div>

<!-- Buttons for Blog post update prev with last post regularly don't forget date and title-->
<div class="button-post">
    <a href="https://niaapps.github.io/niaapps-blog/updates-personal/2020/08/17/What-is-Colorism.html" class="post-button" id="button-nxt">Previous Post</a>

  </div>

