console.log("hey");
const questionSet = [
    {
        question: "What is your position?",
        a: "You are a Covid Warrior/ Frontline Worker",
        b: "Your age is above 65 years of age",
        c: "You are from 50-65 years of age",
        d: "Your age is below 50 years.",
        ans: "ans4",
        text_a: "You may be the first Group o recieve the vaccine",
        text_b: "You maybe the second Group to recieve the vaccine",
        text_c: "You maybe the third Group to recieve the vaccine",
        text_d: "You maybe the fourth Group to recieve the vaccine"
    }, {
        question: "Are you under any of these circumstances?",
        a: "Have any history of allergies.",
        b: "Have fever",
        c: "Have a bleeding disorder or are on a blood thinner",
        d: "Are immune-compromised or are on a medicine that affects your immune system",
        ans: "ans1",
        text_a: "It is not advisable to take a covaxin shot if you suffer from any allergies, ,<a href='www.google.com'> view this</a> for more information.",
        text_b: "Existing sickness, or at a time of sickness, when the immune system is already busy fighting out the virus would mean that there would be risks for the vaccine to work well, making many wonder if getting a COVID vaccine would be safe or not.Not to forget, suffering from respiratory symptoms like cough, a fever could be doubly dangerous right now, since they are possible COVID symptoms as well. This is the only reason why some are being turned away from vaccination centres right now, because of the risk of infection spread.",
        text_c: "At least 17 per cent of Indians aged between 30 and 69 years cannot be given Bharat Biotech’s Covid-19 vaccine Covaxin, because it is contraindicated for people who use blood thinners — drugs that impede blood coagulation, both within blood vessels and in case of bleeding.",
        text_d: "Not to forget, suffering from respiratory symptoms like cough, a fever could be doubly dangerous right now, since they are possible COVID symptoms as well"
    }, {
        question: "What is your position?",
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
var scoreBox = document.querySelectorAll("#showScore");

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

    answers.forEach((currentAnswerElement) => {
        if (currentAnswerElement.checked) {
            answer = currentAnswerElement.parentElement.innerText;
        }
    });
    return answer;
}

submit.addEventListener("click", function submit() {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer == questionSet[questionCount].a) {
        scoreBox.innerText = questionSet[questionCount].text_a;
        console.log(questionSet[questionCount].text_a);
    } else if (checkedAnswer == questionSet[questionCount].b) {
        scoreBox.innerText = questionSet[questionCount].text_b;
        console.log(questionSet[questionCount].text_b);
    } else if (checkedAnswer == questionSet[questionCount].c) {
        scoreBox.innerText = questionSet[questionCount].text_c;
        console.log(questionSet[questionCount].text_c);
    } else if (checkedAnswer == questionSet[questionCount].d) {
        document.getElementById("showScore").innerText = questionSet[questionCount].text_d;
        console.log(questionSet[questionCount].text_d);
    }

    questionCount++;
    if (questionCount < questionSet.length) {
        makeQuestion();
    }
    else {
        scoreBox.classList.remove("scoreArea")
    }

});