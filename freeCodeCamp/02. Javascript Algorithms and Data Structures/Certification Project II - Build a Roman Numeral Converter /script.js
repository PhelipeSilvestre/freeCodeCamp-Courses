const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");


const decimalToRomanNumeral = (input) => {
    if (input <= 0) {
      return "Numero invalido aqui";
    } else {
      return "Numero será convertido aqui";
    }
  };

  const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
  
    if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
      alert("Please provide a decimal number greater than or equal to 0");
      return;
    }
  
     
    result.textContent = decimalToRomanNumeral(inputInt);
    numberInput.value = "";
  };
  

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});