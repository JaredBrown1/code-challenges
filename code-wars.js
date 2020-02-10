// Challenge 1

const areaOrPerimeter = function(l, w) {
  // Return your answer
  if (l === w) {
    return (l + w) * 2;
  } else if (l !== w) {
    return l * 2 + w * 2;
  }
};

// challenge 2

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

// challenge 3

function squareSum(numbers) {
  return numbers.reduce(function(sum, n) {
    return n * n + sum;
  }, 0);
}

// challenge 4
// Write a method 'sum' that takes an array of numbers and returns the sum of the numbers. These may
// be integers or decimals for Ruby and any instance of Num for Haskell. The numbers
// can also be negative. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  "use strict";
  return numbers[i].reduce((a, b) => {
    return a + b;
  }, 0);
}

//challenge 5
// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.

function check(a, x) {
  // your code here
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
}

//challenge 6
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  var name = "First Last";
  var initials = Array.prototype.map
    .call(name.split(" "), function(x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join("");
}
