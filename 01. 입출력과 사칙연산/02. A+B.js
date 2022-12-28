/*
1 2
*/
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

add(a, b);
