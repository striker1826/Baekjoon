const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let hour = input[0];
let min = input[1];

if (min - 45 < 0) {
  min = 60 + (min - 45);
  hour -= 1;
  if (hour < 0) {
    hour = 23;
  }
} else {
  min -= 45;
}

console.log(hour, min);
