/*
==================================================================
; Title: Exercise 5.4 - Advanced Arrays
; Author: Pascal Pascarella
; Date: 02 January 2020
; Description: This is a program that maps over the array to
; capitalize 3 restaurants.
==================================================================
*/

// Header
const header = require('../pascarella-header.js');

console.log(header.display("Pascal","Pascarella","Exercise 5.1 - Advanced Arrays"));


// Start Program

// Declare Variables

var restaurants = ["mcdonald's", "chick-fil-a", "wendy's"];
var restFix = restaurants.map(function(item) { return item.toUpperCase(); });

// Output
console.log(restaurants.map); // Prints Mcdonald's, Chick-fil-a, Wendys
