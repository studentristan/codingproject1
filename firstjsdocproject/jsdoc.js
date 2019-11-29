/**
* @author Werden Tristan
* @version 0.0.1
* @summary River Falls Home Construction Company
* @todo
*/

//section 1 ^^

"use strict";
const PROMPT = require('readline-sync')

let bedroom, bathroom, garage, price

//section 2 ^^

function main() {
  console.clear(); //clears screen
  setBedroom();
  setBathroom();
  setGarage();
  printOverallPrice();
}

main();

//section 3 ^^

function setBedroom(){
  bedroom = PROMPT.question ('\n Please insert the number of bedrooms in the house:');
}

function setBathroom(){
  bathroom = PROMPT.question ('\n Please insert the number of bathrooms in the house:');
}

function setGarage(){
  garage = PROMPT.question ('\n Please insert the number of cars that the garage can hold');
}

function printOverallPrice(){
  const BEDROOMPRICE = 17000;
  const BATHROOMPRICE = 12500;
  const GARAGEPRICE = 6000;
  const STARTPRICE = 50000;

  price = "bedroom" * "BEDROOMPRICE" + "bathroom" * "BATHROOMPRICE" + "garage" * "GARAGEPRICE" + "STARTPRICE"; //calculates start price
  console.clear(); //clears screen
  console.log ('$(STARTPRICE) is the price of your house')
}
