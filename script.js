const calculatorContent = document.querySelector(".calculator-content");
const buttonsContainer = document.querySelector(".buttons-container");
const numbers = document.querySelectorAll(".numbers");
const operatorsButton = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
const previousOperationDisplay = document.querySelector(".previous-operation-display");
const currentOperationDisplay = document.querySelector(".current-operation-display");


let previousNumber = [];
let currentNumber = [];
let operator = '';

equal.addEventListener("click", () =>{
  populateDisplay(previousNumber);
  console.log(operator);
  let answer = operate(Math.floor(previousNumber), Math.floor(currentNumber), operator);
  console.log(answer);
  populatePreviousDisplay(previousNumber, operator, currentNumber);
  populateDisplay(answer);
  previousNumber = [];
  currentNumber = [];
  operator = '';
})

operatorsButton.forEach(operatorButton => operatorButton.addEventListener("click", () => {
    console.log(operatorButton.textContent);
    operator = operatorButton.textContent;
    previousNumber = currentNumber;
    currentNumber = [];
    populatePreviousDisplay(previousNumber, operator);
}));

numbers.forEach(number => number.addEventListener("click", () => {
        console.log(number.textContent);
        currentNumber += number.textContent;
        console.table(currentNumber);
        populateDisplay(currentNumber);
}));

//        console.log(operate(previousNumber, currentNumber, operator));

// Display

function populateDisplay(value){
  currentOperationDisplay.textContent = value;
}

function populatePreviousDisplay(value, operator, value2){
  if (value2 == null){
    previousOperationDisplay.textContent = `${value} ${operator}`;
  }else{
    previousOperationDisplay.textContent = `${value} ${operator} ${value2} =`;
  }
}






function operate(previousNumber, currentNumber, operator){
    let answer = 0;
    switch(operator){
        case '+':
            answer = addition(previousNumber, currentNumber);
            break;
        case '-':
            answer = subtraction(previousNumber, currentNumber);
            break;
        case '×':
            answer = multiplication(previousNumber, currentNumber);
            break;
        case '÷':
            answer = division(previousNumber, currentNumber);
            break;
        case '%':
            answer = modulo(previousNumber, currentNumber);
            break;
    }
    return answer;
}

// addition
function addition(previousNumber, currentNumber){
  let answer = previousNumber + currentNumber;
  console.log(answer);
  return answer;
}

// subtraction
function subtraction(previousNumber, currentNumber){
  let answer = previousNumber - currentNumber;
  return answer;
}

// multiplication
function multiplication(previousNumber, currentNumber){
  let answer = previousNumber * currentNumber;
  return answer;
}

// division
function division(previousNumber, currentNumber){
  let answer = previousNumber / currentNumber;
  return answer;
}

//  modulo
function modulo(previousNumber, currentNumber){
    let answer = previousNumber % currentNumber;
    return answer;
  }

