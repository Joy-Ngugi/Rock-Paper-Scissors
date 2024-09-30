const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("player1");
const computerDisplay = document.getElementById("player2");
const resultDisplay = document.getElementById("gameResult");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const gameOverDisplay = document.getElementById("gameOverMessage");
let player1Score=0;
let player2Score=0;
let gameActive = true; 

function playgame(playerChoice) {
    if (!gameActive) return;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
          switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
          }
    }

    document.getElementById("player1").textContent = `PLAYER 1: ${playerChoice}`;
    document.getElementById("player2").textContent = `PLAYER 2: ${computerChoice}`;
    document.getElementById("gameResult").textContent = result;

    resultDisplay.classList.remove("purpleText", "redText")
    switch (result){
        case "YOU WIN!":
            resultDisplay.classList.add("purpleText");
            player1Score++;
            playerScoreDisplay.textContent = player1Score;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            player2Score++;
            computerScoreDisplay.textContent = player2Score;
            break;    
    }
    checkGameOver();
}
function checkGameOver() {
    if (player1Score === 5) {
        gameOverDisplay.textContent = "GAME OVER! Player 1 Wins!";
        gameActive = false;  
    } else if (player2Score === 5) {
        gameOverDisplay.textContent = "GAME OVER! Player 2 Wins!";
        gameActive = false; 
    }
}

function reset() {
    player1Score = 0;
    player2Score = 0;
    gameActive = true;
    playerDisplay.textContent = "PLAYER 1: ";
    computerDisplay.textContent = "PLAYER 2: ";
    resultDisplay.textContent = "";
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    gameOverDisplay.textContent = "";  
    resultDisplay.classList.remove("purpleText", "redText");
}


