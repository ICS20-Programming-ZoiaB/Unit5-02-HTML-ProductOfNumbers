// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function integersSent() {
  
  //initialize variable for sum
  let sum = 0;

  //getting the user's two inputted numbers that will be used to calculate the product
  let firstNum = parseFloat(document.getElementById("first-number").value);
  let secondNum = parseFloat(document.getElementById("second-number").value);

  //for loop to do repeated addition to find the product
  for (let counter = 1; counter <= secondNum; counter++) {
    sum = sum + firstNum;
  }
  
  //displaying the sum/product to the screen
  document.getElementById("results").innerHTML = "The product of your selected two numbers is " + sum + ".";
}
