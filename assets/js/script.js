document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    });
}
runGame("addition");
})
/** The main game loop called when the script is first loaded
 * and the user's answer has been processed
 */

function runGame(gameType) {
  // Create two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else {
    alert("Unknown game type: " + gameType);
    throw "Unknown game type: " + gameType + ", Aborting!";
  }
}

/** Checks the answer against the first element in the returned 
 * calculateCorrectAnswer array
 */
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("Hey, you got it right! :D");
  } else {
    alert("Awww... you answered " + userAnswer + ". The correct answer was " + calculatedAnswer[0] + ".");
    runGame(calculatedAnswer[1]);

    incrementWrongAnswers();
  }
}

/** Gets the operands (the numbers) and the operator (plus, minus, etc.)
 * directly from the DOM, and returns the correct answer.
 */

function calculateCorrectAnswer() {

  // Answer calculation logic goes here

  let operand1 = parseInt (document.getElementById('operand1').textContent);
  let operand2 = parseInt (document.getElementById('operand2').textContent);
  let operator = document.getElementById('operator').innerText;

    if (operator === "+") { 
        return [operand1 + operand2, "addition"];
    } else {
        alert (`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, Aborting!`;
    }
}

function incrementScore() {
  // Increment score logic goes here
}

function incrementWrongAnswers() {
  // Increment wrong answers logic goes here
  

}

function displayAdditionQuestion(operand1, operand2) {
  // Display addition question logic goes here
document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {
  // Display subtraction question logic goes here
}

function displayMultiplyQuestion() {
  // Display multiplication question logic goes here
}


