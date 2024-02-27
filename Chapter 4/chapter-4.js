/*
//Chapter Projects
//evaluating a number game
let userNum = prompt("Please enter a number");
parseFloat(userNum);

const dynamicNum = 30;

if (userNum > dynamicNum) {
  alert(`Number ${userNum} is greater than ${dynamicNum}`)
} else if (userNum < dynamicNum) {
  alert(`Number ${userNum} is lesser than ${dynamicNum}`)
} else if (userNum === dynamicNum) {
  alert(`Number ${userNum} === ${dynamicNum}`)
} else {
  alert("Please pick a number")
};
*/

//friend checker
let name = prompt("Please enter your name").toLowerCase();

switch(name) {
  case "happy":
    alert("You are my friend");
    break;
    default:
      alert("I dont know you");
};

//rock paper scissors
//Create an array with the game options
const options = ["Rock", "Paper", "Scissors"];

//Generate random numbers for player and computer
const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);

//Determine the winner
let result;
if (playerIndex === computerIndex) {
    result = "It's a tie!";
} else if (
    (playerIndex === 0 && computerIndex === 2) || // Rock beats Scissors
    (playerIndex === 1 && computerIndex === 0) || // Paper beats Rock
    (playerIndex === 2 && computerIndex === 1)    // Scissors beat Paper
) {
    result = `You win! ${options[playerIndex]} beats ${options[computerIndex]}.`;
} else {
    result = `Computer wins! ${options[computerIndex]} beats ${options[playerIndex]}.`;
}

//Display the result
console.log(result);
