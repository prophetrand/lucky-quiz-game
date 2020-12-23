var timeDisplay = document.getElementById("timer");
var highScoreButton = document.getElementById("highScoreView");
var startButton = document.getElementById("start-button");
var headBox = document.getElementById("header-content");
var mainBox = document.getElementById("main-content");
var questionBox = document.getElementById("question-box");
var questionText = document.getElementById("question-text");
var answerEvent = document.getElementById("answer-event");
var message = document.getElementById("correct-message");
var endScreen = document.getElementById("end-screen");
var highScoreForm = document.getElementById("highscore-form");
var allScores = document.getElementById("all-scores");

var timeLeft = 100;
var showMode = "game";

// declaring the empty variable countdown on the global scope to serve as the target of setInterval, and to be accessible outside of function scope. 
var countdown;

// declaring answer buttons that will also be accessible from the global scope, and therefore by multiple different functions in child scope.
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

// these appendChild() commands place each answer button into one of the four <div>'s in the "question-box" <section>. Each button goes into a separate <div> that has its value equal to 1, 2, 3, or 4 allowing me to later refer to the correct answer by its unique value number.
answerEvent.children[0].appendChild(answer1);
answerEvent.children[1].appendChild(answer2);
answerEvent.children[2].appendChild(answer3);
answerEvent.children[3].appendChild(answer4);

startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", viewHighScores);

function startGame(){
    // this line below hides the contents of <main> to prepare the page for population by the quiz questions in <section id="question-box"></section>
    mainBox.setAttribute("style", "display: none");
    questionBox.setAttribute("style", "display: block");

    countdown = setInterval(function(){
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0){
            clearInterval(countdown);
            alert("Game Over! Score ZERO")
            gameOver();
        }
    }, 1000);

    // after setting up the countdown timer and displaying it to timeDisplay, the function runQuestion1() is called to begin the quiz.
    runQuestion1();
}

function gameOver(){
    questionBox.setAttribute("style", "display: none");
    endScreen.setAttribute("style", "display: block");
}

function viewHighScores(){
    if (showMode === "game"){
        highScoreButton.textContent = "Back to main";
        mainBox.setAttribute("style", "display: none");
        allScores.setAttribute("style", "display: block");
        showMode = "scores";
    } else {
        mainBox.setAttribute("style", "display: block");
        highScoreButton.textContent = "View High Scores";
        allScores.setAttribute("style", "display: none");
        showMode = "game";
    }
    
}

function runQuestion1(){
    questionText.textContent = "Your first question will be regarding the French language... Which of the following is the correct translation of \"A Pineapple\"?";
    
    answer1.textContent = "1. un ananas";
    answer2.textContent = "2. un pamplemousse";
    answer3.textContent = "3. une pinpomme";
    answer4.textContent = "4. une pinape";

    // the following event listener checks for a click on any of the answer buttons created above. When a click occurs, the function targets the button that caused the event to occur with "var choice = event.target" and then compares the value assigned to its parent <div> to the correct answer choice, which in this case is "1". If any of the other three buttons are clicked, then the else condition displays an appropriate message and reduces timeLeft by 10.
    answerEvent.addEventListener("click", bigQ1);
}

function runQuestion2(){
    answerEvent.removeEventListener("click", bigQ1);
    
    questionText.textContent = "Which of the following is NOT a real breed of Terrier dog?";

    answer1.textContent = "1. Airedale Terrier";
    answer2.textContent = "2. Cairn Terrier";
    answer3.textContent = "3. West Highland White Terrier";
    answer4.textContent = "4. Merton Borough Terrier";

    answerEvent.addEventListener("click", bigQ2);
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

function bigQ1(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "1"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion2();
}

function bigQ2(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "4"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    // runQuestion3();
}