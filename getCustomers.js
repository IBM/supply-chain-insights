const request = require("request");
const fs = require('fs');
const path = require('path');

const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);

//url is what we are making the request to
// headers tell the request that we will receive JSON back
//credentials authenticate and prove that we are allowed to use WSCI
var options = { method: 'GET',
  url: 'https://api.ibm.com/scinsights/run/api/customers',
  headers: 
   {
     'content-type': 'application/json',
     'x-ibm-client-secret': config.clientSecret,
     'x-ibm-user-secret': config.userSecret,
     'x-ibm-client-id': config.clientId 
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