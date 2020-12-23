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
var scoresList = document.getElementById("scores-list");
var initials = document.getElementById("initials");

var timeLeft = 81;
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
highScoreForm.addEventListener("submit", addToList);

function startGame(){
    // this line below hides the contents of <main> to prepare the page for population by the quiz questions in <section id="question-box"></section>
    mainBox.setAttribute("style", "display: none");
    questionBox.setAttribute("style", "display: block");

    countdown = setInterval(function(){
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0){
            alert("Game Over! Score ZERO")
            // the gameOver() function includes clearInterval(countdown) so I am avoiding calling it twice by writing it here as well.
            gameOver();
        }
    }, 1000);

    // after setting up the countdown timer and displaying it to timeDisplay, the function runQuestion1() is called to begin the quiz.
    runQuestion1();
}

function gameOver(){
    clearInterval(countdown);
    questionBox.setAttribute("style", "display: none");
    endScreen.setAttribute("style", "display: block");
    endScreen.children[0].textContent = "Your score is: " + timeLeft;
    timeDisplay.textContent = timeLeft;
}

function viewHighScores(){
    if (showMode === "game"){
        highScoreButton.textContent = "Back to main";
        mainBox.setAttribute("style", "display: none");
        allScores.setAttribute("style", "display: block");
        showMode = "scores";
    } else {
        highScoreButton.textContent = "View High Scores";
        mainBox.setAttribute("style", "display: block");
        allScores.setAttribute("style", "display: none");
        questionBox.setAttribute("style", "display: none");
        endScreen.setAttribute("style", "display: none");
        showMode = "game";
    }
    
}

function addToList(event){
    event.preventDefault();

    var scoreItem = document.createElement("li");
    scoreItem.textContent = initials.value + " : " + timeLeft;
    scoresList.appendChild(scoreItem);
    allScores.setAttribute("style", "display: block");

    localStorage.setItem("Player and Score", scoreItem.textContent)
}

function runQuestion1(){
    questionText.textContent = "Your first question will be regarding the French language... Which of the following is the correct translation of \"Pineapple\"?";
    
    answer1.textContent = "1. un ananas";
    answer2.textContent = "2. un pamplemousse";
    answer3.textContent = "3. une pinpomme";
    answer4.textContent = "4. une pinape";

    // the following event listener checks for a click on any of the answer buttons created above. When a click occurs, the function targets the button that caused the event to occur with "var choice = event.target" and then compares the value assigned to its parent <div> to the correct answer choice, which in this case is "1". If any of the other three buttons are clicked, then the else condition displays an appropriate message and reduces timeLeft by 10.
    answerEvent.addEventListener("click", bigQ1);
}

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

function runQuestion2(){
    answerEvent.removeEventListener("click", bigQ1);
    
    questionText.textContent = "Which of the following is NOT a real breed of Terrier dog?";

    answer1.textContent = "1. Airedale Terrier";
    answer2.textContent = "2. Cairn Terrier";
    answer3.textContent = "3. West Highland White Terrier";
    answer4.textContent = "4. Merton Borough Terrier";

    answerEvent.addEventListener("click", bigQ2);
}

function bigQ2(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "4"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion3();
}

function runQuestion3(){
    answerEvent.removeEventListener("click", bigQ2);
    
    questionText.textContent = 'Which of these Seinfeld characters matches the "Four-Temperament" personality trope of "Sanguine"?';

    answer1.textContent = "1. Jerry Seinfeld";
    answer2.textContent = "2. Cosmo Kramer";
    answer3.textContent = "3. Elaine Benes";
    answer4.textContent = "4. George Costanza";

    answerEvent.addEventListener("click", bigQ3);
}

function bigQ3(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "2"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion4();
}

function runQuestion4(){
    answerEvent.removeEventListener("click", bigQ3);
    
    questionText.textContent = "Who won the 1992 Summer Olympics in Barcelona?";

    answer1.textContent = "1. Unites States of America";
    answer2.textContent = "2. Germany";
    answer3.textContent = "3. China";
    answer4.textContent = "4. Unified Team of Former Soviet Republics";

    answerEvent.addEventListener("click", bigQ4);
}

function bigQ4(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "4"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion5();
}

function runQuestion5(){
    answerEvent.removeEventListener("click", bigQ4);
    
    questionText.textContent = "How many known species of bat are there?";

    answer1.textContent = "1. ~1.6 million";
    answer2.textContent = "2. ~8000";
    answer3.textContent = "3. ~1400";
    answer4.textContent = "4. ~600";

    answerEvent.addEventListener("click", bigQ5);
}

function bigQ5(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "3"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion6();
}

function runQuestion6(){
    answerEvent.removeEventListener("click", bigQ5);
    
    questionText.textContent = "Which of the following chemicals has fewer than 3 carbon atoms in a molecule?";

    answer1.textContent = "1. Benzene";
    answer2.textContent = "2. Methane";
    answer3.textContent = "3. Propene";
    answer4.textContent = "4. Butanol";

    answerEvent.addEventListener("click", bigQ6);
}

function bigQ6(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "2"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion7();
}

function runQuestion7(){
    answerEvent.removeEventListener("click", bigQ6);
    
    questionText.textContent = "Which of these cooking oils has the highest smoke point?";

    answer1.textContent = "1. Soybean Oil";
    answer2.textContent = "2. Olive Oil";
    answer3.textContent = "3. Grapeseed Oil";
    answer4.textContent = "4. Canola Oil";

    answerEvent.addEventListener("click", bigQ7);
}

function bigQ7(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "1"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    runQuestion8();
}

function runQuestion8(){
    answerEvent.removeEventListener("click", bigQ7);
    
    questionText.textContent = 'The French language has come back to haunt you... Which of the following is the correct French term for "a Journey"?';

    answer1.textContent = "1. une épopée";
    answer2.textContent = "2. un voyage";
    answer3.textContent = "3. une journée";
    answer4.textContent = "4. un jeu";

    answerEvent.addEventListener("click", bigQ8);
}

function bigQ8(event){
    var choice = event.target;
    if (choice.parentElement.getAttribute("value") === "2"){
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect! -10 seconds...";
        timeLeft -= 10;
    }
    alert("Game Complete! You have answered all questions!")
    gameOver();
}