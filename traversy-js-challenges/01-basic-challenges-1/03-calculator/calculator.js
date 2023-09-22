function calculator(num1, num2, operator) {
	return operator === '+'
		? num1 + num2
		: operator === '-'
		? num1 - num2
		: operator === '*'
		? num1 * num2
		: operator === '/'
		? num1 / num2
		: null;
}

module.exports = calculator;
