var mainScreenHeader = "Chemistry Quiz";
var mainScreenDescription = "In this quiz you will randomly get 10 questions about chemistry in your daily life. <br/><br/>"+ 
"Try to get it right as many as possible! <br/><br/>" +
"You can get the right answers after the quiz, so you will learn something that you are not familiar with.";

/**
 * @function
 * @name mainScreen
 * @description Shows all the things that need to be displayed in main screen and hides others.
 */
function mainScreen () {
    document.getElementById("header").innerHTML = mainScreenHeader;
    document.getElementById("paragraph").innerHTML = mainScreenDescription;
    for (var index = 1; index < 5; index++) {
        document.getElementById("btn" + index).hidden = true;
    }
    document.getElementById("start").hidden = false;
    document.getElementById("next").hidden = true;
    document.getElementById("again").hidden = true;
}

/**
 * @function
 * @name quizScreen
 * @description Shows all the things that need to be displayed in the quiz screen and hides others. And also start the quiz function.
 */
function quizScreen() {
    document.getElementById("start").hidden = true;
    for (var index = 1; index < 5; index++) {
        document.getElementById("btn" + index).hidden = false;
    }
    document.getElementById("next").hidden = false;
    disableNextBtn();
    quiz();
}

/**
 * @function
 * @name resultScreen
 * @description Shows all the things that need to be displayed in the result screen and hides others.
 */
function resultScreen() {
    var reviewOfMistake = "";
    document.getElementById("header").innerHTML = "Your grade is " + grade;
    if (wrongAnswerssss.length === 0) {
        document.getElementById("paragraph").innerHTML = "You get all right for this quiz! Congratulations!";
    } else {
        for (var index = 0; index < wrongAnswerssss.length; index++) {
            reviewOfMistake = reviewOfMistake + wrongAnswerssss[index];
        }
        document.getElementById("paragraph").innerHTML = reviewOfMistake;
    }
    for (var index = 1; index < 5; index++) {
        document.getElementById("btn" + index).hidden = true;
    }
    document.getElementById("next").hidden = true;
    document.getElementById("again").hidden = false;
}

/**
 * @function
 * @name document.getElementById("start").onclick
 * @description Call quizScreen().
 */
document.getElementById("start").onclick = function() {
    quizScreen();
}

/**
 * @function
 * @name document.getElementById("again").onclick
 * @description Reload all the page(to reload the javascript file) and call mainScreen().
 */
document.getElementById("again").onclick = function() {
    window.location.reload();
    mainScreen();
}

mainScreen();