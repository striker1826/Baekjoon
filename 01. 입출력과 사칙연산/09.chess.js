const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const king = input[0];
const queen = input[1];
const look = input[2];
const bishop = input[3];
const knight = input[4];
const pawn = input[5];

function chessCalculator(king, queen, look, bishop, knight, pawn) {
  const chess = [1, 1, 2, 2, 2, 8];
  const input = [king, queen, look, bishop, knight, pawn];
  const result = chess.map((i, index) => {
    return i - input[index];
  });
  return console.log(...result);
}

chessCalculator(king, queen, look, bishop, knight, pawn);
