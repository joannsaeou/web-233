/*
============================================================
; Title: pascarella-header.js
; Author: Pascal Pascarella
; Date: 08 December 2019
; Description: This is a template header.
============================================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */
exports.display = function (firstName, lastName, assignment) {
  let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
    new Date().toLocaleDateString() + "\n"

  return output
}
