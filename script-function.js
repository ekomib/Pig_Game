'use strict';

let score1 = 0;
let score2 = 0;
let ranNum;
let playerTurn = 'player1';

const player1Title = document.querySelector('#name--0');
const player2Title = document.querySelector('#name--1');

function showPlayerName() {
  const player1Name = prompt('Player 1: Enter your name ');
  const player2Name = prompt('Player2: Enter your name');
  if (player1Name) {
    player1Title.textContent = player1Name;
  }
  if (player2Name) {
    player2Title.textContent = player2Name;
  }
}

showPlayerName();

// Roll Dice function
function rollDice() {
  if (playerTurn === 'player1') {
    ranNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (ranNum !== 1) {
      score1 = score1 + ranNum;
    }
    player1Section.setAttribute(
      'style',
      'background-color: rgba(255, 255, 255, 0.4);'
    );
    player2Section.setAttribute('style', '');

    diceRoll.setAttribute('src', `dice-${ranNum}.png`);
    currentScore0.textContent = Number(score1);

    if (ranNum === 1) {
      playerTurn = 'player2';
      currentScore0.textContent = 0;
      score1 = 0;
      player1Section.setAttribute('style', '');
      player2Section.setAttribute(
        'style',
        'background-color: rgba(255, 255, 255, 0.4);'
      );
    }
  } else if (playerTurn === 'player2') {
    ranNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (ranNum !== 1) {
      score2 = score2 + ranNum;
    }
    player1Section.setAttribute('style', '');
    player2Section.setAttribute(
      'style',
      'background-color: rgba(255, 255, 255, 0.4);'
    );
    diceRoll.setAttribute('src', `dice-${ranNum}.png`);
    currentScore1.textContent = Number(score2);
    if (ranNum === 1) {
      playerTurn = 'player1';
      currentScore1.textContent = 0;
      score2 = 0;
      player1Section.setAttribute(
        'style',
        'background-color: rgba(255, 255, 255, 0.4);'
      );
      player2Section.setAttribute('style', '');
    }
  }
}

/// hold  button function
function holdScoreBtn() {
  if (playerTurn === 'player1') {
    currentScore0.textContent = 0;
    mainScore0.textContent = Number(mainScore0.textContent) + score1;
    score1 = 0;

    playerTurn = 'player2';
    player1Section.setAttribute('style', '');
    player2Section.setAttribute(
      'style',
      'background-color: rgba(255, 255, 255, 0.4);'
    );
  } else if (playerTurn === 'player2') {
    currentScore1.textContent = 0;
    mainScore1.textContent = Number(mainScore1.textContent) + score2;
    score2 = 0;
    playerTurn = 'player1';
    player1Section.setAttribute(
      'style',
      'background-color: rgba(255, 255, 255, 0.4);'
    );
    player2Section.setAttribute('style', '');
  }

  if (
    Number(mainScore0.textContent) > Number(mainScore1.textContent) &&
    Number(mainScore0.textContent) >= 50
  ) {
    player1Section.classList.add('player--winner');
    player1Section.removeAttribute('style');
    playerTurn = 'Game over';
  } else if (
    Number(mainScore1.textContent) > Number(mainScore0.textContent) &&
    Number(mainScore1.textContent) >= 50
  ) {
    playerTurn = 'Game over';
    player2Section.classList.add('player--winner');
    player2Section.removeAttribute('style');
  }
}
// New Game
function newGame() {
  score1 = 0;
  score2 = 0;
  playerTurn = 'player1';
  mainScore0.textContent = 0;
  mainScore1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  player1Section.classList.remove('player--winner');
  player2Section.classList.remove('player--winner');
  player1Section.removeAttribute('style');
  player2Section.removeAttribute('style');
  showPlayerName();
}
