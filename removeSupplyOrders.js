var request = require("request");
const path = require('path');
const fs = require('fs');

//connect to the config file
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
console.log(config)
var options = {
  method: 'DELETE',
  url: 'https://api.ibm.com/scinsights/run/api/salesshipments/1Z12345E0205271688',
  headers:
  {
    'content-type': 'application/json',
    'x-ibm-client-secret': config.clientSecret,
    'x-ibm-user-secret': config.userSecret,
    'x-ibm-client-id': config.clientId 
   },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log('statusCode: ')
  console.log(response.statusCode);


});


