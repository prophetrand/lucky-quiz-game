var timeDisplay = document.getElementById("timer");
var highScoreButton = document.getElementById("highScoreView");
var startButton = document.getElementById("start-button");
var headBox = document.getElementById("header-content");
var mainBox = document.getElementById("main-content");
var questionBox = document.getElementById("question-box");
var questionText = document.getElementById("question-text");
var answerEvent = document.getElementById("answer-event");
var message = document.getElementById("correct-message");
var highScoreForm = document.getElementById("highscore-form");

var timeLeft = 100;
var showMode = "game";

// declaring the empty variable countdown on the global scope to serve as the target of setInterval, and to be accessible outside of function scope. 
var countdown;
startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", viewHighScores);

function startGame(){
    // this line below hides the contents of <main> to prepare the page for population by the quiz questions in <section id="question-box"></section>
    mainBox.setAttribute("style", "display: none");

    countdown = setInterval(function(){
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0){
            clearInterval(countdown);
            alert("Game Over! Score ZERO")
            gameOver();
        }
    }, 1000);

    runQuestion1();
}

function gameOver(){
    questionBox.setAttribute("style", "display: none");
    highScoreForm.parentElement.setAttribute("style", "display: block");
}

function viewHighScores(){
    if (showMode === "game"){
        highScoreButton.textContent = "Back to main";
        mainBox.setAttribute("style", "display: none");
        // make scores display
        showMode = "scores";
    } else {
        mainBox.setAttribute("style", "display: block");
        highScoreButton.textContent = "View High Scores";
        showMode = "game";
    }
    
}

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

    // the following event listener checks for a click on any of the answer buttons created above. When a click occurs, the function targets the button that caused the event to occur with "var choice = event.target" and then compares the value assigned to its parent <div> to the correct answer choice, which in this case is "1". If any of the other three buttons are clicked, then the else condition displays an appropriate message and reduces timeLeft by 10.
    answerEvent.addEventListener("click", function(event){
        var choice = event.target;
        if (choice.parentElement.getAttribute("value") === "1"){
            message.textContent = "Correct!";
        } else {
            message.textContent = "Incorrect! -10 seconds...";
            timeLeft -= 10;
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