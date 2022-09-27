
// identify the number buttons
const numberButtons = document.querySelectorAll(".number__buttonnumber");

const operandButtons = document.querySelectorAll(".operand__buttonoperand");
const multiply = document.getElementsByClassName("operand__multiply")[0];
const divide = document.getElementsByClassName("operand__divide")[0];
const minus = document.getElementsByClassName("operand__minus")[0];
const plus = document.getElementsByClassName("operand__plus")[0];
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
// while and then if > as long as numbers being clicked ok but if click operand button store numbers
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let number1 = display.value += button.innerHTML;

        if (button.innerHTML == "&#43;" || button.innerHTML == "&#8722;" || button.innerHTML == "&#215;" || button.innerHTML == "&#247;"){
            number1 = display.value;
        };

        
   
    });
  
});

// multiply.addEventListener("click", () => {

    // display.value = "*";

// });
    // const buttonFive = document.getElementById("five")

    // buttonFive.addEventListener("click" , () => {
    //     display.value = buttonFive.innerHTML; });