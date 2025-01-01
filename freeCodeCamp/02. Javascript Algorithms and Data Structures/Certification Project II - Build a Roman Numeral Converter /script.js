const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const decimalToRomanNumeral = (input) => {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  for (let key in romanNumerals) {
    while (input >= romanNumerals[key]) {
      roman += key;
      input -= romanNumerals[key];
    }
  }
  console.log(roman);
  return roman;
};

const checkUserInput = () => {
  const userInput = numberInput.value;

  if (userInput === "") {
    result.innerText = "Please enter a number";
  } else if (isNaN(userInput)) {
    result.innerText = "Please enter a valid number";
  } else if (userInput < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (userInput > 3999) {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    result.innerText = `Roman numeral: ${decimalToRomanNumeral(userInput)}`;
  }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
