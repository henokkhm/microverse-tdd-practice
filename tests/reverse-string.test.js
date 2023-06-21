const { reverseString } = require('../index.js');

describe('reverseString', () => {
  describe('returns reversed string for different inputs', () => {
    // Arrange
    const testCases = [
      // [input string, reversed string]
      ['', ''],
      ['a', 'a'],
      ['ab', 'ba'],
      ['abc', 'cba'],
      ['abcd', 'dcba'],
    ];

    // Act
    // Assert
    test.each(testCases)('reverse (%s) should equal %s', (input, expected) => {
      expect(reverseString(input)).toEqual(expected);
    });
  });
});
