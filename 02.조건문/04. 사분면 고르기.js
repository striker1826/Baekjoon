const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const a = input[0];
const b = input[1];

function PickaQuadrant(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    console.log(1);
  } else if (num1 < 0 && num2 > 0) {
    console.log(2);
  } else if (num1 < 0 && num2 < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
}

PickaQuadrant(a, b);
