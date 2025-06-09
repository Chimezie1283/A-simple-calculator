// Simple Calculator with History
// This script implements a basic calculator with a history feature.
// It allows users to perform calculations, view their history, and supports keyboard input.

const display = document.getElementById("display"); // The input field for the calculator

// The history section where previous calculations are displayed
const history = document.getElementById("history"); // The history container
let currentInput = ""; // The current input string for the calculator

// Function to handle button presses
function press(value) {
  currentInput += value; // Append the pressed value to the current input
  updateDisplay(); // Update the display with the current input
}

// Function to update the display with the current input
function updateDisplay() {
  display.value = currentInput; // Set the display value to the current input
}

// Function to handle backspace operation
function backspace() {
  currentInput = currentInput.slice(0, -1); // Remove the last character from the current input
  updateDisplay(); // Update the display after backspace
}

// Function to clear the display and reset the current input
function clearDisplay() {
  currentInput = ""; // Reset the current input to an empty string
  updateDisplay(); // Update the display to reflect the cleared input
}

// Function to calculate the result of the current input
function calculate() {
  try {
    const input = document.getElementById("display").value.replace(/\^/g, "**"); // Replace ^ with ** for exponentiation
    const result = eval(input); // Use eval to calculate the result of the input
    const expression = currentInput + " = " + result; // Create a string for the history entry
    addToHistory(expression); // Add the expression to the history
    currentInput = result.toString(); // Update the current input to the result
    updateDisplay(); // Update the display with the result
  } catch {
    display.value = "Error"; // Display an error message if evaluation fails
    currentInput = ""; // Reset the current input on error
  }
}

// Function to add a calculation to the history
function addToHistory(text) {
  const p = document.createElement("p"); // Create a new paragraph element for the history entry
  p.textContent = text; // Set the text content of the paragraph to the history entry
  history.prepend(p); // Add the new history entry to the top of the history section
}

// This section allows users to use the keyboard for input
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.^".includes(e.key)) {
    press(e.key); // Call the press function with the key value
  } else if (e.key === "Enter") {
    calculate(); // Call the calculate function when Enter is pressed
  } else if (e.key === "Backspace") {
    backspace(); // Call the backspace function when Backspace is pressed
  } else if (e.key === "Delete") {
    clearDisplay(); // Call the clearDisplay function when Delete is pressed
  }
});
