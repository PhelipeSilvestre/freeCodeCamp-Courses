const character = "#";
const count = 8;
const rows = [];

/* USE OF FUNCTION WITH PARAMETHER AND ARGUMENTS

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum)
*/

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i += 1) {
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
console.log(result);
