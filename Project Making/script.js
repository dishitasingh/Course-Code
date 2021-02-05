console.log("hey");

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startQuiz)

const questionBox = document.getElementById("question-box");

let QuestionIndex;

const questionElement = document.getElementById("question-element");
const answer_Box = document.getElementById("optinos-box");

function startQuiz() {
    console.log("Started")
    startBtn.style.display = "none";
    QuestionIndex = 0;
    questionBox.style.display = "block";
    nextQuest();
}

function nextQuest() {
    showQuestion(questions[QuestionIndex]);
}

function showQuestion(question) {
    for (i = 0; i < question.answers.length; i++) {
        questionElement.innerText = question.Question;
        const answerBox = document.createElement("div");
        answerBox.classList.add("options");
        answerBox.setAttribute("id", i)

        const selector = document.createElement("input");
        selector.setAttribute("type", "radio");
        selector.style.width = "10%";
        selector.style.height = "1em";
        selector.setAttribute("name", "age");
        console.log(question);
        selector.onclick = nowCheck;
      
        const label = document.createElement("label");
        label.innerText = questions[0].answers[i].Option;

        answer_Box.append(answerBox)
        answerBox.append(selector);
        answerBox.appendChild(label);

        ;
    }

}

function createAnswerBox() {
}


function chooseAns() {

}

function nowCheck() {
    // Get all the child elements inside the DIV.
    for(let i = 0; i<5; i++){
    var cont = document.getElementById("question-box").querySelectorAll(".options");  
    console.log(cont.item)
    console.log(cont);
    for (var i = 0; i < cont.length; i++) {
        // Check if the element is a checkbox.
        if (cont[i].tagName == 'INPUT' && cont[i].type == 'checkbox') {
            // Finally, check if the checkbox is checked.
            if (cont[i].checked) {
                alert(cont[i].value + ' is checked!');
            }
        }
    }}
}

const questions = [
    {
        Question: "What is your position?",
        answers: [
            { Option: "You are a Covid Warrior, Frontline worker", optionStatus: 1, selected: false },
            { Option: "Your age is above 65 years of age", optionStatus: 2, selected: false },
            { Option: "You are from 50-65 years of age", optionStatus: 3, selected: false },
            { Option: "Your age is below 50 years", optionStatus: 4, selected: false }

        ]
    }
]