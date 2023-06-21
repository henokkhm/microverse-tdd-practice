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

module.exports = { stringLength, reverseString };
