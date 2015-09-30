# Modern web interoperability

In this lab you will scan a website for modern web interoperability problems, and then fix them.

## Scan your site
A copy of the site in the /begin folder for this lab has been published to the following location: [http://ninjacatgallery.azurewebsites.net/begin/index.html](http://ninjacatgallery.azurewebsites.net/begin/index.html). We will scan this page for Edge Compatibility problems.

1. Go to [https://dev.modern.ie/tools/staticscan/](https://dev.modern.ie/tools/staticscan/)
1. Enter 'http://ninjacatgallery.azurewebsites.net/begin/index.html' as the URL and perform a scan
1. Notice that there are several problem related to 'Modern web interoperability'
1. Keep this browser page open, we'll refer to it throughout the excersise

##Render mode
The report tells us that there is a problem with the rendering mode for the page. It says "There is an issue with this website that could force an old document mode intended for older versions of Internet Explorer".

1. Open /begin/index.html in Visual Studio Code