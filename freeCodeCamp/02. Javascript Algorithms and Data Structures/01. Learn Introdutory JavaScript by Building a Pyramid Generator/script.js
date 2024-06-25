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

function padRow() {
  return "Hello!";
}
const call = padRow();
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
