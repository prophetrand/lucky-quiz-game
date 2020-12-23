var timeDisplay = document.getElementById("timer");
var highScoreButton = document.getElementById("highScoreView");
var startButton = document.getElementById("start-button");
var mainBox = document.getElementById("main-content");
var headBox = document.getElementById("header-content");

var timeLeft = 100;
var showMode = "game";

// declaring the empty variable countdown on the global scope to serve as the target of setInterval, and to be accessible outside of function scope. 
var countdown;

function startGame(){
    // this line clears the HTML contents of <main> to prepare it for population by the quiz questions.
    mainBox.innerHTML = "";

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
    if (showMode === "game"){
        highScoreButton.textContent = "Back to main";
        mainBox.setAttribute("class", "hidden");
        showMode = "scores";
    } else {
        showMode = "game";
        mainBox.setAttribute("class", "visible");
        highScoreButton.textContent = "View High Scores";
    }
    
}

startButton.addEventListener("click", startGame)
highScoreButton.addEventListener("click", viewHighScores)