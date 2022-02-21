const ROUNDS_TO_PLAY = 5;
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

// generate a random computer score
const handleComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const i = Math.floor(Math.random() * choices.length);
  return choices[i];
};

// handle score and return the winner
const handleScore = (winner) => {
  winner === 'player' ? playerScore++ : computerScore++;
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

  if (playerScore === 3) {
    return 'You won the game!';
  } else if (computerScore === 3) {
    return 'You lost the game!';
  }
};

const playRound = (playerChoice, computerChoice) => {
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    roundsPlayed++;
    handleScore('player');
    return 'You won this round!';
  } else if (playerChoice === computerChoice) {
    return 'Tied!';
  } else {
    roundsPlayed++;
    handleScore('computer');
    return 'You lost this round!';
  }
};

const handleGame = () => {
  const userChoice = prompt('Pick rock, paper or scissors');
  const computerChoice = handleComputerChoice();
  playRound(userChoice, computerChoice);
};

while (roundsPlayed < ROUNDS_TO_PLAY) {
  handleGame();
}
