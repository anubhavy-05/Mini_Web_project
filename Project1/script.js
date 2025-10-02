// Get the display element from the HTML
const display = document.getElementById('display');

/**
 * Appends the given value to the display.
 * @param {string} value - The number or operator to add.
 */
function appendToDisplay(value) {
    display.value += value;
}

/**
 * Clears the display, resetting it to empty.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Calculates the expression in the display.
 * Uses a try-catch block to handle errors like division by zero.
 */
function calculateResult() {
    try {
        // eval() computes the string, but can be a security risk in complex apps.
        // For a simple calculator like this, it's acceptable.
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        // If there's an error in the calculation, display "Error"
        display.value = 'Error';
    }
}