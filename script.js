const quizData = [
  {
    question: "تعداد گل های علی دایی در جام جهانی؟؟؟",
    a: "109",
    b: "101",
    c: "89",
    d: "81",
    correct: "a",
  },
  {
    question: "بهترین بازیکن این فصل شیاطین سرخ؟؟؟",
    a: "کریستیانو رونالدو",
    b: "برونو فرناندز",
    c: "هری مگوایر",
    d: "داوید دخیا",
    correct: "c",
  },
  {
    question: "کره زمین چند قمر دارد؟؟؟",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "a",
  },
  {
    question: "پایتخت چین کدام شهر میباشد؟؟؟",
    a: "سئول",
    b: "توکیو",
    c: "هنگ کنگ",
    d: "پکن",
    correct: "d",
  },
  {
    question: "تعداد اعداد اول یک رقمی؟؟؟",
    a: "3",
    b: "5",
    c: "6",
    d: "4",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const question = document.getElementById("question_text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuiz = quizData[currentQuestion];
  question.innerHTML = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>تعداد پاسخ درست : ${score}</h2>
      <button id="btn" onclick="location.reload()">شروع مجدد</button>`;
    }
  }
});
