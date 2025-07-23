console.log("Hello, World!");

// write getComputerChoice function
// return string: "rock", "paper", "scissors"
// Math.random()

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// write getHumanChoice function
// prompt() to get human input

function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, or Scissors?");
  return humanInput;
}

// create global variables: humanScore, computerScore to track

// write playRound function
// input: humanChoice, computerChoice - case sensitive string
// output: string - console.log() === "You lose! Paper beats Rock!"
// increment global variables to track score

// write playGame function
// move playRound and score variables into playGame scope
// play 5 rounds by calling playRound 5x

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    let human = getHumanChoice().toLowerCase();
    let comp = getComputerChoice().toLowerCase();

    if (
      (human === "rock" && comp === "paper") ||
      (human === "paper" && comp === "scissors") ||
      (human === "scissors" && comp === "rock")
    ) {
      console.log(`You lose! ${comp} beats ${human}.`);
      computerScore++;
    } else if (
      (comp === "rock" && human === "paper") ||
      (comp === "paper" && human === "scissors") ||
      (comp === "scissors" && human === "rock")
    ) {
      console.log(`You win! ${human} beats ${comp}.`);
      humanScore++;
    } else {
      console.log(`Tie! ${human} and ${comp}.`);
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `The score is human: ${humanScore}, computer: ${computerScore}.`
    );
  }

  console.log(`Final Score. Human: ${humanScore} Computer: ${computerScore}`);
}
