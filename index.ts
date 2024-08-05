// Define the calculator object
const calculator = {
    appendToDisplay(value: string): void {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            // Prevent consecutive operators
            if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(display.value.slice(-1))) {
                return;
            }
            display.value += value;
        }
    },

    clearDisplay(): void {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value = '';
        }
    },

    calculateResult(): void {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            try {
                // Use Function constructor to avoid using eval
                const result = new Function('return ' + display.value)();
                display.value = result.toString();
            } catch (error) {
                display.value = 'Error';
            }
        }
    },

    deleteLastCharacter(): void {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display && display.value.length > 0) {
            display.value = display.value.slice(0, -1);
        }
    }
};

// Event listener for keyboard inputs
document.addEventListener('keydown', (event: KeyboardEvent) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        calculator.appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        calculator.appendToDisplay(key);
    } else if (key === 'Enter') {
        calculator.calculateResult();
    } else if (key === 'Escape') {
        calculator.clearDisplay();
    } else if (key === '.') {
        calculator.appendToDisplay(key);
    }
});
