// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

function integersSent() {

  //Initializing product variable and getting numbers from user
  let product = 0;
  let firstNum = parseInt(document.getElementById("first-number").value);
  let secondNum = parseInt(document.getElementById("second-number").value);

  //If statement to give an error message if nothing nothing is entered or if numbers are invalid
  if (isNaN(firstNum) || isNaN(secondNum)) {
    document.getElementById("results").innerHTML = "Please enter valid numbers.";
    return;
  }
  
  //Else (for if numbers are entered)
  else {
    // Take the absolute value to do multiplication
    let firstNumAbsolute = Math.abs(firstNum);
    let secondNumAbsolute = Math.abs(secondNum);
    //For loop to execute repeated addition that will result in the product.
    for (let counter = 0; counter < secondNumAbsolute; counter++) {
      product = product + firstNumAbsolute;
    }
  }

  //If statement to make sure that if one of the numbers is negative, the product will be negative
  if ((firstNum < 0 && secondNum > 0) || (firstNum > 0 && secondNum < 0)) {
    product = product * -1;
  }

 document.getElementById("results").innerHTML = "The product of your two selected numbers (" + firstNum + " x " + secondNum + ") is "  + product + ".";
}