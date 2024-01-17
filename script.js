let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Question #1
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
  //I had it orginally written as
  /*const generateTarget = () => {
  target = Math.floor(Math.random() * 10);
  return target; */
};

//Testing Question#1: Works
console.log(generateTarget());

//Question 6
const getAbsoluteDistance = (x, y) => {
  return Math.abs(y - x);
};

console.log(getAbsoluteDistance(200, -300));

//Questions #2
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 9)
    alert(
      "Your number is out of range. Please guess a number between 0 and 9."
    );
  const humanDifference = getAbsoluteDistance(targetGuess, humanGuess);
  //code before the challenge
  // const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = getAbsoluteDistance(targetGuess, computerGuess);
  //code before the challenge
  //const computerDifference = Math.abs(targetGuess - computerGuess);
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

//Alternative concise way to complete Question #2
/*
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
}; */

//Question #3
const updateScore = (winner) => {
  if (winner === "human") humanScore++;
  /* ++ is the same as += 1 
  or x = x + 1 
  where x is humanScore(increasing by 1)*/
  if (winner === "computer") computerScore++;
  /* ++ is the same as += 1 
  or x = x + 1 
  where x is computerScore(increasing by 1)*/
};

//Question #4
const advanceRound = () => currentRoundNumber++;
// ++ is the same as += 1 (increasing by 1)
// can also do x = x + 1; where x is currentRoundNumber
