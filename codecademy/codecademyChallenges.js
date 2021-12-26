// The most common minimum age to vote is 18.
// Write a function canIVote() that takes in a number, representing the person’s age,
// and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

const canIVote = (age) => {
	if (age >= 18) {
		return true;
	}
	return false;
};

// Write a function, agreeOrDisagree(), that takes in two strings,
// and returns 'You agree!' if the two strings are the same
// and 'You disagree!' if the two strings are different.

const agreeOrDisagree = (str1, str2) => {
	if (str1 === str2) {
		return "You agree!";
	}
	return "You disagree!";
};

// Write a function, lifePhase(), that takes in a person’s age,
// as a number, and returns which phase of life they are in.

// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

const lifePhase = (age) => {
	if (age >= 0 && age <= 3) {
		return "baby";
	} else if (age >= 4 && age <= 12) {
		return "child";
	} else if (age >= 13 && age <= 19) {
		return "teen";
	} else if (age >= 20 && age <= 64) {
		return "adult";
	} else if (age >= 65 && age <= 140) {
		return "senior citizen";
	} else {
		return "This is not a valid age";
	}
};

// Write a function, finalGrade(). It should:

// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
const finalGrade = (num1, num2, num3) => {
	let nums = (num1 + num2 + num3) / 3;

	if (
		num1 < 0 ||
		num1 > 100 ||
		num2 < 0 ||
		num2 > 100 ||
		num3 < 0 ||
		num3 > 100
	) {
		return "You have entered an invalid grade.";
	}

	if (nums >= 0 && nums <= 59) {
		return "F";
	} else if (nums >= 60 && nums <= 69) {
		return "D";
	} else if (nums >= 70 && nums <= 79) {
		return "C";
	} else if (nums >= 80 && nums <= 89) {
		return "B";
	} else if (nums >= 90 && nums <= 100) {
		return "A";
	}
};

// Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
// and returns a string in the following format: ‘rank lastName reporting for duty!’

const reportingForDuty = (rank, lastName) => {
	return `${rank} ${lastName} reporting for duty!`;
};

// Though an object’s mass remains consistent throughout the universe,
// weight is determined by the force of gravity on an object.
// Since different planets have different gravity,
// the same object would weigh different amounts on each of those planets! Cool, huh?

// Write a function, calculateWeight(). It should:

// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.

const calculateWeight = (earthWeight, planet) => {
	switch (planet) {
		case "Mercury":
			return earthWeight * 0.378;
		case "Venus":
			return earthWeight * 0.907;
		case "Mars":
			return earthWeight * 0.377;
		case "Jupiter":
			return earthWeight * 2.36;
		case "Saturn":
			return earthWeight * 0.916;
		default:
			return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
	}
};

// It can be hard to keep track of what’s truthy or falsy in JavaScript.
// Write a function, truthyOrFalsy(), that takes in any value and returns
// true if that value is truthy and false if that value is falsy.

const truthyOrFalsy = (value) => {
	return value ? true : false;
};

// A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

// Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.

const numImaginaryFriends = (totalFriends) => {
	return Math.ceil(totalFriends / 4);
};
