var request = require("request");
let productInfo = require("./productInfo");

var options = {
  method: 'POST',
  url: 'https://api.ibm.com/scinsights/run/api/products',
  headers:
  {
    'content-type': 'application/json',
    'x-ibm-client-secret': config.x-ibm-client-secret,
    'x-ibm-user-secret': config.x-ibm-user-secret,
    'x-ibm-client-id': config.x-ibm-client-id 
   },
  body: productInfo,
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log('statusCode: ')
  console.log(response.statusCode);

  console.log(body)


});


