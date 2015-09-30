# Web Performance and Compatibility Lab
A lab for modifying a website to be more compatible with Microsoft Edge and improving front-end performance.

This lab includes the following tasks:

1. [Pre-flight check](#Task1)
1. [Microsoft Edge Compatibility](#Task2)

<a name="Task1" />
##Pre-flight check
These are pre-requisiste steps which you may or may not have have completed on your machine.

### Install a development tool
These labs will use **Visual Studio Code** as the development environment for building and updating the cross-platform application presented as example. You can use any web text editor such as Sublime if you wish, but the instruction are written base don Visual Studio Code.

You can download **Visual Studio Code** for Windows, Linux and OSX from [here](https://code.visualstudio.com/).

### OPTIONAL: Get access to Windows 10 with Microsoft Edge
These labs work best if you have Microsoft Edge which is the default browser in Windows 10. If you are already using Windows 10, you are good to go, but if not, this is how you get it.

Do not worry if you cannot get Windows 10, it is a nice to have for this lab, not mandatory

There are a few options depending on what type of machine you are using:
1. You can download a Virtual Machine with Windows 10 and Edge for free from the [Microsoft Edge Dev portal](https://dev.modern.ie/tools/vms/windows/). All main Virtual Machine and OS combinations are avaliable.
2. You can create a Windows 10 Virtual machine in Azure to access via remote desktop. get started with a free trial [here](https://azure.microsoft.com/en-us/trial/free-trial-virtual-machines/)
3. If you have Windows 7 or Windows 8.1, you can probably upgrade to Windows 10 for free. Check your options [here](http://www.microsoft.com/en-gb/windows/windows-10-upgrade)

### Have Google Chrome installed
The labs will also make use of a Google Chrome Extensions, so you must have Google Chrome installed. You can download it [here](https://www.google.com/chrome/index.html)

### Clone or download content of this GitHub repository (optional but recommended)
The labs provided have a combination of text documentation and sample code. In order to have all documentation and necessary sample files locally on your computer, we strongly recommend you clone (using [Git](http://git-scm.com/)) or download all content in this repository locally on your computer.

<a name="Task2" />
##Excersise 1: Microsoft Edge Compatibility
In this excersise, you will analyse a copy of the site for compatibility with Microsoft Edge and fix the various issues that are exposed