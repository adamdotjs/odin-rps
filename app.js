// game logic
const ROUNDS_TO_PLAY = 5;
let playerScore = 0;
let computerScore = 0;

// ui components
const winnerDisplay = document.querySelector('#winner-display');
const iconDisplay = document.querySelector('#icon');
const playerIconDisplay = document.querySelector('#player-icon');
const computerIconDisplay = document.querySelector('#computer-icon');

// store ui icons in an object for easier rendering
const icons = {
  tied: `<i class="fa-solid fa-face-surprise"></i>`,
  lost: `<i class="fa-solid fa-face-frown-open"></i>`,
  won: `<i class="fa-solid fa-face-smile"></i>`,
  gameWon: `<i class="fa-solid fa-face-laugh-beam"></i>`,
  gameLost: `<i class="fa-solid fa-face-sad-cry"></i>`,
  rock: `<i class="fa-solid fa-hand-back-fist"></i>`,
  paper: `<i class="fa-solid fa-hand"></i>`,
  scissors: `<i class="fa-solid fa-hand-scissors"></i>`,
};

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

  if (playerScore === ROUNDS_TO_PLAY) {
    winnerDisplay.innerText = 'You won the game!';
    iconDisplay.innerHTML = icons.gameWon;
  } else if (computerScore === ROUNDS_TO_PLAY) {
    winnerDisplay.innerText = 'You lost the game!';
    iconDisplay.innerHTML = icons.gameLost;
  }
};

const playRound = (playerChoice, computerChoice) => {
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    iconDisplay.innerHTML = icons.won;
    winnerDisplay.innerText = 'You won this round!';
    handleScore('player');
  } else if (playerChoice === computerChoice) {
    iconDisplay.innerHTML = icons.tied;
    winnerDisplay.innerText = 'Tied!';
  } else {
    iconDisplay.innerHTML = icons.lost;
    winnerDisplay.innerText = 'You lost this round!';
    handleScore('computer');
  }
};

const handleGame = (userChoice) => {
  const computerChoice = handleComputerChoice();
  playerIconDisplay.innerHTML = icons[userChoice];
  computerIconDisplay.innerHTML = icons[computerChoice];
  playRound(userChoice, computerChoice);
};

document.querySelector('#game-buttons').addEventListener('click', (e) => {
  switch (e.target.getAttribute('id')) {
    case 'rock':
      handleGame('rock');
      break;
    case 'paper':
      handleGame('paper');
      break;
    case 'scissors':
      handleGame('scissors');
      break;
  }
});
