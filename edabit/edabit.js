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
	return arr.map((i) => {
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

// Create a function that takes the age in years and returns the age in days.

function calcAge(age) {
	return age * 365;
}

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
	return side1 + side2 - 1;
}

// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 60;
}

// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
	return length * 2 + width * 2;
}

// There is a single operator in JavaScript, capable of providing the remainder
// of a division operation. Two numbers are passed as parameters. The first parameter
// divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(x, y) {
	return x % y;
}

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumPolygon(n) {
	return (n - 2) * 180;
}

// You are counting points for a basketball game, given the amount of 2-pointers
// scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers) {
	return twoPointers * 2 + threePointers * 3;
}

// A student learning JavaScript was trying to make a function.
// His code should concatenate a passed string name with string "Edabit"
// and store it in a variable called result. He needs your help to fix this code.

function nameString(name) {
	return name + "Edabit";
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
	if (a + b < 100) {
		return true;
	}
	return false;
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return (base * height) / 2;
}

// The && operator will only return true for true && true.
// Make a function using the && operator.

function and(a, b) {
	if (a === true && b === true) {
		return true;
	}
	return false;
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
	return `something ${a}`;
}

// Create a function that takes the age in years and returns the age in days.

function calcAge(age) {
	return age * 365;
}

// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
	return voltage * current;
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
	return `something ${a}`;
}

// Make a function using the && operator.

function and(a, b) {
	if (a && b === true) {
		return true;
	}
	return false;
}

// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag) {
	return flag.toString();
}

// Create a function that takes the number of wins, draws and
// losses and calculates the number of points a football team has obtained so far.

function footballPoints(wins, draws, losses) {
	wins = wins * 3;
	draws = draws * 1;
	losses = 0;

	return wins + draws + losses;
}

// Create a function which calculates the amount of fuel it needs, given the distance.

function calculateFuel(n) {
	if (n * 10 < 100) {
		return 100;
	} else {
		return n * 10;
	}
}
