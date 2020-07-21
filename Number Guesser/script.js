let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
}
function compareGuesses(userGuess,computerGuess,targetNumber){
  var user=Math.abs(userGuess-targetNumber);
  var computer=Math.abs(computerGuess-targetNumber);
  if(user===computer){
    return true;
  }
  else if(computer>user){
    return true;
  }
  else{
    return false;
  }
}
function updateScore(winnerName){
  if(winnerName==='human'){
    humanScore++;
  }
  else if(winnerName==='computer'){
    computerScore++;
  }
}
function advanceRound(){
  currentRoundNumber++;
}