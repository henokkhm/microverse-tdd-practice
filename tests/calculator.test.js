const { calculator } = require('../index.js');

const { add, subtract, multiply, divide } = calculator;

describe('calculator', () => {
  describe('add()', () => {
    test('adds two numbers', () => {
      const sum = add(1, 1);
      expect(sum).toEqual(2);
    });
  });

  describe('subtract()', () => {
    test('subtracts two numbers', () => {
      const difference = subtract(1, 1);
      expect(difference).toEqual(0);
    });
  });

  describe('multiply()', () => {
    test('multiplies two numbers', () => {
      const product = multiply(2, 3);
      expect(product).toEqual(6);
    });
  });

  describe('divide()', () => {
    test('divides two numbers', () => {
      const quotient = divide(4, 2);
      expect(quotient).toEqual(2);
    });
    test('returns Infinity for division by zero', () => {
      const quotient = divide(4, 0);
      expect(Number.isFinite(quotient)).toBeFalsy();
    });
  });
});
