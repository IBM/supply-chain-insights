# Getting started with Supply Chain Insights APIs

IBM's Supply Chain Insights provides your organization with end-to-end visibility throughout all stages of the supply chain lifecycle - starting from planning and sourcing, all the way to delivery and service, and everything in-between. Not only that but Supply Chain Insights is a collaboration platform; it enables businesses to set up resolution rooms to discuss and take action on problems that inevitably arise during the supply chain process. Now, Supply Chain Insights, like any other artificial intelligence application, is only as good as the data that you give it. To make things simple, Supply Chain Insights allows for two ways to upload data into the platform - one via Excel sheet upload, and the other, which will be the focus of this article, via REST APIs. 

🚨🚨🚨 Note: this article assumes you have both an IBMid and a Supply Chain 
Insights trial account. If you do not, please follow the steps outlined 
[here](https://github.com/horeaporutiu/supply-chain-insights#1-get-an-ibm-id). 🚨🚨🚨

# Accessing the Supply Chain Insights API Keys



Given that you are logged in with your IBMid and have launched your 
Supply Chain Insights platform, you are now ready to start uploading some data. 
Let's first dive into how to get your API keys. From your operations center, look
at the left-side navigation bar. Click on the settings tab, which has an icon 
of a cog. From there, click on **Build Info**. There you will see 2/3 of the keys
you will need to access the APIs, namely the **X-IBM-User-Secret** and the 
**X-IBM-Client-Id**. Save these, as you will need them later. Next, click on 
**RESTPUL APIs** right under `API access`. That will take you to the 
[Supply Chain Insights API Documentation](https://developer.ibm.com/api/mypage/). As 
long as you are logged in with your IBMid, you should see **Supply Chain Insights**
in the middle of the page. You can then click on the key icon to **Manage Your Keys**.
This will expand the page and you should see two icons, one with a lock and the other 
a key. If you hover your mouse over the keys, you should see a button that says **SHOW**.
Go ahead and click on that, and take note of the **X-IBM-Client-Secret**. That's it! 
You are now ready to make an API request! 

