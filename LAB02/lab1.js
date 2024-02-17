const prompt = require('prompt');

// Function to get user input
function getUserSelection() {
    return new Promise((resolve, reject) => {
        prompt.get(['selection'], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.selection.toUpperCase());
            }
        });
    });
}

// Function to generate computer's selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'PAPER';
    } else if (randomNumber < 0.67) {
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
        return 'User Wins';
    } else {
        return 'Computer Wins';
    }
}

// Main function
async function playGame() {
    prompt.start();
    console.log('Choose ROCK, PAPER, or SCISSORS:');
    const userSelection = await getUserSelection();
    const computerSelection = generateComputerSelection();
    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);
    console.log('Outcome:', determineWinner(userSelection, computerSelection));
}

playGame();
