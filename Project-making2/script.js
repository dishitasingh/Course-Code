console.log("hey");
const questionSet = [{
    question: "Are you - ",
    a: "an Indian, or",
    b: "Non- Resident Indians (NRI)",
    text_a: "That's great your nationaliy makes you fit for India's own Covid vaccine. (2️⃣5️⃣% fit)",
    text_b: "Hmmm, it seems like you may not be fit for India's own Covid vaccine."
}, {
    question: "What is your position?",
    a: "You are a Covid Warrior / Frontline Worker.",
    b: "Your age is above 65 years of age.",
    c: "You are from 50-65 years of age.",
    d: "Your age is below 50 years.",
    e: "Any other.",
    text_a: "You may be the first Group to recieve the vaccine.(5️⃣0️⃣% fit)",
    text_b: "You maybe the second Group to recieve the vaccine.",
    text_c: "You maybe the third Group to recieve the vaccine.",
    text_d: "You maybe the fourth Group to recieve the vaccine.",
    text_e: "It maybe possible that you may get vaccinated after sometime in future."
}, {
    question: "Are you suffering from any of these ?",
    a: "You have any history of allergies.",
    b: "You have fever.",
    c: "You have a bleeding disorder or you are on a blood thinner.",
    d: "You are immune-compromised or are on a medicine that affects your immune system.",
    e: "You are not suffering from any of these problems.",
    text_a: "It is not advisable to take a covaxin shot if you suffer from any allergies.",
    text_b: "Existing sickness, or at a time of sickness, when the immune system is already busy fighting out the virus would mean that there would be risks for the vaccine to work well, making many wonder if getting a COVID vaccine would be safe or not.",
    text_c: "At least 17 per cent of Indians aged between 30 and 69 years cannot be given Bharat Biotech’s Covid-19 vaccine Covaxin, because it is contraindicated for people who use blood thinners — drugs that impede blood coagulation, both within blood vessels and in case of bleeding.",
    text_d: "Not to forget, suffering from respiratory symptoms like cough, a fever could be doubly dangerous right now, since they are possible COVID symptoms as well.",
    text_e: "It seems that your health condition is favourable for a covid vaccination. (7️⃣5️⃣% fit)."
}, {
    question: "Are you suffering from any of these ?",
    a: "You have any other serious health related issues, as determined by the Vaccinator/Officer supervising vaccination",
    b: "You are breastfeeding",
    c: "You have received another COVID-19 vaccine",
    d: "You are pregnant.",
    e: "You are not under any of these circumstances.",
    text_a: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_b: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_c: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_d: "If you have any of these problems, you may not be fit for Covaxin and your vaccine date may be postponed.",
    text_e: "Hurrray!! You are 💯% fit for a COVID Vaccine."
}
]

const question = document.querySelector(".question");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");

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
    option5.innerText = questionList.e;

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
        const br = document.createElement("br");
        scoreBox.appendChild(text_for_a);
        scoreBox.append(br)
        console.log(text_for_a)
    } else if (checkedAnswer == questionSet[questionCount].b) {
        let text_for_b = document.createTextNode(questionSet[questionCount].text_b);
        scoreBox.appendChild(text_for_b);
        scoreBox.append(br)
    } else if (checkedAnswer == questionSet[questionCount].c) {
        let text_for_c = document.createTextNode(questionSet[questionCount].text_c);
        scoreBox.appendChild(text_for_c);
        scoreBox.append(br)
    } else if (checkedAnswer == questionSet[questionCount].d) {
        let text_for_d = document.createTextNode(questionSet[questionCount].text_d);
        scoreBox.appendChild(text_for_d);
        scoreBox.append(br)
    }else if (checkedAnswer == questionSet[questionCount].e) {
        let text_for_e = document.createTextNode(questionSet[questionCount].text_e);
        scoreBox.appendChild(text_for_e);
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