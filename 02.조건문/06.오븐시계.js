const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const current = input[0].split(" ").map(Number);

const hour = current[0];
const min = current[1];
const time = Number(input[1]);

let cookEndTimeHour = parseInt((hour * 60 + min + time) / 60);
const cookEndTimeMin = parseInt((hour * 60 + min + time) % 60);

if (cookEndTimeHour >= 24) {
  cookEndTimeHour -= 24;
}

console.log(cookEndTimeHour, cookEndTimeMin);
