
const cells = document.querySelectorAll(".cell");
const winnerMessage = document.getElementById("winner-message");
const restartButton = document.getElementById("restart-button");
//first player is x
let currentPlayer = "x";
let gameActive = true;

//arrays to win
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

//call restart button
restartButton.addEventListener("click", restartGame);

//funcion called if cell is clicked
function handleClick(event) {
  const cell = event.target;

  //if cell is empty and the game is still on
  if (cell.textContent === "" && gameActive) {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    //check the winner
    if (checkWinner(currentPlayer)) {
        //diplay of winner
      winnerMessage.textContent = `Player ${currentPlayer.toUpperCase()} wins!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "x" ? "o" : "x";
//tie game
      if (isBoardFull()) {
        winnerMessage.textContent = "It's a tie!";
        gameActive = false;
      }
    }
  }
}

//check if player won
function checkWinner(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(player);
    });
  });
}
//are all cells clicked?
function isBoardFull() {
  return [...cells].every((cell) => cell.textContent !== "");
}
//restart game
function restartGame() {
    //clear cells on the board then take out x's and o's
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
  currentPlayer = "x";
  gameActive = true;
  winnerMessage.textContent = "";
}