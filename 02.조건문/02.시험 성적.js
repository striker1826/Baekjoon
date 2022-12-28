const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = input;

function testGrades(score) {
  if (100 >= score && 90 <= score) {
    console.log("A");
  } else if (89 >= score && 80 <= score) {
    console.log("B");
  } else if (79 >= score && 70 <= score) {
    console.log("C");
  } else if (69 >= score && 60 <= score) {
    console.log("D");
  } else {
    console.log("F");
  }
}

testGrades(a);
