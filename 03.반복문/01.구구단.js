const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = input;

for (let i = 1; i <= 9; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
