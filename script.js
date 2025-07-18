let expression = "";

function appendValue(value) {
    expression += value;
    updateDisplay();
}

function updateDisplay() {
    // Tampilkan 'x' di layar, tapi simpan '*' di ekspresi
    const displayValue = expression.replace(/\*/g, 'x');
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}

function clearDisplay() {
    expression = "";
    updateDisplay();
}


