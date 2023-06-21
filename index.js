const stringLength = (string) => {
  const len = string.length;
  if (len >= 1 && len <= 10) {
    return len;
  }
  throw new Error(
    'String must be between one and ten characters long, inclusive.',
  );
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const capitalize = (str) => {
  return str.toUpperCase();
};

module.exports = { stringLength, reverseString, calculator, capitalize };
