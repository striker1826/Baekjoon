const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];

function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return Math.floor(num1 / num2);
}

function remain(num1, num2) {
  return num1 % num2;
}

console.log(add(a, b));
console.log(minus(a, b));
console.log(multiply(a, b));
console.log(division(a, b));
console.log(remain(a, b));
