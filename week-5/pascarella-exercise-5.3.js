/*
============================================================
; Title: Exercise 5.3 - Object Collections
; Author: Pascal Pascarella
; Date: 28 December 2019
; Description: This is a program that iterates the forEach
; function across an array of composers and their attributes.
============================================================
*/

// Header
const header = require('../pascarella-header.js');

console.log(header.display("Pascal","Pascarella","Exercise 5.3 - Object Collections"));


// Start Program

// Declare Variables
var composers = [
  {
    firstName: "Giacomo",
    lastName: "Puccini",
    genre: "Classical",
    rating: 7
  },
  {
    firstName: "Nikolai",
    lastName: "Rimsky-Korsakov",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Richard",
    lastName: "Wagner",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Antonio",
    lastName: "Vivaldi",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johannes",
    lastName: "Brahms",
    genre: "Classical",
    rating: 6
  },
];

// Functions
composers.forEach(function(composer) {

  console.log(
    "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
  );
})

// End Program
