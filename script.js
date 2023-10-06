const previousOperationDisplay = document.querySelector(".previous-operation-display");
const currentOperationDisplay = document.querySelector(".current-operation-display");

const numbers = document.querySelectorAll(".numbers");
const operatorsButton = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".equal");
const allClearButton = document.querySelector(".all-clear");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");


let previousNumber, currentNumber = '', operator, newOperator;

// Event Listeners
equalButton.addEventListener("click", () =>{
  populateDisplay(previousNumber);
  console.log(operator);
  let answer = operate(Math.floor(previousNumber), Math.floor(currentNumber));
  console.log(answer);
  populatePreviousDisplay();
  populateDisplay(answer);
  AllClearFunction()
})

decimalButton.addEventListener("click", () =>{
  if (currentNumber.includes(decimalButton.textContent)){
    console.log('no decimal');
  }else{
    currentNumber += decimalButton.textContent;
    populateDisplay(currentNumber);
  }
})


operatorsButton.forEach(operatorButton => operatorButton.addEventListener("click", () => {
    console.log(operatorButton.textContent);
    newOperator = operatorButton.textContent;
    if (previousNumber == null){
      previousNumber = currentNumber;  //doe
      currentNumber = null;
    }
    if (currentNumber != null){
      let answer = operate(Math.floor(previousNumber), Math.floor(currentNumber));
      console.log(answer);
      previousNumber = answer;
      currentNumber = null;
      operator = operatorButton.textContent;
      populatePreviousDisplay();
      populateDisplay(answer);
    }else if(operator != null){
      operator = operatorButton.textContent;
      populatePreviousDisplay();
    }else{
      operator = operatorButton.textContent;
      populatePreviousDisplay();
    }
     // add if else
}));

numbers.forEach(number => number.addEventListener("click", () => {
  console.log(currentNumber + " before");
        if (currentNumber == null){
          currentNumber = number.textContent;
        }else{
          currentNumber += number.textContent;
        }
        populateDisplay(currentNumber);
}));

clearButton.addEventListener("click", () => {
  console.log("clra");
  currentNumber = clearFunction();
});

allClearButton.addEventListener("click", () => {
  AllClearFunction();
  console.log(currentNumber + "AC");
  populatePreviousDisplay();
  populateDisplay("0");
});


// Display

function populateDisplay(value){
  currentOperationDisplay.textContent = value;
}

function populatePreviousDisplay(){
  if (currentNumber == null){
    previousOperationDisplay.textContent = `${previousNumber} ${operator}`;
  }else{
    previousOperationDisplay.textContent = `${previousNumber} ${operator} ${currentNumber} =`;
  }
}

// OPERATIONS
function operate(previousNumber, currentNumber){
    let answer = 0;
    console.log(typeof(currentNumber));
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
    return answer;
}

// Clear  // improve

function AllClearFunction(){ // error with variables
  previousNumber = "";
  if (previousNumber == ""){
    console.log("null is true");
  }else{
    console.log("null is false");
  }
  currentNumber;
  operator;
}

function clearFunction(){
  console.log(currentNumber);
  currentNumber = currentNumber.slice(0, -1);
  console.log(currentNumber);
  populateDisplay(currentNumber);
  return currentNumber;
  }