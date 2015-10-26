# Modern Web Interoperability

In this lab you will scan a website for modern web interoperability problems, and then fix them.

If you are able to, the lab works great if you can publish the site to a live URL as you change it. This is very easy to do with Azure, follow the steps in [Azure Setup](AzureSetup.md). However, this is not mandatory and you can do the lab without publishing your site, it just means you will not be able to re-test the changes you make.

There are several oddities with the code used in this lab which are not related to interoperability. These are for the next lab on [Performance optimisation and tuning](Performance/Performance.md). Please try to ignore these if you can bear to.

Please ensure you have completed both the [PC Setup](PCSetup.md) and [Azure Setup](AzureSetup.md) labs before continuing.

##1. Scan your site
A copy of the site in the /begin folder for this lab has been published to the following location: [http://ninjacatgallery.azurewebsites.net/interoperability/begin/index.html](http://ninjacatgallery.azurewebsites.net/interoperability/begin/index.html). We will scan this page for modern web interoperability problems.

1.Go to [https://dev.modern.ie/tools/staticscan/](https://dev.modern.ie/tools/staticscan/)

2.Enter 'http://ninjacatgallery.azurewebsites.net/interoperability/begin/index.html' as the URL and perform a scan

3.Notice that there are several problems related to 'Modern web interoperability'.

4.Keep this browser page open, we'll refer to it throughout the exercise

##2. Render mode
The report tells us that there is a problem with the rendering mode for the page. It says "There is an issue with this website that could force an old document mode intended for older versions of Internet Explorer".

1.Open /interoperability/begin/index.html in Visual Studio Code

2.Identify the line that looks like the following and remove it: 

```<meta http-equiv="x-ua-compatible" content="IE=8">```

This code forces the browser to try and render in IE8 mode which causes several compatibility problems. Where possible you should avoid old or non-standard doctypes or rendering modes and use the standard one which is `<!DOCTYPE html>`

3.Commit your changes, wait for Azure to auto-deploy and re-test at [dev.modern.ie](https://dev.modern.ie/tools/staticscan/). You'll see that the site now passes 'Render Mode'

##3. Frameworks and Libraries
One of the biggest causes for compatibility problems in most modern browsers is use of old libraries and frameworks. As libraries evolve, they are updated to work with modern browsers and some of the old hacks required for older browsers are removed so you should always try to use the latest versions of libraries and frameworks where possible, to make sure you have the very latest compatibility and interoperability fixes from the vendor.

The report says "We've found frameworks or libraries that are not up-to-date and might contain bugs.". This is because the site is referencing JQuery version 1.8.0. We need to upgrade this to the latest version which is 2.1.4 (at the time of writing)

1.In /interoperability/begin/index.html, locate the following line:

```<script src="js/jquery-1.8.0.min.js"></script>```

2.Change the reference to 'js/jquery-2.1.4.min.js'. This file is already included in the project but there may be a newer version available. If there is, use it. The reference should now look like this: 

```<script src="js/jquery-2.1.4.min.js"></script>```

3.Commit your changes, wait for Azure to auto-deploy and re-test at [dev.modern.ie](https://dev.modern.ie/tools/staticscan/). You'll see that the site now passes 'Frameworks & libraries'.

##4. Browser Detection
Browser detection is when web pages detect specific browser versions and make assumptions about features rather than detecting features themselves. This kind of code was necessary years ago, but it is not required now with modern browsers.

The report says "We've found that this webpage may be using browser detection techniques to determine how the webpage should render across many different versions of browsers".  The offending code is in site.js where we check for the presence  of Internet Explorer with `if (navigator.userAgent.indexOf("MSIE") > 0)`. If we find that the site is in IE, we replace the SVG (not supported by older versions of IE) with a PNG. As suggested by the report, we'll fix this with Modernizr.

1.Open /interoperability/begin/js/site.js in Visual Studio Code

2.Replace the full content of the file with this code

```
if (!Modernizr.svg) {
	document.getElementById('logo').src = 'images/Microsoft_logo.png';
}
```

This is a very simple example of how to do feature detection with Modernizr via JavaScript. We are checking if SVG is supported. If it is not, we are replacing the SVG icon in the header with a PNG equivalent.

3.Commit your changes, wait for Azure to auto-deploy and re-test at [dev.modern.ie](https://dev.modern.ie/tools/staticscan/). You'll see that the site now passes 'Browser Detection'.

##5. CSS prefixes
A CSS prefix is where a CSS property is prefixed with a vendor specific label such as -webkit- or -ms-. Prefixes are used by browser vendors to implement early versions of CSS properties as they emerge. Eventually, if a CSS property becomes part of the standard it will be available without the prefix.

The report says "We've found that this webpage may have missing vendor-specific prefixes or may have implemented vendor-specific prefixes when they are not required in common CSS properties". The goal is that we avoid vendor specific prefixes wherever possible, in fact some browser such as Microsoft Edge do not even implement prefixes now and many other browser vendors are going the same route.

This site uses Bootstrap which unfortunately does use a relatively large amount of vendor prefixes in the current version. However, the site's own site.css uses `-webkit-cursor:zoom-in` to change the cursor to a zoom icon over the thumbnail images. There is no standard fall back which means this rule will only apply to webkit browsers (Chrome and Safari), other browsers that do support this css property such as Microsoft Edge will not be able to use it.

1.Open /interoperability/begin/css/site.css in Visual Studio Code

2.Replace `-webkit-cursor:zoom-in` with `cursor:zoom-in`

We can now using the standard CSS 'cursor' property which means that all browsers that support it will be able to use it. If the -webkit prefix was left in, only webkit browser woudl support it

3.Commit your changes, wait for Azure to auto-deploy and re-test at [dev.modern.ie](https://dev.modern.ie/tools/staticscan/). The site will still fail the CSS prefixes test but these failures are caused by Bootstrap and is therefore out of your control. If you examine the list of selectors, you'll see that they are all coming from Bootstrap and not your own CSS.

##6. You're done. move on to the next lab
This lab is complete.

You can see a copy of the site after these steps have been completed here: [http://ninjacatgallery.azurewebsites.net/interoperability/end/index.html](http://ninjacatgallery.azurewebsites.net/interoperability/end/index.html) which you can scan at  [https://dev.modern.ie/tools/staticscan/](https://dev.modern.ie/tools/staticscan/). It should pass all of the 'Modern web interoperability' tests apart from CSS which fails on Bootstrap and is out of your control.