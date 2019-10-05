'use strict';

var request = require("request-promise");
const path = require('path');
const fs = require('fs');
var util = require('util');

//connect to the config file
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);

//change this reference number to be what package you want to track
const UPSReferenceNumber = "1Z12345E0205271688";

async function main() {

  console.log('starting main function, getting UPS info');
  let upsInfo = await getUPSInfo(UPSReferenceNumber);

  console.log('ups info from main');
  console.log(util.inspect(upsInfo, false, 10, true));

  updateSCI(upsInfo);
}

async function getUPSInfo(UPSReferenceNumber) {

  let UPSrequest = {
    method: 'POST',
    url: 'https://wwwcie.ups.com/rest/Track',
    headers:
    {
      'content-type': 'application/json',
    },
    body: {
      "Security": {
        "UsernameToken": {
          "Username": "<enter your UPS username here>",
          "Password": "<enter your UPS password here>"
        },
        "UPSServiceAccessToken": {
          "AccessLicenseNumber": config.upsAccessKey
        }
      },
      "TrackRequest": {
        "Request": {
          "RequestAction": "Track",
          "RequestOption": "activity"
        },
        // "InquiryNumber": "1Z0452AE0344021784"
        "InquiryNumber": UPSReferenceNumber
      }
    },
    json: true
  };

  let res = await request(UPSrequest);
  return res;
}

async function updateSCI(UPSInfo) {

  let dateDelivered = UPSInfo.TrackResponse.Shipment.Package.Activity[0].Date;
  let timeDelivered = UPSInfo.TrackResponse.Shipment.Package.Activity[0].Time;

  let pickUpDate = UPSInfo.TrackResponse.Shipment.PickupDate;

  let year = dateDelivered.substring(0, 4);
  let month = dateDelivered.substring(4, 6);
  let day = dateDelivered.substring(6, 8);

  let pickUpyear = pickUpDate.substring(0, 4);
  let pickUpmonth = pickUpDate.substring(4, 6);
  let pickUpday = pickUpDate.substring(6, 8);

  let hour = timeDelivered.substring(0, 2);
  let minute = timeDelivered.substring(2, 4)

  let parsedDateDelivered = new Date(year, month, day, hour, minute);
  let parsedPickUpDate = new Date(pickUpyear, pickUpmonth, pickUpday, hour, minute);

  var createShipmentOptions = {
    method: 'POST',
    url: 'https://api.ibm.com/scinsights/run/api/salesshipments',
    headers:
    {
      'content-type': 'application/json',
      'x-ibm-client-secret': config.clientSecret,
      'x-ibm-user-secret': config.userSecret,
      'x-ibm-client-id': config.clientId
    },
    body: {
      "_id": UPSReferenceNumber,
      "actualShipDate": parsedPickUpDate,
      "actualDateOfArrival": parsedDateDelivered,
      "actualTimeOfArrival": parsedDateDelivered,
      "carrier": "UPS",
      "carrierContainer": UPSInfo.TrackResponse.Shipment.ShipperNumber,
      "committedTimeOfArrival": parsedDateDelivered,
      "currentLocationCoordinates": "POINT (-78.883066 35.792603)",
      "currentRegion": "US-East",
      "dateCreated": parsedPickUpDate,
      "destination": UPSInfo.TrackResponse.Shipment.Package.Activity[0].ActivityLocation.Address.toString(),
      "estimatedTimeOfArrival": parsedDateDelivered,
      "expeditedShipping": "Yes",
      "expeditedShippingCost": 0.0,
      "expeditedShippingCostCurrency": "USD",
      "origin": "9K8",
      "parcelTrackingNumber": "1Z0264920233",
      "predictedTimeOfArrival": parsedDateDelivered,
      "requestedTimeOfArrival": parsedDateDelivered,
      "salesOrder": "42BDD",
      "salesOrderLine": "12345",
      "shippingCost": 0.0,
      "shippingCostCurrency": "USD",
      "transportDescription": "Air Express Expedite",
      "transportMode": "Air"
    },
    json: true
  };

  let supplyChainInsightsResponse = await request(createShipmentOptions);

}

main();

