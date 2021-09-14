const quizData = [
    {
        question: "What is the fourth planet from the sun?",
        a: "Earth",
        b: "Neptune",
        c: "Venus",
        d: "Mars",
        correct: "d",
    },
    {
        question: "What Article in the US Constitution addresses amendments?",
        a: "Article V",
        b: "Article III",
        c: "Article II",
        d: "Article IV",
        correct: "a",
    },
    {
        question: "What was the opening year of the Japanese bullet train called the Shinkansen?",
        a: "1965",
        b: "1964",
        c: "1981",
        d: "1954",
        correct: "b",
    },
    {
        question: "Who is the current CEO of Tesla?",
        a: "Elon Tusk",
        b: "Elon Husk",
        c: "Elon Musk",
        d: "Elton John",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", ()=> {
    //check answer
    const answer = getSelection();

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {

            loadQuiz();

        } else {
            quiz.innerHTML = `<h2>Your score ${score}/${quizData.length}</h2>`;     
        }
    }
});

//insta @codecrooksshanks 