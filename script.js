const calculatorContent = document.querySelector(".calculator-content");
const buttonsContainer = document.querySelector(".buttons-container");

const numbers = [];
const operators = ['+', '-', '*', '/', '%'];

for (let i = 9; i >= 0; i++){

    if (i == 9){
        let allclearbtn = document.createElement("div");
        allclearbtn.textContent = ("AC");
        buttonsContainer.appendChild(allclearbtn);
        allclearbtn.addEventListener("click", assignValue);

        let clearbtn = document.createElement("div");
        clearbtn.textContent = ("C");
        buttonsContainer.appendChild(clearbtn);
        clearbtn.addEventListener("click", assignValue);

        let operatorModule = document.createElement("div");
        operatorModule.textContent = ("%");
        buttonsContainer.appendChild(operatorModule);
        operatorModule.addEventListener("click", assignValue);  

        let operator = document.createElement("div");
        operator.textContent = ("/");
        buttonsContainer.appendChild(operator);
        operator.addEventListener("click", assignValue);  
    }

    let number = document.createElement("div");
    number.textContent = (i);
    numbers[i] = number;
    buttonsContainer.appendChild(number);
    number.addEventListener("click", assignValue);
}

function assignValue(){
    console.log("kay");
}