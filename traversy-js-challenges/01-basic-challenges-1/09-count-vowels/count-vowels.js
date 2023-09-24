function countVowels(str) {
	let vowelCount = 0;

	let char = str.toLowerCase().split('');

	for (let i = 0; i < str.length; i++) {
		if (
			char[i] === 'a' ||
			char[i] === 'e' ||
			char[i] === 'i' ||
			char[i] === 'o' ||
			char[i] === 'u'
		) {
			vowelCount++;
		}
	}

	return vowelCount;
}

module.exports = countVowels;
