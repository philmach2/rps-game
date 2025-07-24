let computerScore = 0;
let humanScore = 0;

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

function playRound(getHumanChoice) {
  const human = getHumanChoice.toLowerCase();
  const comp = getComputerChoice().toLowerCase();

  const p = document.createElement("p");

  if (
    (human === "rock" && comp === "paper") ||
    (human === "paper" && comp === "scissors") ||
    (human === "scissors" && comp === "rock")
  ) {
    computerScore++;
    p.textContent = `Computer won round. ${comp} beats ${human}. Human: ${humanScore}, Computer: ${computerScore}`;
  } else if (
    (comp === "rock" && human === "paper") ||
    (comp === "paper" && human === "scissors") ||
    (comp === "scissors" && human === "rock")
  ) {
    humanScore++;
    p.textContent = `Human won round. ${human} beats ${comp}. Human: ${humanScore}, Computer: ${computerScore}`;
  } else {
    p.textContent = `Tie! Both chose ${human}. Human: ${humanScore}, Computer: ${computerScore}`;
  }
  div.appendChild(p);

  if (humanScore === 5) {
    const winP = document.createElement("p");
    winP.textContent = `🎉 Human Wins! Final Score = Human: ${humanScore} Computer: ${computerScore}`;
    div.appendChild(winP);
  }

  if (computerScore === 5) {
    const loseP = document.createElement("p");
    loseP.textContent = `💻 Computer Wins! Final Score = Human: ${humanScore} Computer: ${computerScore}`;
    div.appendChild(loseP);
  }
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
