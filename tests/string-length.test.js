const { stringLength } = require('../index.js');

describe('stringLength function', () => {
  test('returns the correct length for an empty string', () => {
    // Arrange
    const emptyString = '';

    // Act
    const length = stringLength(emptyString);

    // Assert
    expect(length).toEqual(0);
  });

  test('returns the correct length for a string of length one', () => {
    // Arrange
    const string = 'a';

    // Act
    const length = stringLength(string);

    // Assert
    expect(length).toEqual(1);
  });

   test('returns the correct length for a string of length five', () => {
    // Arrange
    const string = 'abcde';

    // Act
    const length = stringLength(string);

    // Assert
    expect(length).toEqual(5);
  });

   test('returns the correct length for a string of length eleven', () => {
    // Arrange
    const string = 'abcdefghijk';

    // Act
    const length = stringLength(string);

    // Assert
    expect(length).toEqual(11);
  });
});
