// // We'll pass you an array of two numbers. Return the sum of those two
// // numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
	return Range(arr[0], arr[1]);
}

sumAll([1, 4]);

// You are given a variable celsius representing a temperature in Celsius. Use the
// variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent
//  to the given Celsius temperature. Use the algorithm mentioned above to help convert the
//  Celsius temperature to Fahrenheit.

function convertToF(celsius) {
	let fahrenheit = (celsius * 9) / 5 + 32;
	return fahrenheit;
}

convertToF(30);

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
	return str.split("").reverse().join("");
}

reverseString("hello");

// Return the factorial of the provided integer.

function factorialize(num) {
	if (num === 0 || num === 1) {
		return 1;
	}

	for (var i = num - 1; i >= 1; i--) {
		num *= i;
	}

	return num;
}

factorialize(5);

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
	let arr = str.trim().split(" ");
	let len = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > len) {
			len = arr[i].length;
		}
	}
	return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > num) {
				num = arr[i][j];
			}
		}
		arr[i] = num;
	}
	return arr;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
]);

// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
	if (str.slice(-target.length) === target) {
		return true;
	} else {
		return false;
	}
}

confirmEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
	if (num < 0) {
		return "";
	} else {
		return Array(num).fill(str).join("");
	}
}

repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
	if (str.length <= num) {
		return str;
	} else {
		return str.slice(0, num) + "...";
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
	let num = 0;

	for (let i = 0; i < arr.length; i++) {
		num = arr[i];
		if (func(num)) {
			return num;
		}
	}
	return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
	return bool === true || bool === false ? true : false;
}

booWho(null);

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
	let strings = str.split(" ");
	for (let i = 0; i < strings.length; i++) {
		strings[i] =
			strings[i][0].toUpperCase() + strings[i].substr(1).toLowerCase();
	}
	return strings.join(" ");
}

titleCase("I'm a little tea pot");

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
	let newArr = arr2.slice(0);
	newArr.splice(n, 0, ...arr1);
	return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
	return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// Return the lowest index at which a value (second argument) should be
// inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1
// because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because
// once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
	arr.push(num);
	return arr.sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50);
