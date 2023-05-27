'use strict';
 
/// Variables needed
const btn1 = document.querySelector('.btnOne');
const btn2 = document.querySelector('.btnTwo');
const btn3 = document.querySelector('.btnThree');
const coin1 = document.getElementById('coinOne');
const coin2 = document.getElementById('coinTwo');
const coin3 = document.getElementById('coinThree');
const allBtns = document.querySelector('.cards');
const reset = document.getElementById('reset');
const str = document.getElementById('head');
const cards = document.querySelector('cards');
const highScore = document.getElementById('highScore');
const currentScore = document.getElementById('currentScore');
let score = 0;
let highScoreValue = 0;
/// Random number that chooses coin placement
let test = Math.floor(Math.random() * 3) + 1;

/// Makes the coin appear based on the random number at the beginning/ after reset. Called with eventlistener.
const coinAppear = function () {
  console.log(test, 'test');
  if (test === 1) {
    console.log('works');
    coin1.style.opacity = 1;
    reset.style.opacity = 1;
  } else if (test === 2) {
    coin2.style.opacity = 1;
    reset.style.opacity = 1;
  } else if (test === 3) {
    coin3.style.opacity = 1;
    reset.style.opacity = 1;
  }
};

//// When you choose the right coin, score updated, success message, highscore updated, takes in 'btn' so that it does not show that particular's button's number through the coin when they win. Looks bad. 'Test' variable turns to 0 to prevent clicking the coin after winning to get more points
const success = function (btn) {
  str.textContent = 'Good job!';
  score++;
  btn.textContent = '';
  currentScore.textContent = `Current Score = ${score}`;
  test = 0;
  if (score > highScoreValue) {
    highScoreValue = score;
    highScore.textContent = `Highscore = ${highScoreValue}`;
    highScore.style.background = 'yellow';
  }
};

//// When you choose the wrong btn, score update, failure message, highscore update
const failure = function () {
  str.textContent = 'Better luck next time!';
  highScore.style.background = 'white';
  if (score >= highScoreValue) {
    highScoreValue = score;
    highScore.textContent = `Highscore = ${highScoreValue}`;
    score = 0;
    currentScore.textContent = `Current Score = ${score}`;
  } else {
    score = 0;
    currentScore.textContent = `Current Score = ${score}`;
  }
};

//// CODE THAT PRINTS WINNER! 'Test' is random number picked. coinAppear() is called to make the coin appear. Opacity is changed to hide the buttons and lighten your choice.
btn1.addEventListener('click', function () {
  ///First part turns your option light grey
  btn1.style.opacity = 0.1;
  btn2.classList.add('hidden');
  btn3.classList.add('hidden');
  if (test === 0) {
    return;
  } else {
    coinAppear();
    test === 1 ? success(btn1) : failure();
  }
});

btn2.addEventListener('click', function () {
  btn2.style.opacity = 0.1;
  btn1.classList.add('hidden');
  btn3.classList.add('hidden');
  if (test === 0) {
    return;
  } else {
    coinAppear();
    test === 2 ? success(btn2) : failure();
  }
});

btn3.addEventListener('click', function () {
  btn3.style.opacity = 0.1;
  btn1.classList.add('hidden');
  btn2.classList.add('hidden');
  if (test === 0) {
    return;
  } else {
    coinAppear();
    test === 3 ? success(btn3) : failure();
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
  btn1.textContent = '1';
  btn2.textContent = '2';
  btn3.textContent = '3';
  reset.style.opacity = 0;
  head.textContent = "It's all luck!";
  test = Math.floor(Math.random() * 3) + 1;
});
