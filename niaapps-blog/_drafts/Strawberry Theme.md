---
layout: post
title: "Coding a Wordpress Theme From Scratch"
date: 2021-02-05 16:00:00 -0400
categories: updates-coding
---

 <meta name="description" content="">
<!-- Need to copy/paste to each post: Don't forget to change updates-personal or updates-coding-->
<div class="feed" markdown="1">
 [For my email subscribers, please click here](https://niaapps.github.io/niaapps-blog/updates-coding/{{page.date | date:"%Y/%m/%d/"}}{{page.slug}}.html "Link to this post")
</div>
<link href="/css/syntax.css" rel="stylesheet">

Hey Readers!

I have been especially excited for this post. I have been working on this project for a little over a yeaer and have learned so much about wordpress as well about HTML, CSS, JavaScript and PHP. The project was to create a wordpress custom theme from scratch for <a href="https://twitter.com/Imani_Barbarin" target="_blank" title="Imani's Twitter">Imani Barbarin </a>who runs <a href="https://crutchesandspice.com/" target="_blank" title="Crutches and Spice website">Crutches & Spice</a>. I am not a Wordpress developer per se but developing this theme was something within my capability and I would do it again. If you recall I actually wrote about one of the features in <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2020/08/17/JavaScript-Adventure.html" target="_blank" title="link to JavaScript Adventure post">this post</a>, a text size slider. In this post I will write about the theme overall and a few key features in detail. I named the theme <a href="https://niaapps.github.io/strawberry-wp-theme.html" target="_blank" title="Strawberry Theme Info Page"> **_Strawberry_**</a> because the first color I started with, from Imani's logo was a pink that reminded me of a cartoon strawberry. If you think you want strawberry theme for your website click <a href="https://niaapps.github.io/strawberry-wp-theme.html" target="_blank" title="Strawberry Theme Info Page">here</a> Without further ado, let's jump in!

## Requirements

If you don't know <a href="https://twitter.com/Imani_Barbarin" target="_blank" title="Imani's Twitter">Imani Barbarin</a> yet, definitely check her out. She is a diasbled representation and inclusion advocate. She writes on her blog <a href="https://crutchesandspice.com/" target="_blank" title="Crutches and Spice website">Crutches & Spice</a> and has a following of more than 80K people on twitter. To say the least, I was nervous that so many people would be going to a website that _I_ designed. This meant that I had to get it right. A site requirement was to make the site accessible to her readers, many who have disabilities themselves. W3C has these guidelines for this exact reason, but many websites only do the absolute bare minimum! I found a tool that helped me make the site 99% accessible. The 1% is a warning caused by a wordpress generated snippet of code, that I unfortunately cannot work around. The site, according to the tool has 0 errors, which is less than major sites like Facebook [5 errors, 33 warnings], Twitter [2 errors, 38 warnings] and wordpress.com/read [29 errors, 76 warnings]\(seriously wordpress, what the heck?!\). The name of this tool is called WAVE, you can learn more about it <a href="https://wave.webaim.org/" target="_blank" title="WAVE website">here.</a> I will definitely be using it to improve my own site and every web dev project I have.

## Key Features

As mentioned before, the text slider was a key feature that I have already <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2020/08/17/JavaScript-Adventure.html" target="_blank" title="link to JavaScript Adventure post">written about</a>, but what else does **Strawberry** theme have to offer?

### OWL Carousel Post Slider

On the landing blog page there is a post carousel featuring the last 10 posts. I've laid with a purple overlay, and a magenta background to fit the theme. Writing the code to change each photo size to be uniform, keep an acceptable looking aspect ratio, as well as centering was a real challenge. I've set this one to auto scroll, but has buttons at the bottom to toggle left and right, as well as the entire slider being draggable to see more posts.

### Sticky Sidebar and Navigation Bar

I think it's no secret I love position:sticky; in CSS. On this very site my footer is sticky on the blog page. Everything on the right as well as the navigation/search on the top, will follow the user as they scroll on the page, making it so that they are always easy and in reach. Here is a gif of what the sticky sidebar and navigation look like on the main page:
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;

<div class="scale-img"> <img src="/../../images/text.gif" alt="Gif of text slider in action"
                        onContextMenu="alert('Please don\'t download this photo!');return false;"></div>
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<!-- Sub in new gif later -->
Here's the code behind the sidebar:

_HTML and PHP:_
{% highlight html linenos %}

<div class="sidebar-wrap">
    <div class="sidebar">
     <div class="socials">
        <ul class="social-list">
          <li> <a class="social-btn"
            href="https://twitter.com/Imani_Barbarin" title="Go to Imani's Twitter"
             target="_blank"> 
             <img class="s-img" 
             src="/stagingsite/wp-content/themes/strawberry/assets/images/twitter.png" alt="twitter logo"> </a></li>
          <li> <a class="social-btn"
            href="https://www.facebook.com/CrutchesandSpice/?ref=bookmarks" title="Go to Crutches & Spice Facebook Page"
             target="_blank">
             <img class="s-img" 
             src="/stagingsite/wp-content/themes/strawberry/assets/images/facebook.png" class="s-img" alt="facebook logo"> </a></li>
          <li> <a class="social-btn"
            href="https://www.instagram.com/crutches_and_spice/" title="Go to Crutches & Spice Instagram"
             target="_blank">
             <img class="s-img" 
             src="/stagingsite/wp-content/themes/strawberry/assets/images/ig.png" alt="instagram logo"> </a></li>
          <li> <a class="social-btn"
            href="https://www.linkedin.com/in/i-gineva-barbarin-3b836528/" title="Go to Imani's Linkedin"
             target="_blank">
             <img class="s-img" 
             src="/stagingsite/wp-content/themes/strawberry/assets/images/in.png" alt="linkedin logo"> </a></li>
          <li> <a class="social-btn"
            href="https://imanibarbarin.com/" title="Go to Imani's Portfolio site"
             target="_blank"> 
             <img class="s-img" 
             src="/stagingsite/wp-content/themes/strawberry/assets/images/link.png" alt="literal chain link"> </a></li>
        </ul>
      </div>
  <div class="patreon">
    <hr class="sidebar-ln">
      <h3 class="sidebar-heading">Support This Blog!</h3>
        <a href="https://www.patreon.com/ImaniBarbarin" 
        title="Subscribe to Crutches & Spice on Patreon" target="_blank"><img src="/stagingsite/wp-content/themes/strawberry/assets/images/patreon_logo.png" alt="patreon logo"></a>
  </div>

  <div class="subscribe">
    <hr class="sidebar-ln">
    <h3 class="sidebar-heading">Subscribe for Email Updates!</h3>
    <?php if (is_active_sidebar('jetpack-subscribe')) : ?>
    <?php dynamic_sidebar('jetpack-subscribe');
          endif;  ?>
  </div>

  <div class="archive">
    <hr class="sidebar-ln">
    <h3 class="sidebar-heading">Archives</h3>
    <div class="archive-drop">
    <select name="archive-dropdown" onchange="document.location.href=this.options[this.selectedIndex].value;">
      <option value=""><?php esc_attr(_e('Select Month', 'textdomain')); ?></option>
        <?php wp_get_archives(array( 'type' => 'monthly', 'format' => 'option', 'show_post_count' => 1 )); ?>
      </select></div>
    </div>
  </div>
    <div class="slidecontainer main-range">
      <p>Text Size: <span id="size"></span></p>
        <input type="range" min="16" max="32" value="16" class="slider page-slider" id="font-range"  aria-label="Text size slider" autocomplete="off">
    </div>
  </div>
</div>

{% endhighlight %}

_CSS:_
<!-- Need to make this in color like JS: -->
{% highlight css linenos %}
.sidebar {
  float : left;
  border-radius : 25px;
  width : 550px;
  height : auto;
  position : sticky;
  background-color: #F55776;
  overflow-x : hidden;
  padding-bottom : 8px;
}

.sidebar-ln {
  width : 39%;
  float : left;
  border-color: #5796f5;
  display : block;
  }

.sidebar-wrap {
  top : 5.5rem;
  position : sticky;
  margin-left : 0;
  height : max-content;
  width : min-content;
  margin-bottom: 100px;

  }

.archive {
  width : 1200px;
  float : left;
  margin-left: 40px;
  display : block;
  }

.archive-drop {
  margin-bottom: 15px;
  float : left;
  }

.archive-drop select {
  font-family: 'Merriweather', 'Tahoma', serif;

      }

.archive-nav {
      margin: 15px;
      }

{% endhighlight %}

#### The most important and most common mistake people make with position: sticky is that it depends on top to work. I have my top set to 5.5 in the sidebar-wrap div and sticky on my sidebar div. it's !important so don't forget! ;) see what I did there?

### Things this project taught me


<div class="button-post">
    <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2020/08/17/JavaScript-Adventure.html" class="post-button" id="button-nxt">Previous Post</a>

  </div>
