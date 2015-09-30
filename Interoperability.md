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
2. Identify the line that looks like the following and remove it: `<meta http-equiv="x-ua-compatible" content="IE=8">`

This code forces the browser to try and render in IE8 mode which cuases several comaptibility problems. Where possible you should avoid old or non-standard doctypes or rendering modes and use the standard one which is `<!DOCTYPE html>`

##Frameworks and libraries
One of the biggest causes for compatibility problems in most modern browsers is use of old libraries and frameworks. As libraries evolve, they are updated to work with modern browsers and some of the old hacks required for older browsers are removed so you should always try to use the latest versions of libraries and frameworks where possible, to make sure you have the very latest compatibility and interoperability fixes from the vendor.

The report says "We've found frameworks or libraries that are not up-to-date and might contain bugs.". This is because the site is referencing JQuery version 1.8.0. We need to upgrade this to the latest version which is 2.1.4 (at the time of writing)

1. In Index.html, locate the following line `<script src="js/jquery-1.8.0.min.js"></script>`

1. Change the reference to 'js/jquery-2.1.4.min.js'. This file is already included in the project but there may be a newer version avaliable. If there is, use it. The reference should now look like this `<script src="js/jquery-2.1.4.min.js"></script>`
