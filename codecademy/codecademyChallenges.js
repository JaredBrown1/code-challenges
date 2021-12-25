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
