var timeDisplay = document.getElementById("timer");
var highScoreButton = document.getElementById("highScoreView");
var startButton = document.getElementById("start-button");

var timeLeft = 90;

// declaring the empty variable countdown on the global scope to serve as the target of setInterval, and to be accessible outside of function scope. 
var countdown;

function startGame(){
    countdown = setInterval(function(){
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0){
        clearInterval(countdown);
        alert("Game Over! Score ZERO")
        gameOver();
    }

    }, 1000);
}

function gameOver(){

}
startButton.addEventListener("click", startGame)