"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;

function sum() {
  var i = 0;
  if (i > Array.length) return;else {
    result += arr[i];
  }
}

console.log(sum());