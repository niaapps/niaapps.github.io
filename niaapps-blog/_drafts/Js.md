---
layout: post
title: "Javascript Adventure"
date: 2020-07-31 16:00:00 -0400
categories: updates-coding
---
 So the Script I used was:

   <script>
    var slider = document.getElementById("font-range");
    var output = document.getElementById("size");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
    output.innerHTML = this.value;
    document.getElementById("post-text").style.fontSize = output.innerHTML;
    }
    </script>


    and the respective html:

          <div class="slidecontainer">
          <p>Font Size: <span id="size"></span></p>  
            <input type="range" min="16" max="30" value="16" class="slider" id="font-range">
          </div>





Sorting Posts:
Html/markdown:
  <div class="select-div">
      <select name="post-type" id="post-type" onchange="show_post_type(this)">
        <option value="1">All Posts</option>
        <option value="2">Coding Posts</option>
        <option value="3">Personal Posts </option>
        </select>
    </div> 
    <div id="all-posts">
        <ul>
         {% for post in site.posts %}
           <li>
             <a href="{{ post.url }}" >{{ post.title }}</a>
           </li>
         {% endfor %}
       </ul>
      </div>
          <div id="coding-posts">
          <ul>{% for post in site.categories.updates-coding %}
         
           <li>
            <a href="{{ post.url }}" >{{ post.title }}</a>
           </li>
                  
                   {% endfor %}
          </ul>
        </div>
        <div id="personal-posts">
          <ul>{% for post in site.categories.updates-personal %}
         
           <li>
            <a href="{{ post.url }}" >{{ post.title }}</a>
           </li>
                  
                   {% endfor %}
          </ul> 
        </div>

CSS:

#coding-posts,#personal-posts{display: none;}
#all-posts{display: inline-block;}

JS:
<script>

     function show_post_type(element){
      if(element.value == 1){
        document.getElementById("all-posts").style.display = 'inline-block';
        document.getElementById("personal-posts").style.display = 'none';
        document.getElementById("coding-posts").style.display = 'none';
      }
      if(element.value == 3){
        document.getElementById("personal-posts").style.display = 'inline-block';
        document.getElementById("all-posts").style.display = 'none';
        document.getElementById("coding-posts").style.display = 'none';
      }
      if(element.value == 2){
        document.getElementById("coding-posts").style.display = 'inline-block';
        document.getElementById("all-posts").style.display = 'none';
        document.getElementById("personal-posts").style.display = 'none';
      }
     
     }
  </script>
