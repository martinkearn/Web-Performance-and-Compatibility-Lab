#Performance Optimisation and Tuning

In this lab you will learn how to analyse your site for performance issues and how to fix the most common ones.

Please ensure you have completed both the [PC Setup](PCSetup.md) and [Azure Setup](AzureSetup.md) labs before continuing.

##Analyse with YSlow
YSlow is a tool from Yahoo that analyses a site against Yahoo's own web performance rule set. YSlow is a well established industry benchmark for web site performance.

Providing you followed the [Azure Setup](AzureSetup.md) lab, you should be able to get to the site in the /begin folder for this lab by going to http://{your azure web site url}/performance/begin/index.html. For the rest of this labe we'll refer to that url as 'Your Url'.

If you have not been able to use Azure, you can see a copy of the site at [http://ninjacatgallery.azurewebsites.net/performance/begin/index.html](http://ninjacatgallery.azurewebsites.net/performance/begin/index.html). You can use this as your URL if you cannot use Azure.

1.Open Google Chrome

2.Navigate to your URL.

3.Open the YSlow extension and click Run Test

4.When the test completes, you'll see that the site gets a grace of C with a score of 79/100. Take a minute to look throuugh some of the failing tests.

##Move CSS to the top of the file
According to YSlow, CSS references should always be in the HEAD of the html document. YSlow says "Moving style sheets to the document HEAD element helps pages appear to load quicker since this allows pages to render progressively.".

1.Open /performance/begin/Index.html in Visual Studio Code

2.Locate the following code at the bottom of the document

```
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.css" rel="stylesheet">

  <!-- Font Awesome CSS -->
  <link href="css/font-awesome.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/jumbotron.css" rel="stylesheet">
  <link href="css/site.css" rel="stylesheet">
```  
3.Move this code to HEAD section (towards the top of the HTML file), just before the closing `</head>` line

4.Commit your changes, wait for Azure to auto-deploy, then re-test with YSlow. Your score will move to grade B 81/100.

##Move Javascript to the bottom of the file
According to YSlow, Javascript references should be at the bottom of the page. YSlow says "JavaScript scripts block parallel downloads; that is, when a script is downloading, the browser will not start any other downloads. To help the page load faster, move scripts to the bottom of the page if they are deferrable."

1.Open /performance/begin/Index.html in Visual Studio Code

2.Locate the following code in the HEAD of the document

```
  <!-- Modernizr core CSS -->
  <script src="js/modernizr-custom.js"></script>

  <!-- Bootstrap core JavaScript-->
  <script src="js/jquery-2.1.4.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="js/site.js"></script>
``` 
3.Move this code to be located at the bottom of the BODY section, just before the closing `</body>` line 

4.Commit your changes, wait for Azure to auto-deploy, then re-test with YSlow. Your score will remain at 81/100 but you'll now pass the 'Put Javascript at bottom' test.

##Replace the Twitter icon with a font
This one is not picked up by YSlow because we are only using one icon in this page, but most websites use a large number of small images for icons (twitter, add to cart, contact etc). 

It is a great idea to use an icon font such as [Font Awesome](http://fortawesome.github.io/Font-Awesome/) rater than images for these kind of icons. It means fewer requests, smaller files, better quality and easier manipulation with CSS.

Font awesome is already part of the project, lets use it.

1.Open /performance/begin/Index.html in Visual Studio Code

2.Find the line that looks like this at the bottom of the file

```
<a href="http://twitter.com/martinkearn"><img class="icon" src="images/twitter.png" /> @MartinKearn</a>
```

3.Replace the IMG element with this `<i class="fa fa-twitter fa-lg"></i>`. The finished line should look like:

```
<a href="http://twitter.com/martinkearn"><i class="fa fa-twitter fa-lg"></i> @MartinKearn</a>
```

4.Zoom in on the new icon in your browser and see that it remain crisp and high quality even when fully zoomed in.

##Analyse with Google Page Speed Insights
The remaining YSlow suggestions all relate to optimising the delivery of static files. Before we do that, let's take a look at what Google Page Speed Insights say about our page. Google PageSpeed is the other main authoritative resources for analysing web performance. Google use a different ruleset but there is a lot of overlap with YSlow.

1.Visit [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/) in any browser

2.Enter your url and click analyse

3.Take a moment to look through the report both for Mobile and Desktop. The site should score 57/100 for mobile and 54/100 for desktop.

4.Leave the report open as we'll refer back to it throughout the lab

##Optimise images
The number one complaint in Google PageSpeed is the optimisation of images. They say "Properly formatting and compressing images can save many bytes of data. Optimize the following images to reduce their size by 534.9KiB (66% reduction).".

As well as optimising images, it is important that they are served at the size in which they are expected to be rendered. We do not want browsers having to re-size images because it is more work for the browser to do and it is more data that the browser needs to download. The YSlow report states "Web page designers sometimes set image dimensions by using the width and height attributes of the HTML image element. Avoid doing this since it can result in images being larger than needed."

The page displays the thumbnail images at 350px wide, but the actual images are 1920px wide.

There are many tools available to help with image optimisation including [Image Optimizer Visual Studio Extension](https://visualstudiogallery.msdn.microsoft.com/a56eddd3-d79b-48ac-8c8f-2db06ade77c3/), [Optimizilla](http://optimizilla.com/) and [SmushIt](http://imgopt.com/).

To save time, all the referenced images have been optimised, resized and stored in /performance/begin/optimisedimages, lets use them.

1.Copy the contents of /performance/begin/optimisedimages to /performance/begin/images, overwriting existing files

2.Open /performance/begin/Index.html in Visual Studio Code

3.Replace the A tag with the ID of 'thumbnail-unicorn' with this code:

```
<a id="thumbnail-unicorn" href="images/Windows_Insider_Battlecat_Unicorn-Large.png" class="thumbnail" data-toggle="modal" data-target="#NinjacatOnUnicorn"><img src="images/Windows_Insider_Battlecat_Unicorn.png" alt="The ninja cat on a unicorn" /></a>
```

4.Replace the IMG tag with the ID of 'largeimage-unicorn' with this code:

```
<img id="largeimage-unicorn" src="images/Windows_Insider_Battlecat_Unicorn-Large.png" alt="The ninja cat on a unicorn" />
```

5.Replace the A tag with the ID of 'thumbnail-narwhal' with this code:

```
<a id="thumbnail-narwhal" href="images/Windows_Insider_Battlecat_Narwhal-Large.png" class="thumbnail" data-toggle="modal" data-target="#NinjacatOnNarwhal"><img src="images/Windows_Insider_Battlecat_Narwhal.png" alt="The ninja cat on a narwhal" /></a>
```

6.Replace the IMG tag with the ID of 'largeimage-narwhal' with this code:

```
<img id="largeimage-narwhal" src="images/Windows_Insider_Battlecat_Narwhal-Large.png" alt="The ninja cat on a narwhal" />
```

7.Replace the A tag with the ID of 'thumbnail-trex' with this code:

```
<a id="thumbnail-trex" href="images/Windows_Insider_Battlecat_Trex-Large.png" class="thumbnail" data-toggle="modal" data-target="#NinjacatOnTRex"><img src="images/Windows_Insider_Battlecat_Trex.png" alt="The ninja cat on a trex" /></a>
```

8.Replace the IMG tag with the ID of 'largeimage-trex' with this code:

```
<img id="largeimage-trex" src="images/Windows_Insider_Battlecat_Trex-Large.png" alt="The ninja cat on a trex" />
```

9.Replace the A tag with the ID of 'thumbnail-welcome' with this code:

```
<a id="thumbnail-welcome" href="images/welcome_to_the_internet__please_follow_me_by_sharpwriter-d5buwfu-Large.jpg" class="thumbnail" data-toggle="modal" data-target="#WelcomeToTheInternet"><img src="images/welcome_to_the_internet__please_follow_me_by_sharpwriter-d5buwfu.jpg" alt="The original welcome to the internet image" /></a>
```

10.Replace the IMG tag with the ID of 'largeimage-welcome' with this code:

```
<img id="largeimage-welcome" src="images/welcome_to_the_internet__please_follow_me_by_sharpwriter-d5buwfu-Large.jpg" alt="The original welcome to the internet image" />
```

11.Commit your changes, wait for Azure to auto-deploy and re-test with Google PageSpeed and YSlow. You'll notice that 'optimise images' is no longer an issue and the overall Google PageSpeed score is now 76/100 for mobile and 87/100 for desktop. The YSlow score will be at Grade B, 81.

##Minify CSS and Javascript files with Gulp
Both YSlow and Google Page speed recomend the minification of both JS and CSS files. YSlow says "Minification removes unnecessary characters from a file to reduce its size, thereby improving load times. When a file is minified, comments and unneeded white space characters (space, newline, and tab) are removed. This improves response time since the size of the download files is reduced."

To do the minification we will use [GulpJS](http://gulpjs.com) which is a Javascript task runner and has plug-ins that perform minification tasks.

1.Open a command prompt with administrative priviledge and navigate to your working folder ... {some local path}/performance/begin

2.Run `npm install gulp`. This will install [Gulp](http://gulpjs.com) to your project

3.Run `npm install gulp-cssmin`. This will install [Gulp-CSSMin](https://www.npmjs.com/package/gulp-cssmin) plug-in to your project for CSS minification

3.Run `npm install gulp-uglify`. This will install [Gulp-Uglify](https://www.npmjs.com/package/gulp-uglify/) plug-in to your project for JS minification

4.Take a look at the existing gulpfile.js to get a feel for what it is doing. An explanation of Gulp is out of scope for this excersise, so if you are new to Gulp, just accept that this file controls what happens and move on! :)

5.Back in the command prompt, run `gulp`. This will execute the Gulp tasks and minify your files. If you have any issue running gulp, make sure you NODE_PATH is setup correctly; [have a look at this article](http://stackoverflow.com/questions/24027551/gulp-command-not-found-error-after-installing-gulp)

6.Take a look at your /performance/begin/ folder structure. You'll notice a new folder called wwwroot which contains minified versions of your JS and CSS files. Take a look at some of them to see how they have been minified

7.Open /performance/begin/Index.html in Visual Studio Code

8.Replace all references to `css/` to `wwwroot/css/`. This will mean that the HTML references the minified CSS files that Gulp will create (Use Ctrl + F)

9.Replace all references to `js/` to `wwwroot/js/`.

10.Commit your changes, wait for Azure to auto-deploy and re-test with Google PageSpeed and YSlow. The scores will not change by much because of the relatively low number of CSS and JS files. However in a real world project this would have a bigger impact.

##Bundle CSS and Javascript files with Gulp
Now that we have minified our CSS and JS files, we need to bundle them together to reduce the number of requests required. YSlow says "Decreasing the number of components on a page reduces the number of HTTP requests required to render the page, resulting in faster page loads. Some ways to reduce the number of components include: combine files, combine multiple scripts into one script, combine multiple CSS files into one style sheet, and use CSS Sprites and image maps.".

Again, we'll use a few Gulp plug-in for this task; [gulp-contact](https://www.npmjs.com/package/gulp-concat/) and [gulp-gzip](https://www.npmjs.com/package/gulp-gzip/)

1.Open a command prompt with administrative priviledges and navigate to your working folder ... {some local path}/performance/end

2.Run `npm install gulp-concat`. This will install [gulp-concat](https://www.npmjs.com/package/gulp-concat/) to your project

3.Run `npm install gulp-gzip`. This will install [gulp-gzip](https://www.npmjs.com/package/gulp-gzip/) to your project

4.Open /performance/begin/gulpfile.js in Visual Studio Code

5.Add `concat = require('gulp-concat')` the to the var statement so it looks like this:

```
var gulp = require('gulp'),
  cssmin = require('gulp-cssmin'),
  jsmin = require('gulp-uglify'),
  concat = require('gulp-concat');
```

6.Add `.pipe(concat('bundle.css'))` in between the two existing `.pipe` statements in the `task-cssmin` block. When complete it should look like this:

```
gulp.task('task-cssmin', function() {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest("wwwroot/css"))
});
```

7.Add `.pipe(concat('bundle.js'))` in between the two existing `.pipe` statements in the `task-jsmin` block. Whgen complete it should look like this:

```
gulp.task('task-jsmin', function() {
  gulp.src('js/*.js')
  .pipe(jsmin())
  .pipe(concat('bundle.js'))  
  .pipe(gulp.dest("wwwroot/js"))
});
```

8.Back in the command prompt, run `gulp`. This will execute the Gulp tasks and create the two file bundles. They are /js/bundle.js and /css/bundle.css.

9.Open /performance/begin/Index.html in Visual Studio Code

10.Remove all `link` elements that point to a CSS file in the HEAD and replace them with `<link href="wwwroot/css/bundle.css" rel="stylesheet">`

11.Remove all `link` elements that point to a JS file at the bottom of the document and replace them with `<script src="wwwroot/js/bundle.js"></script>`

12.Commit your changes, wait for Azure to auto-deploy and re-test with Google PageSpeed and YSlow. This will have slightly improved your YSlow score to Grade B 83/100 and your Google Pagespeed Insights scores will now be 80/100 and 90/100.

##Serve static files from Azure Storage
Several of the recommendations relate to the way static files are served. The way these are addressed, depends on the web server that is used. So to make the lab simpler, a copy of the static files have been loaded onto Azure Storage which is a superb location for storing and serving static content. The files have all been configured with Expires headers and because they are stored in Azure Storage the YSlow ETags and Cookie-less domains rules will also now pass.

It is not within scope of this lab to talk through creating Azure Storage accounts, but it is very simple. Find out more [here](https://azure.microsoft.com/en-us/documentation/articles/storage-introduction/).

1.Open /performance/begin/Index.html in Visual Studio Code

2.Replace all references to `wwwroot/css/` with `https://ninjacatgallery.blob.core.windows.net/static/`

3.Replace all references to `wwwroot/js/` with `https://ninjacatgallery.blob.core.windows.net/static/`

4.Replace all references to `images/` with `https://ninjacatgallery.blob.core.windows.net/static/`

5.Commit your changes, wait for Azure to auto-deploy and re-test with Google PageSpeed and YSlow. In YSlow, you can now add 'ninjacatgallery.blob.core.windows.net' as a CDN under the 'Use a Content Delivery Network (CDN)'.

##That'll do for now
This is about as far as we can take the optimisation in lab format. Further imrpovements can be made on the web server side, but they vary depending on what type of web server you are using. Sufficed to say that even with the work in this lab, the website is now signifincatly faster and better optimised that the vast majority of websites.

Take the time to fully explore the reports from both YSlow and Google Page Speed now the site has been optimised. The 'Statistics' tab on YSlow is particularly satisfying.
