const isPositiveInteger = (n) => Number.isInteger(n) && n > 0;

const sumAll = function (a, b) {
  if (!isPositiveInteger(a) || !isPositiveInteger(b)) return 'ERROR';
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
