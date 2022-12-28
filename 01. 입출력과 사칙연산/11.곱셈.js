const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = input[0];
const b = input[1];

const A = a.split("");
const B = b.split("");

console.log(a * B[2]);
console.log(a * B[1]);
console.log(a * B[0]);
console.log(a * b);
