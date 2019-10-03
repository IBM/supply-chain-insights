> Use this file to gather the content required for the pattern overview. Copy this draft-patten-template.md file, replace with your own content for each of the sections below, and attach your file to the GitHub tracking issue for your pattern.

> For full details on requirements for each section, see "Write a code pattern overview" on w3 Developer: [https://w3.ibm.com/developer/documentation/write-code-pattern-overview/](https://w3.ibm.com/developer/documentation/write-code-pattern-overview/)

# Short title

> Get started with Supply Chain Insights

# Long title

> Expand on the short title, focusing on open source or generic tools and programs. Include IBM product names only if that product is required in the pattern and cannot be substituted.

Use UPS APIs to update delivery details and gain visibility into your Supply Chain Processes   

# Author

* Horea Porutiu <horea.porutiu@ibm.com>

# URLs

### Github repo

> https://github.ibm.com/ibm-developer-eti-blkch-iot-isc/supply-chain-insights

### Other URLs (Video)

* Demo URL (Intro) - TBD

# Summary

> When everything is going all and well, details such as which route your carrier took to deliver your package to your customer seem completely immaterial. But what happens when a massive storm hits, and you realize that all of your carriers are stuck in the storm, and none of your packages will be delivered on time? You've just broken your promise to your customers, and more likely than not, you'll have to deal with angry customers demanding refunds, all because you didn't have the visibility into your end-to-end supply chain. This is where Supply Chain Insights comes in.

# Technologies

[Node.js](https://nodejs.org/en/):An open source, cross-platform JavaScript run-time environment that executes server-side JavaScript code.

# Description
IBM's Supply Chain Insights provides your organization with end-to-end visibility throughout all stages of the supply chain lifecycle - starting from planning and sourcing, all the way to delivery and service, and everything in-between. Not only that but Supply Chain Insights is a collaboration platform; it enables businesses to set up resolution rooms to discuss and take action on problems that inevitably arise during the supply chain process. Now, Supply Chain Insights, like any other artificial intelligence application, is only as good as the data that you give it. To make things simple, Supply Chain Insights allows for two ways to upload data into the platform - one via Excel sheet upload, and the other via REST APIs. This 
pattern will show you how to you to get your account, upload data, and integrate with external data 
sources such as UPS, and ultimately make better supply chain decisions. 

# Flow

<br>
<p align="center">
  <img src="docs/app-architecture.png">
</p>
<br>

# Flow Description
1. The developer uploads existing shipment information using Excel.
2. The developer uses APIs to automate uploading of large batches of 
orders and shipments.
3. The developer uses UPS API's to gain real-time information about the 
current location and estimated time of delivery for shipments. 
4. Supply Chain Insights offers valuable advisories depending on the UPS 
information about the current location and estimated delivery. 
5. The supply chain team goes into resolution rooms to plan how best to mitigate 
disruptions predicted by advisories. 

# Instructions

> Find the detailed steps for this pattern in the [readme file](https://github.ibm.com/ibm-developer-eti-blkch-iot-isc/supply-chain-insights). The steps will show you how to:

1. [Get an IBM ID](#1-Get-an-IBM-ID)
2. [Get a Supply Chain Insights trial account](#2-Get-a-Supply-Chain-Insights-trial-account)
3. [Upload existing orders and shipments from spreadsheet](#3-Upload-existing-orders-and-shipments-from-spreadsheet)
4. [Get API Credentials](#4-Get-API-credentials)
5. [Use APIs to automate uploading of data to Supply Chain Insights](#5-Use-APIs-to-automate-uploading-of-data-to-Supply-Chain-Insights)

# Components and services

* [Supply Chain Insights](https://www.ibm.com/us-en/marketplace/supply-chain-insights) Capitalize on AI to break free from supply chain visibility challenges and act with confidence.


# Runtimes

* Node.js

# Related IBM Developer content
- TBD

# Related links
- TBD

