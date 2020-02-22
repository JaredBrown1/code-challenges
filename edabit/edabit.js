// challege 1

//In this challenge, you must verify the equality of two different given parameters: a and b

function checkEquality(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

// challenge 2

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  }
  return false;
}

// challenge 3

// Given two integers, a and b, return true if a can
// be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
  if (Number.isInteger(a / b)) {
    return true;
  }
  return false;
}

// challenge 4

// Create a function that takes an array with numbers and return an
// array with the elements multiplied by two.

function getMultipliedArr(arr) {
  return arr.map(i => {
    return i * 2;
  });
}
