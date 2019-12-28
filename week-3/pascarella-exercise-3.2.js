/*
============================================================
; Title: Exercise 3.2 - Pattern Matching Functions
; Author: Pascal Pascarella
; Date: 14 December 2019
; Description: This is a template header.
============================================================
*/

// Header
const header = require('../pascarella-header.js');

console.log(header.display("Pascal","Pascarella","Exercise 3.2 - Pattern Matching Functions"));


// Start Program

// State variables
var A = 6
var B = 5
var C = 7
var D = 7
var E = 5
var F = 6

// Declare functions
function match(A, B){
  if(A===B){
    return true;
  }else{
    return false;
  }

}

function logMismatch(A, B){
  return A + " and " + B + " do not match!"
}

function logMatch(C, D){
  return C + " and " + D + " do match!"
}




// Output
console.log(match(A, B));
console.log(logMismatch(A, B));
console.log(logMatch(C, D));
