const display = (value) => {
    document.getElementById('textarea').value += value;
}

const calculate = () => {
    let value = document.getElementById('textarea').value;
    let calculation = eval(value)
    document.getElementById('textarea').value = calculation
}

const clr = () => {
    document.getElementById('textarea').value = ''
}

// Project-02-Web-Calculator
// Simple Web Calculator. Beginner level project using html css and js.
// basic-calculator-aryesh