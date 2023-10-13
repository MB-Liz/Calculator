const previousOperationDisplay = document.querySelector(".previous-operation-display");
const currentOperationDisplay = document.querySelector(".current-operation-display");

const numbers = document.querySelectorAll(".numbers");
const operatorsButton = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".equal");
const allClearButton = document.querySelector(".all-clear");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");


let previousNumber = '', currentNumber = '', operator = '', newOperator = '', answer = 0;

// Event Listeners
equalButton.addEventListener("click", () =>{
  populateDisplay(previousNumber);
  answer = operate(parseFloat(previousNumber, 10), parseFloat(currentNumber, 10));
  populatePreviousDisplay();
  populateDisplay(answer);
  AllClearFunction();
  previousNumber = answer;
})

decimalButton.addEventListener("click", () =>{
  if (currentNumber.includes(decimalButton.textContent)){
    console.log("number can't have 2 decimals");
  }else if(currentNumber == ''){
    currentNumber += "0";
    currentNumber += ".";
    populateDisplay(currentNumber);
    }else{
    currentNumber += ".";
    populateDisplay(currentNumber);
  }
})

operatorsButton.forEach(operatorButton => operatorButton.addEventListener("click", () => {
    newOperator = operatorButton.textContent;
    if (previousNumber == '' || (previousNumber == answer && currentNumber != '')){
      previousNumber = currentNumber; 
      currentNumber = '';
    }
    if (currentNumber != ''){
      answer = operate(parseFloat(previousNumber, 10), parseFloat(currentNumber, 10));
      previousNumber = answer;
      currentNumber = '';
      operator = operatorButton.textContent;
      populatePreviousDisplay();
      populateDisplay(answer);
    }else if(operator != ''){
      operator = operatorButton.textContent;
      populatePreviousDisplay();
    }else{
      operator = operatorButton.textContent;
      populatePreviousDisplay();
    }
     // add if else
}));

numbers.forEach(number => number.addEventListener("click", () => {
          currentNumber += number.textContent;
        populateDisplay(currentNumber);
}));

clearButton.addEventListener("click", () => {
  currentNumber = clearFunction();
});

allClearButton.addEventListener("click", () => {
  AllClearFunction();
  populatePreviousDisplay();
  populateDisplay("0");
});


// Display

function populateDisplay(value){
  currentOperationDisplay.textContent = value;
}

function populatePreviousDisplay(){
  if (currentNumber == ''){
    previousOperationDisplay.textContent = `${previousNumber} ${operator}`;
  }else{
    previousOperationDisplay.textContent = `${previousNumber} ${operator} ${currentNumber} =`;
  }
}


// OPERATIONS
function operate(previousNumber, currentNumber){
    answer = 0;
    switch(operator){
        case '+':
            answer = previousNumber + currentNumber;
            break;
        case '-':
            answer = previousNumber - currentNumber;
            break;
        case '×':
            answer = previousNumber * currentNumber;
            break;
        case '÷':
            answer = previousNumber / currentNumber;
            break;
        case '%':
            answer = previousNumber % currentNumber;
            break;
    }
    answer = parseFloat(answer.toFixed(3));
    console.log(`${previousNumber} ${operator} ${currentNumber} = = ${answer} == rounded = ${parseFloat(answer.toFixed(3))}`);
    return answer;
}


// Clearing functions
function AllClearFunction(){ 
  previousNumber ='';
  currentNumber ='';
  operator = '';
}

function clearFunction(){
  currentNumber = currentNumber.slice(0, -1);
  populateDisplay(currentNumber);
  return currentNumber;
  }

