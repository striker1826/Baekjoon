const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const interations = Number("5");
const array = ["5", "1 1", "2 3", "3 4", "9 8", "5 2"];

for (let i = 1; i <= interations; i++) {
  const [a, b] = array[i].split(" ").map(Number);
  console.log(a, b);
  console.log("--------");
}
