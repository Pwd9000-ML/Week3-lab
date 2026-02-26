const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition (add)', () => {
    // Test basic addition with positive numbers (2 + 3 = 5)
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    // Test addition with two negative numbers (-5 + -3 = -8)
    test('should add two negative numbers correctly', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    // Test addition with mixed signs (10 + -4 = 6)
    test('should add positive and negative numbers correctly', () => {
      expect(add(10, -4)).toBe(6);
    });

    // Test addition with zero (5 + 0 = 5 and 0 + 0 = 0)
    test('should handle zero in addition', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    // Test addition with decimal numbers (2.5 + 3.7 ≈ 6.2)
    test('should add decimal numbers correctly', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    // Test addition with large numbers (1000000 + 2000000 = 3000000)
    test('should add large numbers correctly', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction (subtract)', () => {
    // Test basic subtraction with positive numbers (10 - 4 = 6)
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    // Test subtraction with two negative numbers (-5 - -3 = -2)
    test('should subtract two negative numbers correctly', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    // Test subtraction resulting in negative value (3 - 8 = -5)
    test('should subtract and return negative result', () => {
      expect(subtract(3, 8)).toBe(-5);
    });

    // Test subtraction with zero (5 - 0 = 5, 0 - 5 = -5, 0 - 0 = 0)
    test('should handle zero in subtraction', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    // Test subtraction with decimal numbers (10.5 - 4.3 ≈ 6.2)
    test('should subtract decimal numbers correctly', () => {
      expect(subtract(10.5, 4.3)).toBeCloseTo(6.2);
    });

    // Test subtraction with large numbers (5000000 - 3000000 = 2000000)
    test('should subtract large numbers correctly', () => {
      expect(subtract(5000000, 3000000)).toBe(2000000);
    });
  });

  describe('Multiplication (multiply)', () => {
    // Test basic multiplication with positive numbers (45 * 2 = 90)
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    // Test multiplication with positive and negative number (5 * -3 = -15)
    test('should multiply positive and negative numbers correctly', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    // Test multiplication with two negative numbers (-4 * -5 = 20)
    test('should multiply two negative numbers correctly', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    // Test multiplication with zero (5 * 0 = 0, 0 * 0 = 0)
    test('should handle zero in multiplication', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    // Test multiplication by one (42 * 1 = 42)
    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    // Test multiplication with decimal numbers (2.5 * 4 = 10)
    test('should multiply decimal numbers correctly', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    // Test multiplication with large numbers (1000 * 1000 = 1000000)
    test('should multiply large numbers correctly', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  describe('Division (divide)', () => {
    // Test basic division with positive numbers (20 / 5 = 4)
    test('should divide two positive numbers correctly', () => {
      expect(divide(20, 5)).toBe(4);
    });

    // Test division with positive and negative number (15 / -3 = -5)
    test('should divide positive and negative numbers correctly', () => {
      expect(divide(15, -3)).toBe(-5);
    });

    // Test division with two negative numbers (-20 / -4 = 5)
    test('should divide two negative numbers correctly', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    // Test division resulting in decimal value (7 / 2 = 3.5)
    test('should divide and return decimal result', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    // Test division by one (42 / 1 = 42)
    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    // Test division with decimal numbers (10.5 / 3.5 ≈ 3)
    test('should divide decimal numbers correctly', () => {
      expect(divide(10.5, 3.5)).toBeCloseTo(3);
    });

    // Test division with large numbers (1000000 / 1000 = 1000)
    test('should divide large numbers correctly', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });

    // Test that dividing by zero throws an error
    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    // Test that dividing negative number by zero throws an error
    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
    });

    // Test that dividing zero by zero throws an error
    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Edge Cases and Integration', () => {
    // Test chained operations: (2 + 3) * 5 - 10 / 2 = 5 * 5 - 5 = 20
    test('should handle chained operations: (2 + 3) * 5 - 10 / 2', () => {
      const step1 = add(2, 3);
      const step2 = multiply(step1, 5);
      const step3 = divide(10, 2);
      const result = subtract(step2, step3);
      expect(result).toBe(20);
    });

    // Test addition with very small decimal numbers (0.0001 + 0.0002 ≈ 0.0003)
    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    // Test addition with very large numbers (999999999 + 1 = 1000000000)
    test('should handle very large numbers', () => {
      expect(add(999999999, 1)).toBe(1000000000);
    });
  });
});
