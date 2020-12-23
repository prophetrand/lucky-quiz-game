var timeDisplay = document.getElementById("timer");
var highScoreButton = document.getElementById("highScoreView");
var startButton = document.getElementById("start-button");
var mainBox = document.getElementById("main-content");

var timeLeft = 100;

// declaring the empty variable countdown on the global scope to serve as the target of setInterval, and to be accessible outside of function scope. 
var countdown;

function startGame(){
    // this line clears the HTML contents of <main> to prepare it for population by the quiz questions.
    mainBox.innerHTML = '';

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

function viewHighScores(){

}

startButton.addEventListener("click", startGame)
highScoreButton.addEventListener("click", viewHighScores)