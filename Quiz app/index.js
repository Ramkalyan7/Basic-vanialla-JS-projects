const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

//to do
//display data on the ui
//on clicking button show next question

const questionEl = document.getElementById("question");
const optionA = document.getElementById("option_A");
const optionB = document.getElementById("option_B");
const optionC = document.getElementById("option_C");
const optionD = document.getElementById("option_D");
const nextButton = document.getElementById("next-btn");
const answerEls = document.querySelectorAll(".answer");
const quizContainer = document.getElementsByClassName("quiz-container")[0];
let qNo = 0;
let marks = 0;

function showQuestion(qNo) {
  questionEl.innerHTML = quizData[qNo].question;
  optionA.innerHTML = quizData[qNo].a;
  optionB.innerHTML = quizData[qNo].b;
  optionC.innerHTML = quizData[qNo].c;
  optionD.innerHTML = quizData[qNo].d;
}

showQuestion(qNo);

nextButton.addEventListener("click", () => {
  if (nextButton.innerHTML === "Try Again") {
    document.location.reload();
  }
  if (qNo === quizData.length - 2) {
    nextButton.innerHTML = "Finish";
    console.log("what the fuck ");
  }
  let selectedAnswer = getSelectedAnswer();

  clearAnswer();
  if (selectedAnswer === quizData[qNo].correct) {
    marks++;
  }

  if (qNo < quizData.length - 1) {
    ++qNo;
    showQuestion(qNo);
  } else {
    quizContainer.innerHTML = `<h1> You have answered ${marks} out of ${quizData.length} questions correctly</h1>`;
    nextButton.innerHTML = "Try Again";
  }
});

//to do
//show finish if the question is last
//calculate marks
//show marks after finishing
//show button to restart the exam

function getSelectedAnswer() {
  let selectedAnswer;

  answerEls.forEach((element) => {
    if (element.checked) {
      selectedAnswer = element.id;
    }
  });

  return selectedAnswer;
}

function clearAnswer() {
  answerEls.forEach((element) => {
    element.checked = false;
  });
}
