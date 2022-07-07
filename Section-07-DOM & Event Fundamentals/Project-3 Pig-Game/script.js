"use strict";

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Conditions

const startingConditions = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
};

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

startingConditions();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // - Add current score to active players score
    score[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // - Check if the player's score is >= 100

    if (score[activePlayer] >= 100) {
      // - Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

//

btnNew.addEventListener("click", function () {
  startingConditions();
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  currentScore = 0;
  score[activePlayer] = 0;
  playing = true;
});
