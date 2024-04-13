// Import the 'readline' module to read input from the command line
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to perform addition
function add(num1, num2) {
  return num1 + num2;
}

// Define a function to perform subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Define a function to perform multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Define a function to perform division
function divide(num1, num2) {
  if (num2 === 0) {
    console.log('Cannot divide by zero');
    return;
  }
  return num1 / num2;
}

// Ask the user for the operation and the two numbers
rl.question('What operation would you like to perform (add, subtract, multiply, divide)? ', (operation) => {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      // Convert the input strings to numbers
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      // Call the appropriate function based on the operation
      let result;
      switch (operation) {
        case 'add':
          result = add(num1, num2);
          break;
        case 'subtract':
          result = subtract(num1, num2);
          break;
        case 'multiply':
          result = multiply(num1, num2);
          break;
        case 'divide':
          result = divide(num1, num2);
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }

      // Print the result
      console.log(`The result is: ${result}`);

      // Close the interface
      rl.close();
    });
  });
});
