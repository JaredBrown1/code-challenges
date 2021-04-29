// Challenge 1

const areaOrPerimeter = function (l, w) {
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
	return numbers.reduce(function (sum, n) {
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
	var initials = Array.prototype.map
		.call(name.split(" "), function (x) {
			return x.substring(0, 1).toUpperCase();
		})
		.join(".");
	return initials;
}

// challenge 7

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example,
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
	var murmur = "";
	for (var i = 0; i < num; i++) {
		murmur += i + 1 + " sheep...";
	}
	return murmur;
};

countSheep(3);

// challenge 8
// Complete the solution so that it reverses the string value passed into it.

function solution(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

// challenge 9
// Complete the function that accepts a string parameter, and
// reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
	// Go for it

	var reversed = str.split(" ").reverse().join(" ");
	return reversed;
	// let words = [];
	// words = str.match(/\S+/g);
	// let result = "";
	// for (let i = 0; i < words.length; i++) {
	//   result +=
	//     words[i]
	//       .split("")
	//       .reverse()
	//       .join("") + "";
	// }
	// return result;
}

// challenge 10
// Given an integral number, determine if it's a square number:

var isSquare = function (n) {
	return Math.sqrt(n) % 1 === 0; // fix me
};

// challenge 11
//Write a function to calculate factorial for a given input.
//If input is below 0 or above 12 throw an exception of type

function factorial(n) {
	if (n < 0 || n > 12) {
		throw RangeError;
	} else {
		let answer = 1;
		if (n == 0 || n == 1) {
			return answer;
		} else {
			for (var i = n; i >= 1; i--) {
				answer = answer * i;
			}
			return answer;
		}
	}
}
