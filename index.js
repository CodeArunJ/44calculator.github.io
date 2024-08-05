"use strict";
// Define the calculator object
const calculator = {
    appendToDisplay(value) {
        const display = document.getElementById('display');
        if (display) {
            // Prevent consecutive operators
            if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(display.value.slice(-1))) {
                return;
            }
            display.value += value;
        }
    },
    clearDisplay() {
        const display = document.getElementById('display');
        if (display) {
            display.value = '';
        }
    },
    calculateResult() {
        const display = document.getElementById('display');
        if (display) {
            try {
                // Use Function constructor to avoid using eval
                const result = new Function('return ' + display.value)();
                display.value = result.toString();
            }
            catch (error) {
                display.value = 'Error';
            }
        }
    },
    deleteLastCharacter() {
        const display = document.getElementById('display');
        if (display && display.value.length > 0) {
            display.value = display.value.slice(0, -1);
        }
    }
};
// Event listener for keyboard inputs
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        calculator.appendToDisplay(key);
    }
    else if (['+', '-', '*', '/'].includes(key)) {
        calculator.appendToDisplay(key);
    }
    else if (key === 'Enter') {
        calculator.calculateResult();
    }
    else if (key === 'Escape') {
        calculator.clearDisplay();
    }
    else if (key === '.') {
        calculator.appendToDisplay(key);
    }
});
