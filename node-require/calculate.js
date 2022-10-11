const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstNumber = Number(process.argv[2]);
const operator = process.argv[3];
const secondNumber = Number(process.argv[4]);
let result = null;
if (operator === 'plus') {
  result = add(firstNumber, secondNumber);
} else if (operator === 'minus') {
  result = subtract(firstNumber, secondNumber);
} else if (operator === 'times') {
  result = multiply(firstNumber, secondNumber);
} else if (operator === 'over') {
  result = divide(firstNumber, secondNumber);
}

console.log(result);
