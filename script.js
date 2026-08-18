let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.getElementById("display");


function calculate(value) {

    // Clear
    if (value === "C") {

        firstNumber = "";
        operator = "";
        secondNumber = "";

        display.textContent = "";

        return;
    }


    // Equal
    if (value === "=") {

        let result;

        if (operator === "+") {
            result = Number(firstNumber) + Number(secondNumber);
        }

        else if (operator === "-") {
            result = Number(firstNumber) - Number(secondNumber);
        }

        else if (operator === "*") {
            result = Number(firstNumber) * Number(secondNumber);
        }

        else if (operator === "/") {
            result = Number(firstNumber) / Number(secondNumber);
        }

        display.textContent = result;

        firstNumber = result;
        operator = "";
        secondNumber = "";

        return;
    }


    // Operator
    if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/"
    ) {

        operator = value;

        display.textContent += value;

        return;
    }


    // Number
    if (operator === "") {

        firstNumber += value;

        display.textContent += value;

    }

    else {

        secondNumber += value;

        display.textContent += value;

    }

}