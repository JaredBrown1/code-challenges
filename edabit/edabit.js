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

// challenge 5

// Create variables a and b from the given
// array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6];

let a = arr[0];

let b = arr[1];

// challenge 6

// Create a function that takes in a current mood and return a sentence
// in the following format: "Today, I am feeling {mood}". However, if no argument is passed,
// return "Today, I am feeling neutral".

function moodToday(mood) {
  if (mood) {
    return `Today, I am feeling ${mood}`;
  }
  return `Today, I am feeling neutral`;
}

// challenge 7

// Create a function that returns the
// number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
  return fps * (minutes * 60);
}

// challenge 8

// Write a function that takes two integers (hours, minutes) and converts them into seconds.

function convert(hours, minutes) {
  return Math.floor(hours * 60 * 60) + Math.floor(minutes * 60);
}

// challenge 9

// Create a function that takes a whole number as
// input and returns the shape with that number's amount of sides.
// Here are the expected outputs to get from these inputs.

function nSidedShape(n) {
  switch (n) {
    case 1:
      return "circle";
    case 2:
      return "semi-circle";
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    case 9:
      return "nonagon";
    case 10:
      return "decagon";
    default:
      return null;
  }
}
