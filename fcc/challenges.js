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
