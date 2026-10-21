const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, n) => total + n, 0);
};

const multiply = function(array) {
	return array.reduce((product, n) => product * n, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
