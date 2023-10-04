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
    if (display.textContent === null){
        display.textContent = id
    }
    else{
        display.textContent = display.textContent + id
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.id)
    })
});