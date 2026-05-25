let randomNumber = parseInt(Math.random() * 100 );
let userInput = document.querySelector("#guessField") 
const subt = document.querySelector("#subt") 
const form = document.querySelector(".form")
// console.log(form)

const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const p = document.createElement('p');


let numGuess = 1
let preGuess = []

let playGame = true;

if(playGame)
{
  subt.addEventListener("click", function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess)
{
   //
   if(isNaN(guess) || guess > 100 || guess < 0)
   {
      alert("enter a valid number")
   } else {
     preGuess.push(guess);
     if(numGuess === 10){
       displayGuess(guess)
       displayMessage(`Game Over, Random number was ${randomNumber}`)
       endGame()
     } else{
       displayGuess(guess)
       checkGuess(guess)
     }
   }
}

function checkGuess(guess){
  //
  if(guess === randomNumber)
  {
    displayMessage(`you passed it right`)
    endGame();
  } else if( guess > randomNumber)
  {
    displayMessage(`Number is too high`)
  } else if( guess < randomNumber)
  {
    displayMessage(`Number is too low`)
  }
}


function displayGuess( message){
  //
  userInput.value = ""
  guessSlot.innerHTML += `${message}, `
  numGuess++
  remaining.innerHTML = `${ 11 - numGuess}`
}

function displayMessage( message){
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput = "";
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
     newGame();
    
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}




// form.addEventListener("submit", 
// function(e){
//   e.preventDefault();

// })