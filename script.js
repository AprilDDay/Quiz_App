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

const max = quizData.length;

let currentQuiz = getRandomInt(max);
let score = 0;

//need to load to get a_text to load
loadQuiz();


//add feature
function getRandomInt(max) {
    
    let randomQ = Math.floor(Math.random()*max);
    console.log("random number is " + randomQ);
    return randomQ;
    
}

function loadQuiz(){
    deselectAnswers();
//    getRandomInt(max);

    const currentQuizData = quizData[currentQuiz];
    //const currentQuizData = quizData[randomQ];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    console.log("function loadQuiz() is running.");
    console.log("currentQuiz = " + currentQuiz);
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        console.log("function getSelected() is running.");

    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

    console.log("function deselectAnswer() is running.");

}

//let i=0;

submitBtn.addEventListener("click", ()=> {
    //check answer
    const answer = getSelected();

    console.log("function getSelected() is running.");

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        
        if (currentQuiz < quizData.length) {

            loadQuiz();

        } else {
            quiz.innerHTML = `<h2>Your score ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">repeat quiz</button>
            `;     
        }
        
        

        /*
            for(let i=0; i < (quizData.length +1); i++) {
                loadQuiz();

                if (i == quizData.length) {
                quiz.innerHTML = `<h2>Your score ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">repeat quiz</button>
                `;     
                }
            }

          */
         
            /*
            do{

                loadQuiz();
                i++;
            }while(i<quizData.length)
            */
    }
});

//insta @codecrooksshanks 