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
