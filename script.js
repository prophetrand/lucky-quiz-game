var timeDisplay = document.getElementById("timer");
var highScoreButton = document.getElementById("highScoreView");
var startButton = document.getElementById("start-button");
var headBox = document.getElementById("header-content");
var mainBox = document.getElementById("main-content");
var questionBox = document.getElementById("question-box");
var questionText = document.getElementById("question-text");
var answerEvent = document.getElementById("answer-event");
var highScoreForm = document.getElementById("highscore-form");

var timeLeft = 100;
var showMode = "game";

// declaring the empty variable countdown on the global scope to serve as the target of setInterval, and to be accessible outside of function scope. 
var countdown;

function startGame(){
    // this line clears the HTML contents of <main> to prepare the page for population by the quiz questions in <section id="question-box"></section>
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

    runQuestion1();
}

function gameOver(){
    highScoreForm.parentElement.setAttribute("style", "display: block");
}

function viewHighScores(){
    if (showMode === "game"){
        highScoreButton.textContent = "Back to main";
        // make scores display
        showMode = "scores";
    } else {
        showMode = "game";
        // make game come back
        highScoreButton.textContent = "View High Scores";
    }
    
}

startButton.addEventListener("click", startGame)
highScoreButton.addEventListener("click", viewHighScores)

// questions will be housed in the section id="question-box", pointed w/ questionBox
// each question's text will go into the <h2 id="question-text">, pointed w/ questionText.
// each question will have four buttons whose textContent is each answer.

function runQuestion1(){
    questionText.textContent = "Your first question will be regarding the French language... Which of the following is the correct translation of \"A Pineapple\"?";
    var answer1 = document.createElement("button");
    var answer2 = document.createElement("button");
    var answer3 = document.createElement("button");
    var answer4 = document.createElement("button");

    // these appendChild() commands place each answer button into one of the four <div>'s in the "question-box" <section>. Each button goes into a separate <div> that has its value equal to 1, 2, 3, or 4 allowing me to later refer to the correct answer by its unique value number.
    answerEvent.children[0].appendChild(answer1);
    answerEvent.children[1].appendChild(answer2);
    answerEvent.children[2].appendChild(answer3);
    answerEvent.children[3].appendChild(answer4);

    answer1.textContent = "1. un ananas";
    answer2.textContent = "2. un pamplemousse";
    answer3.textContent = "3. une pinpomme";
    answer4.textContent = "4. une pinape";

    answerEvent.addEventListener("click", function(event){
        var choice = event.target;
        if (choice.parentElement.getAttribute("value") === "1"){
            console.log("I'm a happy ganache");
        } else {
            console.log("you lose bye bye")
        }
    });

}




// The following will be useful for creating a form for high score name entry, and was taken from 12-Ins_Preventing_Default_Events
{/* <form >
    <input placeholder="name" id="name" />
    <input placeholder="email" id="email" />
    <button id="submit">Submit</button>
    <div>
      <h4 id="response"></h4>
    </div>
</form> */}

// Check here: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp  to see how to make an element show/hide using no Bootstrap. Basically changing display property to/from "none"/"block". The element won't take up any space when it's set to display: "none" which i'll probably do with a .setAttribute() method.