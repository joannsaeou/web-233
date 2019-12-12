/*
============================================================
; Title: Discussion Board 3.1 - Control Statements
; Author: Pascal Pascarella
; Date: 11 December 2019
; Description: This program generates 3 columns of integers
; that increase up to 4 as the program loops.
; Correct output will appear as follows:


    Pascal Pascarella
    Control Statements
    Date: 12/11/2019

    1 1 1
    2 1 2
    3 1 3
    4 1 4
    1 2 1
    2 2 2
    3 2 3
    4 2 4
    1 3 1
    2 3 2
    3 3 3
    4 3 4
    1 4 1
    2 4 2
    3 4 3
    4 4 4

============================================================
*/

// Header
const header = require('../pascarella-header.js');

console.log(header.display("Pascal","Pascarella","Control Statements"));

// Start Program
for (let y = 1; y > 5, y++) // Increases "Y" column by 1 every loop
    for (let x = 1; x < 5, x++) // Increases "X" column by 1 every loop
        console.log(y, x) // Output to console

// End Program
