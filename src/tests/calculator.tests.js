const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  describe('Modulo (modulo)', () => {
    // Test basic modulo with positive numbers (10 % 3 = 1)
    test('should return remainder with positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    // Test modulo with dividend smaller than divisor (5 % 7 = 5)
    test('should return dividend when it is smaller than divisor', () => {
      expect(modulo(5, 7)).toBe(5);
    });

    // Test modulo with even division (10 % 2 = 0)
    test('should return zero when dividend is evenly divisible', () => {
      expect(modulo(10, 2)).toBe(0);
    });

    // Test modulo with negative numbers (-10 % 3 = -1)
    test('should handle modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    // Test modulo with negative divisor (10 % -3 = 1)
    test('should handle modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    // Test modulo with both negative (-10 % -3 = -1)
    test('should handle modulo with both negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    // Test modulo with decimals (5.5 % 2 = 1.5)
    test('should handle modulo with decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    // Test that modulo by zero throws an error
    test('should throw error when divisor is zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Power (power)', () => {
    // Test basic power with positive base and exponent (2 ^ 3 = 8)
    test('should raise positive base to positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    // Test power with exponent of zero (5 ^ 0 = 1)
    test('should return 1 when exponent is zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    // Test power with exponent of one (7 ^ 1 = 7)
    test('should return base when exponent is one', () => {
      expect(power(7, 1)).toBe(7);
    });

    // Test power with negative exponent (2 ^ -2 = 0.25)
    test('should handle negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    // Test power with negative base and even exponent ((-3) ^ 2 = 9)
    test('should handle negative base with even exponent', () => {
      expect(power(-3, 2)).toBe(9);
    });

    // Test power with negative base and odd exponent ((-2) ^ 3 = -8)
    test('should handle negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    // Test power with decimal base (1.5 ^ 2 = 2.25)
    test('should handle decimal base', () => {
      expect(power(1.5, 2)).toBeCloseTo(2.25);
    });

    // Test power with decimal exponent (4 ^ 0.5 = 2)
    test('should handle decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    // Test power with large numbers (10 ^ 6 = 1000000)
    test('should handle large exponentiation', () => {
      expect(power(10, 6)).toBe(1000000);
    });
  });

  describe('Square Root (squareRoot)', () => {
    // Test square root of perfect square (√16 = 4)
    test('should calculate square root of perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    // Test square root of one (√1 = 1)
    test('should return 1 for square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    // Test square root of zero (√0 = 0)
    test('should return 0 for square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    // Test square root of non-perfect square (√2 ≈ 1.414)
    test('should calculate square root of non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    // Test square root of decimal number (√2.25 = 1.5)
    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    // Test square root of large number (√1000000 = 1000)
    test('should handle square root of large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    // Test that square root of negative number throws an error
    test('should throw error for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    // Test that square root of very small negative throws an error
    test('should throw error for any negative number', () => {
      expect(() => squareRoot(-0.001)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  describe('Advanced Operations Integration', () => {
    // Test combination of power and modulo: (2 ^ 5) % 7 = 32 % 7 = 4
    test('should handle power then modulo', () => {
      const step1 = power(2, 5);
      const result = modulo(step1, 7);
      expect(result).toBe(4);
    });

    // Test combination of sqrt and power: (√16) ^ 2 = 4 ^ 2 = 16
    test('should handle sqrt then power', () => {
      const step1 = squareRoot(16);
      const result = power(step1, 2);
      expect(result).toBe(16);
    });

    // Test modulo with results from arithmetic: (3 + 5) % 4 = 8 % 4 = 0
    test('should handle arithmetic then modulo', () => {
      const step1 = add(3, 5);
      const result = modulo(step1, 4);
      expect(result).toBe(0);
    });

    // Test all operations: 2 + √9 - 4 % 3 * 2 ^ 1 = 2 + 3 - 1 * 2 = 4 * 2 = 8
    test('should handle complex multi-operation calculation', () => {
      const sqrt9 = squareRoot(9);
      const mod = modulo(4, 3);
      const pow = power(2, 1);
      const step1 = add(2, sqrt9);
      const step2 = subtract(step1, mod);
      const result = multiply(step2, pow);
      expect(result).toBe(8);
    });
  });
});
