const quizData = [
    {
        question: "Which of the following colors contain equal amounts of RBG?",
       a: "WHITE",
       b: "GREY",
       c: "BLACK",
       d: "ALL OF THE ABOVE",
        correct: "d"
    },
    {
        question: "What is the correct syntax to write an HTML comment?",
        a: "<!--COMMENT-->",
        b: "//COMMENT",
        c: "#COMMENT",
        d: "/*COMMENT*/",
        correct: "a"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What is the effect of the <b> tag?",
        a: "It converts the text within it to bold font",
        b: "It is used to write black-colored font",
        c: "It is used to change font size",
        d: "None Of The Above",
        correct: "a"
    },

    {
        question: "	A can do a piece of work in 4 hours; B and C can do it in 3 hours. A and C can do it in 2 hours. How long will B alone take to do it ?",
        a:  "10 hours",
        b:  "12 hours",
        C:  "8 hours",
        d:   "24 hours",
        correct: "b"
    },
];


let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

const answersEls = document.querySelectorAll(".answer");

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            resultEl.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Do it Again</button>
            `;
            document.getElementById("quiz").style.display = "none";
        }
    }
});

loadQuiz();

