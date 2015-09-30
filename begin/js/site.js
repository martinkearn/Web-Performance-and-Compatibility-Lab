if (!Modernizr.svg) {
	document.getElementById('logo').src = 'images/Microsoft_logo.png';
}

if (navigator.userAgent.indexOf("MSIE") > 0)
{
	document.getElementById('logo').src = 'images/Microsoft_logo.png';
}
