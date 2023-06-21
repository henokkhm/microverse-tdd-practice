const { calculator } = require('../index.js');

const { add, subtract, multiply, divide } = calculator;

describe('calculator', () => {
  describe('add()', () => {
    test('adds 1 and 1', () => {
      const sum = add(1, 1);
      expect(sum).toEqual(2);
    });

    test('adds 1 and 0', () => {
      const sum = add(1, 0);
      expect(sum).toEqual(1);
    });

    test('adds 0 and 1', () => {
      const sum = add(0, 1);
      expect(sum).toEqual(1);
    });
  });

  describe('subtract()', () => {
    test('subtracts 1 from 1', () => {
      const difference = subtract(1, 1);
      expect(difference).toEqual(0);
    });

    test('subtracts 0 from 1', () => {
      const difference = subtract(1, 0);
      expect(difference).toEqual(1);
    });

    test('subtracts 1 from 0', () => {
      const difference = subtract(0, 1);
      expect(difference).toEqual(-1);
    });
  });

  describe('multiply()', () => {
    test('multiplies by 1', () => {
      const product = multiply(8, 1);
      expect(product).toEqual(8);
    });

    test('multiplies by 0', () => {
      const product = multiply(2, 0);
      expect(product).toEqual(0);
    });

    test('multiplies negative numbers', () => {
      const product = multiply(-2, 3);
      expect(product).toEqual(-6);
    });

    test('multiplies 2 by 3', () => {
      const product = multiply(2, 3);
      expect(product).toEqual(6);
    });
  });

  describe('divide()', () => {
    test('divides 1 by 1', () => {
      const quotient = divide(1, 1);
      expect(quotient).toEqual(1);
    });

    test('divides 0 by 1', () => {
      const quotient = divide(0, 1);
      expect(quotient).toEqual(0);
    });

    test('divides 0 by 10', () => {
      const quotient = divide(0, 10);
      expect(quotient).toEqual(0);
    });

    test('divides negative numbers', () => {
      const quotient = divide(-12, 3);
      expect(quotient).toEqual(-4);
    });

    test('returns Infinity for division by zero', () => {
      const quotient = divide(4, 0);
      expect(Number.isFinite(quotient)).toBeFalsy();
    });
  });
});
