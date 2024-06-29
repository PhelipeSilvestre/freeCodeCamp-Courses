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

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

// Use of If - Else structure
/*if ("") {
  console.log("Condition is true");
} else if ( 5 < 10 ) {
  console.log(" 5 is lower then 10");
} else {
  console.log("None declaration is true");
}*/

// Use of While loop
/*
let continueLoop = false;
let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
  if (done === count) {
    continueLoop = false;
  } 
}
*/

// Other use of while in lower lines
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

for (let i = count; false; false) {

}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
