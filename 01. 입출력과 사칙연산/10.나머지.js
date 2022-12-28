const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

function calculrator(num1, num2, num3) {
  const A = (num1 + num2) % num3;
  const B = ((num1 % num3) + (num2 % num3)) % num3;
  const C = (num1 * num2) % num3;
  const D = ((num1 % num3) * (num2 % num3)) % num3;
  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
}

calculrator(a, b, c);
