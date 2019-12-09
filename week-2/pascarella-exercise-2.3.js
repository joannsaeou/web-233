/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/
/*
============================================================
; Title: Function Properties
; Author: Pascal Pascarella
; Date: 08 December 2019
; Description: This program greets the user by first and
; last name using JavaScript.
============================================================
*/

// Header
const header = require('../pascarella-header.js'); //Links to header file

console.log(header.display("Pascal","Pascarella","Week 2")); //Prints header

//Assign values to properties
myName.pascal = "Pascal";
myName.pascarella = " Pascarella";

// Function declared
function myName() {
  return myName.pascal + myName.pascarella;
}

// Output
console.log('\n');
console.log("Hello, " + myName() + "!")


// End Program
