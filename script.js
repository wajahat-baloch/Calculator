const buttons = document.querySelectorAll(".btn");
const symbolButtons = document.querySelectorAll(".symbols");
const clearButton = document.querySelector(".symbols.clear-btn");

// Get the input field
const input = document.querySelector(".inputs");

let currentExpression = "";

// Loop through each button and add an event listener to update the current expression when clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentExpression += button.innerText;
    input.value = currentExpression;
  });
});

// Loop through each symbol button and add an event listener to set the current operation
symbolButtons.forEach((symbolButton) => {
  symbolButton.addEventListener("click", () => {
    currentExpression += symbolButton.innerText;
    input.value = currentExpression;
  });
});

// Add event listener for "=" button to perform the calculation
document.querySelector(".btn1").addEventListener("click", () => {
  // Evaluate the expression and update the input value
  try {
    const result = eval(currentExpression);
    input.value = result;
    currentExpression = result.toString(); // Set the result as the new expression
  } catch (error) {
    input.value = "Error";
    currentExpression = "";
  }
});

// Add event listener for "C" button to clear the input field
clearButton.addEventListener("click", () => {
  input.value = "";
  currentExpression = "";
});
