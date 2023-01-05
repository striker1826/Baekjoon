let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const amount = Number(input[0]);
let answer = "";

for (let i = 1; i <= amount; i++) {
  let [num1, num2] = input[i].split(" ");
  answer += Number(num1) + Number(num2) + "\n";
}
console.log(answer);
