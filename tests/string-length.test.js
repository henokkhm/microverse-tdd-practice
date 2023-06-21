const { stringLength } = require('../index.js');

describe('stringLength function', () => {
  test('throws error for an empty string', () => {
    // Arrange
    const emptyString = '';

    // Act
    // Assert
    expect(() => {
      stringLength(emptyString);
    }).toThrow(
      /^String must be between one and ten characters long, inclusive.$/,
    );
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

  test('throws error for a string of length eleven', () => {
    // Arrange
    const string = 'abcdefghijk';

    // Act
    // Assert
    expect(() => {
      stringLength(string);
    }).toThrow(
      /^String must be between one and ten characters long, inclusive.$/,
    );
  });
});
