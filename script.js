function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operate(a, operator, b){
    if (operator == '+'){
        return add(a,b)
    }

    else if (operator == '-'){
        return subtract(a,b)
    }

    else if (operator == '*'){
        return multiply(a,b)
    }

    else if (operator == '/'){
        return divide(a,b)
    }
}

function updateDisplay(id){

    const display = document.querySelector('.display')
    var pattern = /(-?\d+)([+\-*\/])(-?\d+)/;
    var matches = display.textContent.match(pattern);

    if (id == '=' || (matches && (id == '+' || id == '-' || id == '*'|| id =='/'))){
        var num1 = parseFloat(matches[1]); // Convert the first number to a floating-point number
        var operator = matches[2]; // Operator as a string
        var num2 = parseFloat(matches[3]); // Convert the second number to a floating-point number
        
        if (id == '='){
            display.textContent = operate(num1, operator, num2)
        }
        else{
            display.textContent = operate(num1, operator, num2) + id
        }
    }

    else{
        if (display.textContent == null){
            display.textContent = id
        }
        else{
            display.textContent = display.textContent + id
        }
    }
    
    if (id =='C'){
        display.textContent = ''
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.id)
    })
});