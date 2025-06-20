let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user");
const computerScorePara = document.getElementById("computer");
const restartBtn = document.getElementById("restartBtn");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id; 
    playGame(userChoice);
  });
});

restartBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScorePara.textContent = userScore;
  computerScorePara.textContent = computerScore;
  msg.textContent = "Game restarted! Make your move.";
});

function playGame(userChoice) {
  if (userScore >= 10 || computerScore >= 10) {
    msg.textContent = userScore >= 10
      ? "Game Over! You reached 10 points! 🏆"
      : "Game Over! Computer reached 10 points! 😢";
    return;
  }

  const compChoice = getComputerChoice();
  const result = getResult(userChoice, compChoice);

  if (result === "win") {
    userScore++;
    msg.textContent = `You Win! ${userChoice} beats ${compChoice}`;
  } else if (result === "lose") {
    computerScore++;
    msg.textContent = `You Lose! ${compChoice} beats ${userChoice}`;
  } else {
    msg.textContent = "It's a Draw!";
  }

  userScorePara.textContent = userScore;
  computerScorePara.textContent = computerScore;

  if (userScore === 10 || computerScore === 10) {
    msg.textContent = userScore === 10
      ? "Game Over! You reached 10 points! 🎉"
      : "Game Over! Computer reached 10 points! 😥";
  }
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function getResult(user, comp) {
  if (user === comp) return "draw";

  if (
    (user === "rock" && comp === "scissor") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissor" && comp === "paper")
  ) {
    return "win";
  }

  return "lose";
}