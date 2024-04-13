// Import the 'readline' module to read input from the command line
const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the possible choices
const choices = ['rock', 'paper', 'scissors'];

// Define a function to generate a random choice for the computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Define a function to determine the winner of a round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
             (playerChoice === 'scissors' && computerChoice === 'paper') ||
             (playerChoice === 'paper' && computerChoice === 'rock')) {
    return 'player';
  } else {
    return 'computer';
  }
}

// Define a function to play a single round of the game
function playRound(playerChoice) {
  // Generate a random choice for the computer
  const computerChoice = getComputerChoice();

  // Determine the winner of the round
  const winner = determineWinner(playerChoice, computerChoice);

  // Print the result
  if (winner === 'tie') {
    console.log('Tie!');
  } else if (winner === 'player') {
    console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
  }

  // Return the winner
  return winner;
}

// Define a function to play the entire game
function playGame() {
  // Ask the user for their choice
  rl.question('Enter your choice (rock, paper, scissors): ', (playerChoice) => {
    // Convert the input string to lowercase
    playerChoice = playerChoice.toLowerCase();

    // Check if the user's choice is valid
    if (!choices.includes(playerChoice)) {
      console.log('Invalid choice. Please try again.');
      playGame();
      return;
    }

    // Play a single round of the game
    const winner = playRound(playerChoice);

    // Check if the player won the game
    if (winner === 'player') {
      console.log('You won the game!');
    } else if (winner === 'computer') {
      console.log('You lost the game.');
    } else {
      console.log('The game is a tie.');
    }

    // Close the interface
    rl.close();
  });
}

// Start the game
playGame();
