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

let reward = 0;

if (a === b && b === c) reward += 10000 + a * 1000;

if (a !== b || b !== c) {
  if (a === b || a === c) reward += 1000 + a * 100;
  if (b === c) reward += 1000 + b * 100;
}

if (a !== b && b !== c && a !== c) {
  const sort = [a, b, c].sort();
  reward += sort.pop() * 100;
}

console.log(reward);
