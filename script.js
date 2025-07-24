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

function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, or Scissors?");
  return humanInput;
}

function playRound(getHumanChoice) {
  let human = getHumanChoice.toLowerCase();
  let comp = getComputerChoice().toLowerCase();

  if (
    (human === "rock" && comp === "paper") ||
    (human === "paper" && comp === "scissors") ||
    (human === "scissors" && comp === "rock")
  ) {
    console.log(`Computer Wins! Human: ${human}, Computer: ${comp}`);
    // console.log(`You lose! ${comp} beats ${human}.`);
    // computerScore++;
  } else if (
    (comp === "rock" && human === "paper") ||
    (comp === "paper" && human === "scissors") ||
    (comp === "scissors" && human === "rock")
  ) {
    console.log(`You Win! Human: ${human}, Computer: ${comp}`);
    // console.log(`You win! ${human} beats ${comp}.`);
    // humanScore++;
  } else {
    console.log(`Tie! ${human} and ${comp}.`);
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  playRound();
  // console.log(`Final Score. Human: ${humanScore} Computer: ${computerScore}`);
}

// UI DOM
const div = document.createElement("div");
document.body.append(div);

const buttonText = ["Rock", "Paper", "Scissors"];

for (let i = 0; i < buttonText.length; i++) {
  const button = document.createElement("button");
  button.textContent = buttonText[i];
  document.body.append(button);
  button.addEventListener("click", function () {
    const humanChoice = buttonText[i];
    playRound(humanChoice);
  });
}
