function reverseString(str) {
	let arr = str.split("");
	arr.reverse().toString();
	return arr.join("");
}

module.exports = reverseString;
