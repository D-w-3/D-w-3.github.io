const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    const answers = {
        question1: document.querySelector('input[name="q1"]:checked').value
    }
    display(answers);
}


function display(answers) {
    const quizSection = document.getElementById("the-form");
    quizSection.innerHTML = "";
    const answerHeader = document.createdElement('h1');
    answerHeader.textContent = "Your results are: ";
    quizSection.appendChild(answerHeader);
    const result = document.createElement('p');
    if(answers.question1 === "yes") {
        result.textContent = "cool"; 
    } else if(answers.question1 === "no") {
        result.textContent = "leave";
    }
    quizSection.appendChild(result);
}