export const twoFer = (name) => {
	if (name) {
		return `One for ${name}, one for me.`;
	}
	return "One for you, one for me.";
};

// second iteration

export const twoFer = (name = "you") => {
	return `One for ${name}, one for me.`;
};
