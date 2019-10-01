# Getting started with Supply Chain Insights APIs

IBM's Supply Chain Insights provides your organization with end-to-end visibility throughout all stages of the supply chain lifecycle - starting from planning and sourcing, all the way to delivery and service, and everything in-between. Not only that but Supply Chain Insights is a collaboration platform; it enables businesses to set up resolution rooms to discuss and take action on problems that inevitably arise during the supply chain process. Now, Supply Chain Insights, like any other artificial intelligence application, is only as good as the data that you give it. To make things simple, Supply Chain Insights allows for two ways to upload data into the platform - one via Excel sheet upload, and the other, which will be the focus of this article, via REST APIs. 

🚨🚨🚨 Note: this article assumes you have both an IBMid and a Supply Chain 
Insights trial account. If you do not, please follow the steps outlined 
[here](https://github.com/horeaporutiu/supply-chain-insights#1-get-an-ibm-id). 🚨🚨🚨

# Accessing the Supply Chain Insights API Keys

<br>
<p align="center">
  <img src="images/gifs/getKeys.gif">
</p>
<br>

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

# Making your first GET request

Let's go ahead and make our first GET request. We're going to use [CURL](https://curl.haxx.se) to do this. If you do not have CURL downloaded, please do so. Next,
we will an API to get all of the supply shipments we have available in our platform. 
🚨Each trial account comes with dummy data, so you do not need to import anything!🚨

The one-stop shop for Supply Chain API Documentation can be found [here](https://developer.ibm.com/api/view/scinsights-prod:supply-chain-insights#doc). From the left-hand
side tab, scroll all the way down to supply shipments. Click on **supply shipments**
and then on **Find supply shipments**. You should be [here](https://developer.ibm.com/api/view/scinsights-prod:supply-chain-insights#id100086) in the documentation. You can 
see that this API request `Retrieves the details for one or more supply shipments that match your query.` Perfect. You can also see which header parameters are required,
namely  **X-IBM-Client-Secret** and **X-IBM-Client-Id**.

Open up a terminal, and copy and paste the following code, making sure to replace 
the client id, client secret, and user secret, with **your own values**.

```bash
curl -X GET \
  https://api.ibm.com/scinsights/run/api/supplyshipments \
  -H 'accept: application/json' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-ibm-client-id: <your client id goes here>' \
  -H 'x-ibm-client-secret: <your client secret goes here>' \
  -H 'x-ibm-user-secret: <your user secret goes here>'
```

When all is said and done, your request should look like the following, 
except your keys will be different:

```bash
curl -X GET \
  https://api.ibm.com/scinsights/run/api/supplyshipments \
  -H 'accept: application/json' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-ibm-client-id: 9e12d666-basasdf4b-4211-a540-2627bc0321b4' \
  -H 'x-ibm-client-secret: yD4cI3jO8asdfO2fG0wB3lF5uY7cQ4wM6lQ6oX8pN1bA8iF' \
  -H 'x-ibm-user-secret: a6f24a5d-055a-45c6fa09cec34'
```

You output should look like the following:

```bash
~$ curl -X GET \
>   https://api.ibm.com/scinsights/run/api/supplyshipments \
>   -H 'accept: application/json' \
>   -H 'cache-control: no-cache' \
>   -H 'content-type: application/json' \
>   -H 'x-ibm-client-id: 9e12d666-b14b-4210-2627bc0321b4' \
>   -H 'x-ibm-client-secret: yD4cI3jO8O2fG0wB3lF5uY7cQ4wM6lQ6oX8pN1bA8iF' \
>   -H 'x-ibm-user-secret: a6f24a5d-055a-b3e6-952c909cec34'
{"results":[{"_actualShipTime":"2019-02-28T00:00:00.000+0000","_actualTimeofArrival":null,"_airwayMasterNumber":null,"_billofLadingNumber":"BOL-ZB-PO-0001760","_carrierContainer":null,"_carrierID":"TransOceanic","_committedTimeofArrival":"2019-03-13T00:00:00.000+0000","_currentLocationCoordinates":null,"_currentRegion":null,"_dateCreated":"2019-02-08T00:00:00.000+0000","_destinationLocationID":"ZillaBar-NW-P","_estimatedTimeofArrival":"2019-03-13T00:00:00.000+0000","_eventMilestone":null,"_expectedPathofShipment":null,"_expeditedShipping":null,"_expeditedShippingCost":null,"_expeditedShippingCostCurrency":"US$","_freightForwarder":null,"_houseAirwayBill":null,"_id":"ZB-PO-0001760","_milestoneChangeTime":null,"_orderValue":279464.9446494465,"_originLocationID":"Bioway Organic Ingredients Co Ltd","_parcelTrackingNumber":null,"_predictedLocationofArrival":"ZillaBar-NW-P","_predictedTimeofArrival":"2019-03-13T00:00:00.000+0000","_previousEventMilestone":null,"_quantityCommitted":7650.0,"_quantityCommittedUOM":"Kilogram","_quantityShipped":7650.0,"_quantityShippedUOM":"Kilogram","_requestedShipDate":"2019-02-28T00:00:00.000+0000","_requestedTimeofArrival":"2019-03-13T00:00:00.000+0000","_revisedEstimatedTimeofArrival":null,"_shipmentNumber":"ZB-PO-0001760","_shippingCost":2794.6494464944653,"_shippingCostCurrency":"US$","_sourceLink":null,"_stop1":"Port of Los Angeles","_stop1ArrivalTime":"2.....
```

If you got some output that looks something like that, then CONGRATS! You've just 
learned how to make your first API request to Supply Chain Insights :) 💪🏼


# Making your first POST request






