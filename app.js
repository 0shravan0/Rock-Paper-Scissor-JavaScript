function game() {
  let pScore = 0;
  let cScore = 0;

  //start the game
  function startGame() {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeout");
      match.classList.add("fadein");
    });
  }
  //play match
  function playMatch() {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(function (hand) {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          //here we call compare hands
          compareHands(this.textContent, computerChoice);

          //update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  }

  function updateScore() {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }

  function compareHands(playerChoice, computerChoice) {
    //update text
    const winner = document.querySelector(".winner");
    //checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "it is a tie";
      updateScore();
      return;
    }
    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    // check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
    // check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
  }
  //calling the inner function
  startGame();
  playMatch();
}
//calling the game function
game();
