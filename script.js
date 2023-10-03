const calculatorContent = document.querySelector(".calculator-content");
const buttonsContainer = document.querySelector(".buttons-container");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");


let previousNumber = [];
let currentNumber = 6;
let operator = '/';
operators.forEach(operator => operator.addEventListener("click", () => {
    console.log(operator.textContent);
    operator = operator.textContent;

}));

numbers.forEach(number => number.addEventListener("click", () => {
        console.log(number.textContent);
        currentNumber += number.textContent;
        console.table(typeof(Math.floor(currentNumber)));
}));

//        console.log(operate(previousNumber, currentNumber, operator));



function operate(previousNumber, currentNumber, operator){
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

      
console.log(addition(86, 24));
console.log(subtraction(86, 24));
console.log(multiplication(86, 24));
console.log(division(86, 24));
console.log(modulo(86, 24));