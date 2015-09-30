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
4. (optional) If you can, publish your page and re-test with YSlow. Your score will move to grade B 80/100

##Serve static files from Azure Storage
Several of the recomendations relate to the way static files are served. The way these are addressed, depends opn the web server that is used, so to make the lab simpler, a copy of the static file have been loaded onto Azure Storage which is a superb location for storing and serving static content.

It is not within scope of this lab to talk through creating Azure Storage accounts, but it is very simple. Find out more [here](https://azure.microsoft.com/en-us/documentation/articles/storage-introduction/).

https://ninjacatgallery.blob.core.windows.net/static