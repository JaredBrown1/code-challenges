function findMaxNumber(arr) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		num < arr[i] ? (num = arr[i]) : null;
	}
	return num;
}

module.exports = findMaxNumber;
