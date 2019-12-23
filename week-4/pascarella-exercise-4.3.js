/*
============================================================
; Title: Exercise 4.3 - Filtering
; Author: Pascal Pascarella
; Date: 22 December 2019
; Description: This program displays an filter of vehicles.
============================================================
*/

// Header
const header = require('../pascarella-header.js'); // Links to header file

console.log(header.display("Pascal","Pascarella","Exercise 4.3 - Filtering")); // Prints header
console.log("\n") // Line break


// Program Start

// Declare variables
var vehicles = [ "Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// Functions
function getValue(arr,val){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val)
    console.log(arr[i]);
  }
}

// Output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

console.log("\n -- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

console.log("\n -- SELECTED VALUE --");
getValue(vehicles, "Bus");

// Program end
