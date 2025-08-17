document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked the submit button!");
        } else {
            let gameType = this.getAttribute("data-type");
            alert("You clicked the " + gameType + " button!");
        }
    });
}
})
/** The main game loop called when the script is first loaded
 * and the user's answer has been processed
 */

function runGame() {
  // Create two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
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


