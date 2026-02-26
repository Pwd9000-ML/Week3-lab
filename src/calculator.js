#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   add      <a> <b>  - Addition:       returns a + b
 *   subtract <a> <b>  - Subtraction:    returns a - b
 *   multiply <a> <b>  - Multiplication: returns a * b
 *   divide   <a> <b>  - Division:       returns a / b (throws on divide-by-zero)
 *
 * Usage:
 *   node calculator.js <operation> <number1> <number2>
 *
 * Examples:
 *   node calculator.js add 3 5        => 8
 *   node calculator.js subtract 10 4  => 6
 *   node calculator.js multiply 3 7   => 21
 *   node calculator.js divide 20 4    => 5
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

// CLI entry point
function main() {
  const [, , operation, arg1, arg2] = process.argv;

  const validOperations = ['add', 'subtract', 'multiply', 'divide'];

  if (!operation || !validOperations.includes(operation)) {
    console.error(`Usage: node calculator.js <operation> <number1> <number2>`);
    console.error(`Operations: ${validOperations.join(', ')}`);
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  let result;
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
  }

  console.log(`${a} ${operation} ${b} = ${result}`);
}

// Only run main if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
