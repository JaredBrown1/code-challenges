function arrayIntersection(arr1, arr2) {
	let newArr = [];

	for (let i = 0; i < arr1.length; i++) {
		let num = arr1[i];

		if (arr2.includes(num)) {
			newArr.push(num);
		}
	}

	return newArr;
}

module.exports = arrayIntersection;
