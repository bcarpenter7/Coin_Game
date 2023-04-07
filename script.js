'use strict';

/// Variables needed
const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const coin1 = document.getElementById('coinOne');
const coin2 = document.getElementById('coinTwo');
const coin3 = document.getElementById('coinThree');
const allBtns = document.querySelector('.cards');
const reset = document.getElementById('reset');
const str = document.getElementById('head');
const cards = document.querySelector('cards');
const highScore = document.getElementById('high');
const currentScore = document.getElementById('current');
let score = 0;
let highScoreValue = 0;

/// Making the option you choose light grey and the other options darker grey AND hiding the other buttons
btn1.addEventListener('click', function () {
  btn1.style.opacity = 0.1;
  btn2.style.opacity = 0.5;
  btn3.style.opacity = 0.5;
  btn2.classList.add('hidden');
  btn3.classList.add('hidden');
});

btn2.addEventListener('click', function () {
  btn1.style.opacity = 0.5;
  btn2.style.opacity = 0.1;
  btn3.style.opacity = 0.5;
  btn1.classList.add('hidden');
  btn3.classList.add('hidden');
});

btn3.addEventListener('click', function () {
  btn1.style.opacity = 0.5;
  btn2.style.opacity = 0.5;
  btn3.style.opacity = 0.1;
  btn1.classList.add('hidden');
  btn2.classList.add('hidden');
});
/// Random number that chooses coin placement
let test = Math.floor(Math.random() * 3) + 1;

/// Making the coin show up where "test" is
allBtns.addEventListener('click', function () {
  if (test === 1) {
    coin1.style.opacity = 1;
    reset.style.opacity = 1;
  } else if (test === 2) {
    coin2.style.opacity = 1;
    reset.style.opacity = 1;
  } else if (test === 3) {
    coin3.style.opacity = 1;
    reset.style.opacity = 1;
  }
});

//// CODE THAT PRINTS WINNER!
btn1.addEventListener('click', function () {
  if (test === 1) {
    str.textContent = 'Good job!';
    score++;
    currentScore.textContent = `Current Score = ${score}`;
    console.log(score);
    if (score > highScoreValue) {
      highScoreValue = score;
      highScore.textContent = `Highscore = ${highScoreValue}`;
    }
  } else {
    str.textContent = 'Better luck next time!';
    if (score >= highScoreValue) {
      highScoreValue = score;
      highScore.textContent = `Highscore = ${highScoreValue}`;
      score = 0;
      currentScore.textContent = `Current Score = ${score}`;
    } else {
      score = 0;
      currentScore.textContent = `Current Score = ${score}`;
    }
  }
});

btn2.addEventListener('click', function () {
  if (test === 2) {
    str.textContent = 'Wow , you are great!';
    score++;
    currentScore.textContent = `Current Score = ${score}`;
    console.log(score);
    if (score > highScoreValue) {
      highScoreValue = score;
      highScore.textContent = `Highscore = ${highScoreValue}`;
    }
  } else {
    str.textContent = 'Better luck next time!';
    if (score >= highScoreValue) {
      highScoreValue = score;
      highScore.textContent = `Highscore = ${highScoreValue}`;
      score = 0;
      currentScore.textContent = `Current Score = ${score}`;
    } else {
      score = 0;
      currentScore.textContent = `Current Score = ${score}`;
    }
  }
});

btn3.addEventListener('click', function () {
  if (test === 3) {
    str.textContent = 'Sarah is the best!';
    score++;
    currentScore.textContent = `Current Score = ${score}`;
    console.log(score);
    if (score >= highScoreValue) {
      highScoreValue = score;
      highScore.textContent = `Highscore = ${highScoreValue}`;
    }
  } else {
    str.textContent = 'Better luck next time!';
    if (score > highScoreValue) {
      highScoreValue = score;
      highScore.textContent = `Highscore = ${highScoreValue}`;
      score = 0;
      currentScore.textContent = `Current Score = ${score}`;
    } else {
      score = 0;
      currentScore.textContent = `Current Score = ${score}`;
    }
  }
});

///Resetting the game
reset.addEventListener('click', function () {
  coin1.style.opacity = 0;
  coin2.style.opacity = 0;
  coin3.style.opacity = 0;
  btn1.style.opacity = 1;
  btn2.style.opacity = 1;
  btn3.style.opacity = 1;
  btn1.classList.remove('hidden');
  btn2.classList.remove('hidden');
  btn3.classList.remove('hidden');
  reset.style.opacity = 0;
  head.textContent = "It's all luck!";
  test = Math.floor(Math.random() * 3) + 1;
});

/// Highscore

// currentScore.textContent = `Current Score = ${score}`;
