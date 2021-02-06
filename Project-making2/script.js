console.log("hey");
const questionSet = [{
    question: "Are you - ",
    a: "Indian",
    b: "NRI",
    text_a: "That's great your nationaliy makes you fit for India's own Covid vaccine",
    text_b: "Hmmm, it seems like you may not be fit for India's own Covid vaccine"
}, {
    question: "What is your position?",
    a: "You are a Covid Warrior/ Frontline Worker",
    b: "Your age is above 65 years of age",
    c: "You are from 50-65 years of age",
    d: "Your age is below 50 years.",
    e: "Any other",
    text_a: "You may be the first Group o recieve the vaccine",
    text_b: "You maybe the second Group to recieve the vaccine",
    text_c: "You maybe the third Group to recieve the vaccine",
    text_d: "You maybe the fourth Group to recieve the vaccine",
    text_e: "It maybe possible that you may get vaccinated after sometime in future."
}, {
    question: "Are you under any of these circumstances?",
    a: "Have any history of allergies.",
    b: "Have fever",
    c: "Have a bleeding disorder or are on a blood thinner",
    d: "Are immune-compromised or are on a medicine that affects your immune system",
    e: "You are not suffering from any of these problems.",
    text_a: "It is not advisable to take a covaxin shot if you suffer from any allergies, ,<a href='www.google.com'> view this</a> for more information.",
    text_b: "Existing sickness, or at a time of sickness, when the immune system is already busy fighting out the virus would mean that there would be risks for the vaccine to work well, making many wonder if getting a COVID vaccine would be safe or not.Not to forget, suffering from respiratory symptoms like cough, a fever could be doubly dangerous right now, since they are possible COVID symptoms as well. This is the only reason why some are being turned away from vaccination centres right now, because of the risk of infection spread.",
    text_c: "At least 17 per cent of Indians aged between 30 and 69 years cannot be given Bharat Biotech’s Covid-19 vaccine Covaxin, because it is contraindicated for people who use blood thinners — drugs that impede blood coagulation, both within blood vessels and in case of bleeding.",
    text_d: "Not to forget, suffering from respiratory symptoms like cough, a fever could be doubly dangerous right now, since they are possible COVID symptoms as well",
    text_e: "It seems that your health condition is favourable for a covid vaccination."
}, {
    question: "Are you suffering from any of these?",
    a: "Are pregnant.",
    b: "Are breastfeeding",
    c: "Have received another COVID-19 vaccine",
    d: "Any other serious health related issues, as determined by the Vaccinator/Officer supervising vaccination",
    ans: "ans2",
    text_a: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_b: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_c: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_d: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed."
}
]

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
var scoreBox = document.querySelector("#showScore");

let questionCount = 0;

function makeQuestion() {

    const questionList = questionSet[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

makeQuestion();
const getCheckAnswer = () => {
    let answer;
    let answerId;

    answers.forEach((currentAnswerElement) => {
        if (currentAnswerElement.checked) {
            answer = currentAnswerElement.nextElementSibling.innerText;
            answerId = answer.innerText
        }
    });
    return answer;
}

function deselectAll() {
    answers.forEach((currentAnswerElement) => currentAnswerElement.checked = false);
}

submit.addEventListener("click", function submit() {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer == questionSet[questionCount].a) {
        let text_for_a = document.createTextNode(questionSet[questionCount].text_a);
        scoreBox.appendChild(text_for_a);
        console.log(text_for_a)
    } else if (checkedAnswer == questionSet[questionCount].b) {
        scoreBox.innerHTML = questionSet[questionCount].text_b;
    } else if (checkedAnswer == questionSet[questionCount].c) {
        scoreBox.innerHTML = questionSet[questionCount].text_c;
    } else if (checkedAnswer == questionSet[questionCount].d) {
        document.getElementById("showScore").innerText = questionSet[questionCount].text_d;
    }
    deselectAll();

    questionCount++;

    if (checkedAnswer)
        if (questionCount < questionSet.length) {
            makeQuestion();
        }
        else {
            scoreBox.classList.remove("scoreArea");
        }

});