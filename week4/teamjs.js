let playerTurn = 1;
const resetBut = document.getElementById('reset');

//Function:
let playGame = function (square) {
    if(playerTurn === 1) {
        square.target.innerHTML = 'X';
        playerTurn = 2;
    }else if (playerTurn === 2) {
        square.target.innerHTML = 'O';
        playerTurn = 1;
    }
}

function resetButton() {
    document.querySelectorAll(".listen").forEach(item => {
    item.innerHTML = " "})
}


//Event Listeners:

//Listener that listens for the reset button
resetBut.addEventListener("click", resetButton);

//event listener that adds the x or o when clicked
document.querySelectorAll(".listen").forEach(item => {
    item.addEventListener('click', playGame)
})

//Event listener checking if the game is over and won
document.querySelector(".container").addEventListener();