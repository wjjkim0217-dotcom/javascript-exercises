const fibonacci = function(n) {
  if (typeof n !== 'number' || Number.isNaN(n) || n <= 0) {
    return "OOPS";
  }

  let previous = 0;
  let current = 1;
  for (let i = 1; i < n; i++) {
    [previous, current] = [current, previous + current];
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
