let display = document.getElementById("display");
let currentInput = "";
let currentOperator="";

function appendValue(value){
    currentInput += value;
    display.textContent =currentInput;
}

function appendOperator(operator){
    if(currentInput === "" && currentInput !==".") return
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate(){
    try {
        let result = eval(currentInput);
        if(!Number.isInteger(result)){
            result = result.toFixed(2);
        }
        currentInput = result;
        display.textContent = currentInput;
        
    } catch (error) {
        display.textContent = "error";
        currentInput = "";
    }
}

function clean(){
    currentInput = "";
    display.textContent = currentInput;
}