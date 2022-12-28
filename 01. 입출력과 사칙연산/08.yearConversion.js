const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];

function yearConversion(year) {
  const result = year - 543;
  return result;
}

console.log(yearConversion(a));
