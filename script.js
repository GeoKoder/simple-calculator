const display = document.getElementById('result');

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value; 
}

// Function to clear the display
function clearDisplay() {
    display.value = ''; 
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    let expression = display.value;
    
    // Replaces the square root symbol with the Math.sqrt function
    if (expression.includes('√')){
        expression = expression.replace(/√/g, 'Math.sqrt(') + ')';
    }
    
    // Replaces the percentage symbol with the division by 100 function
    if (expression.includes('%')){
        expression = expression.replace(/%/g, '/100');
    }

    // Checks for errors and evaluates the expression
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error"; 
    }
}


document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Handle number keys
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    // Handle operator keys
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    // Handle percentage key
    else if (key === '%') {
        appendToDisplay('%');
    }
    // Handle square root key (you can assign a key like 's' for square root)
    else if (key.toLowerCase() === 's') {
        appendToDisplay('√');
    }
    // Handle the Enter key to calculate
    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    // Handle the Backspace key to clear the last character
    else if (key === 'Backspace') {
        deleteLastCharacter();
    }
    //Handle the delete key to clear the display
    else if (key === 'Delete') {
        clearDisplay();
    }
    // Prevent the default action for the keys we are handling
    event.preventDefault();
});