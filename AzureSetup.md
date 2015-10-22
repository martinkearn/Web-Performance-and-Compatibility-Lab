#Azure Setup

This lab will help you setup Azure for hosting your web application and automatically deploy it from source control (GitHub).

##1. Fork this repository
In this step, we'll fork this GitHub repository which you can then use to enable continuous integration on Azure. This will act as your working repository throughout the lab.

1. Go to [https://github.com/martinkearn/Web-Performance-and-Compatibility-Lab](https://github.com/martinkearn/Web-Performance-and-Compatibility-Lab)
2. Click 'Fork'. This will create a fork (a copy) of this repository on your own GitHub account

##2. Get an Azure subcription
You'll need a subscription to use Azure. If you already have one, carry on to the next steps.

If you do not have a subsciption, you can get a free trial with £125 credits (more than enough to do this lab) from [here](https://azure.microsoft.com/en-us/pricing/free-trial/). You will be asked for credit card details to create a trial, but will not be charged unless you use more than £125 of resources or use paid servce beyond the trial period. This lab mainly uses free services.

##3. Create A Web App Service
In this step you'll create a new 'Web App Service' to host your webiste.

1. Go to [http://portal.azure.com](portal.azure.com) and login
2. Go to New > Web + Mobile > Web App
3. Give the Web App a name that you'll remember. Choose appropriate settings for the Subscription, Resource Group and App Service Plan or accept the default if you are unsure. Please note that 'North Europe' is the closest data center to the UK.
4. Click Create.

The creation process takes a few minutes and you'll get an notification in the Azure portal when it has completed. It will also appear as a tile on your Portal home screen.

##4. Setup Continuous Integration
Continuous integration means that every commit that happens in your GitHub repository gets published to your Azure website automatcally with no manual intervention. It is ideal for this kind of scenario where your site is being worked on and you want a live URL with the latest changes on it.

1. Go to [http://portal.azure.com](portal.azure.com) and login
2. Go to Browse > Web Apps and open the website you created in step 3
3. In the main blade click the 'Deployment' tile. It says "Set up continuous deployment"
4. Choose GitHub as the source
5. Enter your GitHub credentials to authorize yourself
6. Choose the 'Web-Performance-and-Compatbility' project
7. Leave the branch as 'Master'
8. Press OK.

After a few seconds you'll see the latest Commit being deployed from GitHub to your web site. Wait until you see a green tick and this shows that your site is live. This will now happen automatically whenever you commit to GitHub.

The deployment on Azure mirrors the GitHub folder strcuture so the root site url will give you an error. However, if you got to {Your Azure Url}/Interoperability/begin/Index.html you should see the initial website.