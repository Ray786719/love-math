document.addEventListener("DOMContentLoaded", function () {
let button = document.getElementsByTagName("button");

for (let button of buttons) {button.addEventListener("click", function() {
    if (this.getAttribute("data-type") === "submit") {
        alert("You clicked the submit button!");
    } else {
        let gameType = this.getAttribute("data-type");
        alert("You clicked the " + gameType + " button!");
    }

function runGame() {
  // Game logic goes here
}
function checkAnswer() {
  // Answer checking logic goes here
}

function calculateAnswer() {
  // Answer calculation logic goes here
}   

function incrementScore() {
  // Increment score logic goes here
}

function incrementWrongAnswers() {
  // Increment wrong answers logic goes here
}

function displayAdditionQuestion() {
  // Display addition question logic goes here
}

function displaySubtractQuestion() {
  // Display subtraction question logic goes here
}

function displayMultiplyQuestion() {
  // Display multiplication question logic goes here
}


