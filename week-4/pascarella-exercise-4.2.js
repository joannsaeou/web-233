/*
============================================================
; Title: Exercise 4.2 - Arrays
; Author: Pascal Pascarella
; Date: 22 December 2019
; Description: This program displays an array of fruits.
============================================================
*/

// Header
const header = require('../pascarella-header.js'); // Links to header file

console.log(header.display("Pascal","Pascarella","Exercise 4.2 - Arrays")); // Prints header
console.log("\n") // Line break


// Program Start


// Declare variables

var fruits= ["Grape", "Strawberry", "Plum", "Lemon", "Kiwi"];

// Functions
function getFruit(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Output
getFruit(fruits);

// end program
