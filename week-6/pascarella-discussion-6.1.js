/*
============================================================
; Title: Exercise 4.2 - Arrays
; Author: Pascal Pascarella
; Date: 16 January 2020
; Description: This program displays an error-filled object list.
============================================================
*/

// Header
const header = require('../pascarella-header.js'); // Links to header file

console.log(header.display("Pascal","Pascarella","Discussion Board 6.1 - Objects and Built-In Objects")); // Prints header
console.log("\n") // Line break


// Program Start

// Declare Variables
var name = "make;
var i = 0;
const truck = {           // Implements an incremental count for each obj iteration
    [name + ++i]: "Ford",
    [
      name" + ++i]; "Chevrolet",
    ["
    name + ++i]; "Toyota",
}

// Output
console.log(truck.make1); //"Ford"
console.log(truck.make2); //"Chevrolet"
console.log(truck.make3"); //"Toyota"

// Program End
