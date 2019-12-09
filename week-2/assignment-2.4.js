/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

/*
============================================================
; Title: Functions
; Author: Pascal Pascarella
; Date: 08 December 2019
; Description: This program .
============================================================
*/

// Header
const header = require('../pascarella-header.js'); // Links to header file

console.log(header.display("Pascal","Pascarella","Assignment 2.4: Functions")); // Prints header
console.log("\n") // Line break

// Begin Program


//Assigns values
firstName = "Pascal";
lastName = "Pascarella";

// Declare the naming function
function fullName(){
  return firstName + " " + lastName; //Print order
}

// Prints naming function
console.log("Hello, my name is " + fullName() + "!");
console.log("\n") // Line break

// Function to write date
function dateWriter(year,month,day){
  return month + day + ", " + year; //Print order
}

// Function to convert number to whole number
function formatNumber(number,numOfFixedPositions){
  number = 33.6;
  numOfFixedPositions = number.toFixed(0); //No decimals
  return numOfFixedPositions; //Print order
}

// Prints date function
console.log("Today's date is " + dateWriter('2019', 'December ', '8') + " and the current temperature is " + formatNumber() + " degrees.");
console.log('\n') // Line break

// Function to add x and y for age
function convertToInt(x,y){
return x + y; //Print order
}

// Function converts string to floating point
function convertToFloat(amount){
  var amount = parseFloat(" 86400 dollars in savings account ");
  return amount;
}

// Prints age and savings
console.log("I am " + convertToInt(30, 3) + " years old and my savings account goal is " + convertToFloat() + " dollars.");

// End program
