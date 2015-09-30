#Performance

In this lab you will learn how to analyse your site for performance issues and how to fix the most common ones.

If you are able to, the lab works great if you can publish the site to a live URL as you change it. This is very easy to do with [Azure Web App Service](https://azure.microsoft.com/en-us/services/app-service/web/) and the source integration feature, you simply commit to GitHub, VSO or whatever source control system you are using and the site gets deployed. However, this is not mandatory and you can do the lab without publishing your site, it just means you will not be able to re-test the changes you make.

##Analyse with YSlow
YSlow is a tool from Yahoo that analyses a site against Yahoo's own web performance rule set. YSlow is a well established industry benchmark for web site performance.

A copy of the /performance/begin/Index.html file is avaliable to scan [http://ninjacatgallery.azurewebsites.net/performance/begin/index.html](http://ninjacatgallery.azurewebsites.net/performance/begin/index.html) or you can run the test with your own publish copy of the file.

1. Open Google Chrome and install the Yahoo YSlow plug-in for Chrome from [yslow.org](http://yslow.org/). You'll see a 'speed dial' icon in your browser when it is installed
2. Navigate to [http://ninjacatgallery.azurewebsites.net/performance/begin/index.html](http://ninjacatgallery.azurewebsites.net/performance/begin/index.html)
3. Open the YSlow extension and click Run Test
4. When the test completes, you'll see that the site gets a grace of C with a score of 79/100

##Move CSS to the top of the file
According to YSlow, CSS references should always be in the HEAD of the html document. YSlow says "Moving style sheets to the document HEAD element helps pages appear to load quicker since this allows pages to render progressively.".

1. Open /performance/begin/Index.html in Visual Studio Code
2. Locate the following code at the bottom of the document

```
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.css" rel="stylesheet">

  <!-- Font Awesome CSS -->
  <link href="css/font-awesome.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/jumbotron.css" rel="stylesheet">
  <link href="css/site.css" rel="stylesheet">
```  
3. Move this code to be located at the bottom of the HEAD section, just before the closing `</head>` line
4. (optional) If you can, publish your page and re-test with YSlow. Your score will move to grade B 80/100

##Move Javascript to the bottom of the file
According to YSlow, Javascript references should be at the bottom of the page. YSlow says "JavaScript scripts block parallel downloads; that is, when a script is downloading, the browser will not start any other downloads. To help the page load faster, move scripts to the bottom of the page if they are deferrable."

1. Open /performance/begin/Index.html in Visual Studio Code
2. Locate the following code in the HEAD of the document

```
  <!-- Modernizr core CSS -->
  <script src="js/modernizr-custom.js"></script>

  <!-- Bootstrap core JavaScript-->
  <script src="js/jquery-2.1.4.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="js/site.js"></script>
``` 
3. Move this code to be located at the bottom of the BODY section, just before the closing `</body>` line 
4. (optional) If you can, publish your page and re-test with YSlow. Your score will move to 82/100

##Replace the Twitter icon with a font
This one is not picked up by YSlow because we are only using one icon in this page, but most websites use a large number of small images for icons (twitter, add to cart, contact etc). 

It is a great idea to use an icon font such as [Font Awesome](http://fortawesome.github.io/Font-Awesome/) rater than images for these kind of icons. It means fewer requests, smaller files, better quality and easier manipulation with CSS.

Font awesome is already part of the project, lets use it.

1. Open /performance/begin/Index.html in Visual Studio Code
2. Find the line that looks like this at the bottom of the file

```
<a href="http://twitter.com/martinkearn"><img class="icon" src="images/twitter.png" /> @MartinKearn</a>
```

3. Replace the IMG element with this `<i class="fa fa-twitter fa-lg"></i>`. The finished code should look like:

```
<a href="http://twitter.com/martinkearn"><i class="fa fa-twitter fa-lg"></i> @MartinKearn</a>
```

4. Zoom in on the new icon in your browser and see that it remain crisp and high quality even when fully zoomed in.

##Analyse with Google Page Speed Insights
The remaining YSlow suggestions all relate to optimising the delivery of static files. Before we do that, let's take a look at what Google Page Speed Insight say about our page. Google PageSpeed is the other main authoritative resources for analysing web performance. Google use a different ruleset but there is a lot of overlap with YSlow.

1. Visit [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/) in any browser
2. Enter 'http://ninjacatgallery.azurewebsites.net/performance/begin/index.html' and click analyse
3. Take a moment to look through the report both for Mobile and Desktop. Please note that we may have fixed some of these issues already in the previous section of this exercise (unless you have been publishing your own copy as we've gone along)
4. Leave the report open as we'll refer back to it throughout the lab

##Optimise images
The number one complaint in Google PageSpeed is the optimisation of images. They say "Properly formatting and compressing images can save many bytes of data. Optimize the following images to reduce their size by 534.9KiB (66% reduction).".

There are many tool available to help with image optimisation including [Image Optimizer Visual Studio Extension](https://visualstudiogallery.msdn.microsoft.com/a56eddd3-d79b-48ac-8c8f-2db06ade77c3/) and [SmushIt](http://imgopt.com/).

To save time, all the referenced images have been optimised and stored in /performance/begin/optimisedimages, lets use them.

1. Copy the contents of /performance/begin/optimisedimages to /performance/begin/images, overwriting existing files
2. (optional) If you can, publish your page and re-test with Google PageSpeed. You'll notice that 'optimise images' is no longer an issue

##Serve images at the right size
As well as optimising images, it is important that they are served at the size in which they are expected to be rendered. We do not want browsers having to re-size images because it is more work for the browser to do and it is more data that the browser needs to download.

The page displays the thumbnail images at 350 x 197, but the actual images are 190 x 1080. 

##Minify CSS with Gulp

##Minify Javascript with Gulp

##Bundle CSS and Javascript with Gulp

##Serve static files from Azure Storage
Several of the recommendations relate to the way static files are served. The way these are addressed, depends on the web server that is used, so to make the lab simpler, a copy of the static files have been loaded onto Azure Storage which is a superb location for storing and serving static content.

It is not within scope of this lab to talk through creating Azure Storage accounts, but it is very simple. Find out more [here](https://azure.microsoft.com/en-us/documentation/articles/storage-introduction/).

https://ninjacatgallery.blob.core.windows.net/static