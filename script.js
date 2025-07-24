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
  let computerScore = 0;
  let humanScore = 0;
  const p = document.createElement("p");

  if (
    (human === "rock" && comp === "paper") ||
    (human === "paper" && comp === "scissors") ||
    (human === "scissors" && comp === "rock")
  ) {
    p.textContent = `Human: ${human}, Computer: ${comp}`;
    div.appendChild(p);
    computerScore++;
  } else if (
    (comp === "rock" && human === "paper") ||
    (comp === "paper" && human === "scissors") ||
    (comp === "scissors" && human === "rock")
  ) {
    p.textContent = `Human: ${human}, Computer: ${comp}`;
    div.appendChild(p);
    humanScore++;
  } else {
    p.textContent = `Tie! ${human} and ${comp}.`;
    div.appendChild(p);
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
