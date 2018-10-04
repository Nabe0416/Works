    var currentQuestion;
var currentAnswer;
var showingQuestion;
var questionsCounter = 0;
var btn1;
var btn2;
var btn3;
var btn4;
var btnNext;
var grade = 0;
var choiceButtons = [];
var wrongAnswers = [];

btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
choiceButtons = [btn1,btn2,btn3,btn4];

btnNext = document.getElementById("next");

/**
 * @function
 * @name chooseRandomQuestion
 * @description Choose a question from the questions array randomly and remove it.
 */
function chooseRandomQuestion () {
    var randomQuestionId;
    randomQuestionId = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomQuestionId];
    questions.splice(randomQuestionId, 1);
}

/**
 * @function
 * @name displayQuestionAndChoices
 * @description Display the question on screen and display the choices on the buttons randomly.
 */
function displayQuestionAndChoices () {
    var currentbutton;
    var choices = currentQuestion.choices;
    //display question
    showingQuestion = document.getElementById("paragraph");
    showingQuestion.innerHTML = currentQuestion.question;
    //display Choices
    for (var index = 0; index < 4; index++) {
        var randomId = Math.floor(Math.random() * choices.length);
        choiceButtons[index].innerHTML = choices[randomId];
        choices.splice(randomId, 1);
    }
}

/**
 * @function
 * @name disableAllAnswerBtns
 * @description Disable all the answer buttons and change their css style in ClassName = "choicesDisable".
 */
function disableAllAnswerBtns() {
    for (var index = 1; index < 5; index++) {
        document.getElementById("btn" + index).disabled = true;
        document.getElementById("btn" + index).className = "choicesDisable";
    }
}

/**
 * @function
 * @name enableAllAnswerBtns
 * @description Enable all the answer buttons and change their css style in ClassName = "choicesEnable".
 */
function enableAllAnswerBtns() {
    for (var index = 1; index < 5; index++) {
        document.getElementById("btn" + index).disabled = false;
        document.getElementById("btn" + index).className = "choicesEnable";
    }
}

/**
 * @function
 * @name disableNextBtn
 * @description Disable the "Next" buttons and change its css style in ClassName = "nextDisable".
 */
function disableNextBtn() {
    btnNext.disabled = true;
    btnNext.className = "nextDisable";
}

/**
 * @function
 * @name enableNextBtn
 * @description Enable the "Next" buttons and change its css style in ClassName = "nextEnable".
 */
function enableNextBtn() {
    btnNext.disabled = false;
    btnNext.className = "nextEnable";
}

/**
 * @function
 * @name returnTheBtnObject
 * @param { number } btnIndex 
 * @description Return the button object by the index.
 */
function returnTheBtnObject (btnIndex) {
    return document.getElementById("btn" + btnIndex);
}

/**
 * @function
 * @name highlightTheCorrectAnswer
 * @description Find the button which is displaying the correct answer and change its css style in ClassName = "correct".
 */
function highlightTheCorrectAnswer() {
    for (var index = 1; index < 5; index++) {
        if (returnTheBtnObject(index).innerHTML === currentQuestion.correctAnswer) {
            returnTheBtnObject(index).className = "correct";
        }
    }
}

/**
 * @function
 * @name checkCorrectAnswer
 * @description Check if the chosen answer is correct or not, add grade by 1 if it's correct.
 */
function checkCorrectAnswer() {
    var correctAnswer = currentQuestion.correctAnswer;
    questionsCounter++;
    if (correctAnswer === currentAnswer) {
        grade++; 
    } else {
        wrongAnswers.push("The question was: " + currentQuestion.question + "<br/>The correct answer is: " + currentQuestion.correctAnswer + "<br/>What you have chosen was: " + currentAnswer + "<br/><br/>")
    }
    highlightTheCorrectAnswer();
}

/**
 * @function
 * @name updateHeader
 * @description Refresh the header to show the progress of the quiz.
 */
function updateHeader() {
    var headerText;
    headerText = "Question " + (questionsCounter + 1) + " of 10";
    document.getElementById("header").innerHTML = headerText;
}

/**
 * @function
 * @name btnChoicesOnClick
 * @param { number } index
 * @description  Store the text of the chosen button into variable "currentAnswer" for checking the answer.
 */
function btnChoicesOnClick(index) {
    currentAnswer = document.getElementById("btn" + index).innerHTML;
    disableAllAnswerBtns();
    checkCorrectAnswer();
    enableNextBtn();
}

/**
 * @function
 * @name bt1.onclick
 * @description Call btnChoicesOnClick() with parameter 1
 */
btn1.onclick = function() {
    btnChoicesOnClick(1);
}

/**
 * @function
 * @name bt2.onclick
 * @description Call btnChoicesOnClick() with parameter 2
 */
btn2.onclick = function() {
    btnChoicesOnClick(2);
}

/**
 * @function
 * @name bt3.onclick
 * @description Call btnChoicesOnClick() with parameter 3
 */
btn3.onclick = function() {
    btnChoicesOnClick(3);
}

/**
 * @function
 * @name bt4.onclick
 * @description Call btnChoicesOnClick() with parameter 4
 */
btn4.onclick = function() {
    btnChoicesOnClick(4);
}

/**
 * @function
 * @name btnNext.onclick
 * @description Refresh the question and choices, disable the "Next" button, and enable the choices buttons.
 */
btnNext.onclick = function () {
    if (questionsCounter === 10) {
        console.log(grade);
        resultScreen();
    } else {
    quiz();
    disableNextBtn();
    enableAllAnswerBtns();
    }
}

/**
 * @function
 * @name quiz
 * @description Get a new question and display the question and its choices on the screen.
 */
function quiz () {
    chooseRandomQuestion();
    displayQuestionAndChoices();
    updateHeader();
}
