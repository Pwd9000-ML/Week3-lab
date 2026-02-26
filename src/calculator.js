#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports basic arithmetic operations:
 *   add      <a> <b>  - Addition:       returns a + b
 *   subtract <a> <b>  - Subtraction:    returns a - b
 *   multiply <a> <b>  - Multiplication: returns a * b
 *   divide   <a> <b>  - Division:       returns a / b (throws on divide-by-zero)
 *
 * Supports advanced math operations:
 *   modulo   <a> <b>  - Modulo:         returns a % b (remainder after division)
 *   power    <a> <b>  - Exponentiation: returns a ^ b (a raised to power b)
 *   sqrt     <n>      - Square Root:    returns √n (throws on negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <number1> [number2]
 *
 * Examples:
 *   node calculator.js add 3 5        => 8
 *   node calculator.js subtract 10 4  => 6
 *   node calculator.js multiply 3 7   => 21
 *   node calculator.js divide 20 4    => 5
 *   node calculator.js modulo 10 3    => 1
 *   node calculator.js power 2 3      => 8
 *   node calculator.js sqrt 16        => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent divide-by-zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero to prevent modulo-by-zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Power: returns the result of base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
// Throws an error if n is negative (cannot calculate square root of negative)
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// CLI entry point
function main() {
  const [, , operation, arg1, arg2] = process.argv;

  const validOperations = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power', 'sqrt'];

  if (!operation || !validOperations.includes(operation)) {
    console.error(`Usage: node calculator.js <operation> <number1> [number2]`);
    console.error(`Operations: ${validOperations.join(', ')}`);
    process.exit(1);
  }

  const a = parseFloat(arg1);

  if (isNaN(a)) {
    console.error('Error: First argument must be a valid number');
    process.exit(1);
  }

  // sqrt only requires one argument
  if (operation === 'sqrt') {
    try {
      const result = squareRoot(a);
      console.log(`sqrt(${a}) = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  // All other operations require two arguments
  const b = parseFloat(arg2);

  if (isNaN(b)) {
    console.error('Error: Second argument must be a valid number');
    process.exit(1);
  }

  let result;
  try {
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
    }
    console.log(`${a} ${operation} ${b} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Only run main if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
