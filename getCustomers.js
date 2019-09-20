const request = require("request");
const fs = require('fs');

//url is what we are making the request to
// headers tell the request that we will receive JSON back
//credentials authenticate and prove our
var options = { method: 'GET',
  url: 'https://api.ibm.com/scinsights/run/api/customers',
  headers: 
   {
     'content-type': 'application/json',
     'x-ibm-client-secret': 'your-client-secret-goes-here',
     'x-ibm-user-secret': 'your-user-secret-goes-here',
     'x-ibm-client-id': 'your-client-id-goes-here' 
    } 
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  fs.writeFile("output/getAllCustomers.json", body, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  }); 
});