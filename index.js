
// identify the number buttons
const numberButtons = document.querySelectorAll(".number__buttonnumber");

const operandButtons = document.querySelectorAll(".operand__buttonoperand");

const equalsbutton = document.querySelector(".operand__results");

const clearResultsButton = document.querySelector(".top-buttons__clear");

const plusMinusButton = document.querySelector(".top-buttons__plusminus");

const percentageButton = document.querySelector(".top-buttons__percent");

const display = document.getElementsByTagName("input")[0];


// clear results

clearResultsButton.addEventListener("click" , () => {
    display.value = "";
}  );

// select numbers
let operand1 = "";
numberButtons.forEach((button) => {
    button.addEventListener("click", () => 
    
    { 
   display.value.concat(button);
    });
    
    console.log(display.value);
});
    // const buttonFive = document.getElementById("five")

    // buttonFive.addEventListener("click" , () => {
    //     display.value = buttonFive.innerHTML; });