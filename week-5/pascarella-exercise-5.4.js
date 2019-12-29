/*
==================================================================
; Title: Exercise 5.4 - Filtering/Reducing Complex Data Structures
; Author: Pascal Pascarella
; Date: 28 December 2019
; Description: This is a program that iterates the forEach
; function across an array of composers and their attributes and
; displays two filtered sets according to rating and genre.
==================================================================
*/

// Header
const header = require('../pascarella-header.js');

console.log(header.display("Pascal","Pascarella","Exercise 5.4 - Filtering/Reducing Complex Data Structures"));


// Start Program

// Declare Variables

const COMPOSER = "Composer: ";
const RATING = "Rating: ";
const GENRE = "Genre: ";
const NEWLINE = "\n";

var composers = [
  {
    firstName: "Giacomo",
    lastName: "Puccini",
    genre: "Classical",
    rating: 7,
  },
  {
    firstName: "Nikolai",
    lastName: "Rimsky-Korsakov",
    genre: "Classical",
    rating: 8,
  },
  {
    firstName: "Richard",
    lastName: "Wagner",
    genre: "Classical",
    rating: 9,
  },
  {
    firstName: "Antonio",
    lastName: "Vivaldi",
    genre: "Classical",
    rating: 10,
  },
  {
    firstName: "Johannes",
    lastName: "Brahms",
    genre: "Classical",
    rating: 6,
  },
];

// Functions
var composersRating = composers.map(function(composer){
  return {rating: composer.rating, lastName: composer.lastName}
});

var composersGenre = composers.map(function(composer){
  return {genre: composer.genre, lastName: composer.lastName}
});

// Output
console.log("--COMPOSER BY RATING--");
composersRating.forEach(comp =>{
  var printString = RATING + comp.rating + NEWLINE + COMPOSER + comp.lastName + NEWLINE.repeat(2);
  console.log(printString);
});

console.log("--COMPOSER BY GENRE--");
composersGenre.forEach(comp =>{
  var printString = GENRE + comp.genre + NEWLINE + COMPOSER + comp.lastName + NEWLINE.repeat(2);
  console.log(printString);
});
// End Program
