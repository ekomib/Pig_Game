'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.dice');
const holdScore = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const mainScore0 = document.querySelector('#score--0');
const mainScore1 = document.querySelector('#score--1');

const player1Section = document.querySelector('.player--0');
const player2Section = document.querySelector('.player--1');

// Roll Dice Button
btnRoll.addEventListener('click', function (e) {
  e.preventDefault();
  rollDice();
});

/// hold  button
holdScore.addEventListener('click', function (e) {
  e.preventDefault();
  holdScoreBtn();
});
// New Game button
btnNew.addEventListener('click', function (e) {
  e.preventDefault();
  newGame();
});
