// Importing the prompt package
const prompt = require('prompt');

// Setting up prompt
prompt.start();

// Function to generate computer's selection
function generateComputerSelection() {
    const random = Math.random();
    if (random < 0.35) {
        return 'PAPER';
    } else if (random < 0.68) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return "User Wins";
    } else {
        return "Computer Wins";
    }
}

// Getting user's selection
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    // Converting user's selection to uppercase for consistency
    const userSelection = result.userSelection.toUpperCase();
    
    // Generating computer's selection
    const computerSelection = generateComputerSelection();
    
    // Displaying both selections
    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);
    
    // Determining the winner and displaying the outcome
    console.log(determineWinner(userSelection, computerSelection));
});

// Function to handle errors
function onErr(err) {
    console.error(err);
    return 1;
}
