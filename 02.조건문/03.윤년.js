const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = input;

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

leapYear(a);
