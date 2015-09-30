# Modern web interoperability

In this lab you will scan a website for modern web interoperability problems, and then fix them.

If you are able to, the lab works great if you can publish the site to a live URL as you change it. This is very easy to do with [Azure Web App Service](https://azure.microsoft.com/en-us/services/app-service/web/) and the source integration feature, you simply commit to GitHub, VSO or whatever source control system you are using and the site gets deployed. However, this is not mandatory and you can do the lab without publishing your site, it just means you will not be able to re-test the changes you make.

## Scan your site
A copy of the site in the /begin folder for this lab has been published to the following location: [http://ninjacatgallery.azurewebsites.net/begin/index.html](http://ninjacatgallery.azurewebsites.net/begin/index.html). We will scan this page for modern web interoperability problems.

1. Go to [https://dev.modern.ie/tools/staticscan/](https://dev.modern.ie/tools/staticscan/)
1. Enter 'http://ninjacatgallery.azurewebsites.net/begin/index.html' as the URL and perform a scan
1. Notice that there are several problems related to 'Modern web interoperability' (we'll ignore the other areas for now)
1. Keep this browser page open, we'll refer to it throughout the excersise

##Render mode
The report tells us that there is a problem with the rendering mode for the page. It says "There is an issue with this website that could force an old document mode intended for older versions of Internet Explorer".

1. Open /begin/index.html in Visual Studio Code
2. Identify the line that looks like the following and remove it.

		<meta http-equiv="x-ua-compatible" content="IE=8">

This code forces the browser to try and render in IE8 mode which cuases several comaptibility problems. Where possible you should avoid old or non-standard doctypes or rendering modes and use the standard one which is:

  	<!DOCTYPE html>
