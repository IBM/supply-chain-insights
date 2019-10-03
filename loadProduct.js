'use strict';

const request = require("request-promise");
const path = require('path');
const fs = require('fs');
const util = require('util');

//connect to the config file
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);

//connect to the product info file
const productPath = path.join(process.cwd(), './sampleProduct.json');
const productJSON = fs.readFileSync(productPath, 'utf8');
const productInfo = JSON.parse(productJSON);

async function main() {

  await addProductRequest();
  console.log('after product request')

  getProductById(productInfo._id)


}

async function addProductRequest() {

  var addProductRequest = {
    method: 'POST',
    url: 'https://api.ibm.com/scinsights/run/api/products',
    headers:
    {
      'content-type': 'application/json',
      'x-ibm-client-secret': config.clientSecret,
      'x-ibm-user-secret': config.userSecret,
      'x-ibm-client-id': config.clientId 
     },
    body: productInfo,
    json: true
  };

  

  await request(addProductRequest);
  console.log(`addProductRequest successful`);

}

async function getProductById(id) {

  console.log('id: ')
  console.log(id)

  var getProductById = {
    method: 'GET',
    url: 'https://api.ibm.com/scinsights/run/api/products/' + id,
    headers:
    {
      'content-type': 'application/json',
      'x-ibm-client-secret': config.clientSecret,
      'x-ibm-user-secret': config.userSecret,
      'x-ibm-client-id': config.clientId 
     },
    json: true
  };

  let res = await request(getProductById);
  console.log(`getProductById response: `);

  console.log(res)

}


main()

