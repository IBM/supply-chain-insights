# Watson Supply Chain Insights

>Use Watson Supply Chain Insights to predict, assess, and mitigate disruptions and 
ultimately optimize supply chain performance

Audience level : Intermediate Developers

🚨*Note: Watson Supply Chain Insights will be abbreviated to WSCI for short.*🚨

When you have completed this code pattern, you will understand how to:

* Upload orders, shipments from an Excel spreadsheet
* Use APIs to automate and upload large batches of orders and shipments
* Automate updating external shipment data (from UPS or Fedex) to increase response
time of supply chain events.
* Use external news sources (weather data, port closures) to provide advisories 
in real-time. 

<!-- # Architecture flow
***UPDATE***

<p align="center">
  <img src="docs/doc-images/archdiagram.png">
</p>

1. The developer develops a smart contract using Node.js
2. Use the IBM Blockchain Platform Extension for VS Code to package the Decentralized Energy smart contract.
3. Setup and launch the IBM Blockchain Platform 2.0 service
4. The IBM Blockchain Platform 2.0 enables the creation of a network onto a IBM Kubernetes Service, enabling installation and instantiation of the Auction smart contract on the network
5.  The Node.js application uses the Fabric SDK to add a listener to specific transactions and subsequently interact with the deployed network on IBM Blockchain Platform 2.0 and issues transactions.
6.  Events are emitted as transactions are triggered and blocks are committed to the ledger. The events are sent back to the Node.js application.
 -->


# Included components
* [Watson Supply Chain Insights](https://www.ibm.com/us-en/marketplace/supply-chain-insights) Capitalize on AI to break free from supply chain visibility challenges and act with confidence.

## Featured technologies
<!-- + [Hyperledger Fabric v1.4](https://hyperledger-fabric.readthedocs.io) is a platform for distributed ledger solutions, underpinned by a modular architecture that delivers high degrees of confidentiality, resiliency, flexibility, and scalability. -->

<!-- # Watch the Video 

[![](docs/doc-images/video.png)](https://www.youtube.com/watch?v=KLWLCjKf5Xw) -->


### Prerequisites
- [IBM ID](https://www.ibm.com) 
- [Watson Supply Chain Insights account](https://www.onlinedigitallearning.com/mod/page/view.php?id=59722&forceview=1) 

### Steps

1. [Get an IBM ID](#1-Get-an-IBM-ID)
2. [Get a Watson Supply Chain Insights trial account](#2-Get-a-Watson-Supply-Chain-Insights-trial-account)
3. [Upload existing orders and shipments from spreadsheet](#3-Upload-existing-orders-and-shipments-from-spreadsheet)



## 1. Get an IBM ID

The first step to getting your free trial of Watson Supply Chain Insights (WSCI for 
short) is to get an IBM ID. First go to [ibm.com](https://www.ibm.com) and in the 
top-right corner, click on the icon of a person. From there, click on **My IBM**. 
From there, click on **Create an IBM ID** and fill out the form. Note that the 
email you use here will need to be valid, since you will be emailed your trail 
account for WSCI to the email you use to create your IBM ID. Now that you have 
created your IBM ID, let's request your WSCI trial.

# 2. Get a Watson Supply Chain Insights trial account
To get a Watson Supply Chain insights trail account, we must first register 
for a course that gives us access to this account. Let's go to 
[IBM Training and Skills site](https://www.onlinedigitallearning.com/course/index.php). You will likely be asked to login with your IBM ID. Once there, 
search for **DL25400G**. You will see a couple results, click on 
**IBM Supply Chain Insights: Getting Your Learning Environment**. Inside the 
course, you will see a few links, click on **Requesting your learning environment**.
From there, fill in the form with your IBM ID email, and then click on 
**Create Request**. The request must be processed by IBM, and can take **up to 
one business day** to complete. I.e. if you request it on Friday, you may only get 
access to your account on Monday. Once you get your email granting your access 
to your WSCI trial, we are ready to get started! 

# 3. Upload existing orders and shipments from spreadsheet
Our first exercise upon getting our WSCI account is uploading data from a 
spreadsheet. Go ahead do a git clone to download all of the files from 
the repo, which includes the Excel spreadsheets.

```
testDir$ git clone https://github.com/horeaporutiu/watson-supply-chain-insights

testDir$ cd watson-supply-chain-insights/ 
```

You'll see in this repo, that we have the **product-spreadsheet.xlsx** 
and **product-inventory.xlsx** files. First, let's update the spreadsheets
to use our own initials instead of **RTA**. Update the files, and save 
them. Since my initials are HP, my spreadsheet will show 
**HP-SA-2019-V1**.

Now, log into [IBM Supply Chain Insights](https://www.ibm.com/customer-engagement/supply-chain/launch/) with your IBM ID and 
password you created in step 1.

From the left-hand panel of the WSCI dashboard, click on **Data**, which
is right above the **Settings**. From there, click on **Upload**. From 
there, navigate to **product-inventory.xlsx** from within your cloned
repo. You should see something like `This upload is similar to files that were previously uploaded. Select one of these mappings?
You can edit the mapping or make a copy if necessary.` Go ahead 
and click on **Select a type** under the main panel which shows 
11/12 fields matched. Then select **Product Inventory**. You should 
see a pop-up which says **Time to map your upload!** Click on `Continue`.

Then, under **Your data fields** click on **Select an option** and click 
on **Inventory Location**. On the bottom, you should see **11/12 mapped**.
Click on **Next**.

The next page will say **Your data is uploading**. Click on **View History**.

There, at the top of the page you should see **product-inventory**. If you
click on the right-arrow, you should see **8 records processed**. Nice job!

You now know how to upload data through Excel spreadsheets! 




<!-- ## Extending the code pattern
This application can be expanded in a couple of ways:
* Create a wallet for every member and use the member's wallet to interact with the application.
* Add a UI application in place of the `invoke.js` node application to execute the transactions. -->


## Links
* [Watson Supply Chain Insights Details](https://www.ibm.com/us-en/marketplace/supply-chain-insights/details)
* [Watson Supply Chain Insights API Explorer](https://developer.ibm.com/api/view/scinsights-prod:supply-chain-insights:title-Supply_Chain_Insights)

## License
This code pattern is licensed under the Apache Software License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache Software License (ASL) FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
