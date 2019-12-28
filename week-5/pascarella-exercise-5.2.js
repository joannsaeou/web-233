/*
============================================================
; Title: Exercise 5.2 - ES5 Built-In Functions
; Author: Pascal Pascarella
; Date: 28 December 2019
; Description: This is a program that iterates the forEach
; function across a one-dimensional array.
============================================================
*/

// Header
const header = require('../pascarella-header.js');

console.log(header.display("Pascal","Pascarella","Exercise 5.2 - Built-In Functions"));


// Start Program

// Declare Variables
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// Functions
foods.forEach(function(food) {  // Apply function to each item in the array
    console.log(food);          // Output to console
});

// End Program
