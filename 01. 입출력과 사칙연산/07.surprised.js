const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = input[0];

function surprised(id) {
  const result = id + "??!";
  return result;
}

console.log(surprised(a));
