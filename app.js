const questions = [
  {
    question: "What is the capital of France?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/320px-Tour_Eiffel_Wikimedia_Commons.jpg",
    answers: [
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/320px-Shakespeare.jpg",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Leo Tolstoy", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Charles Dickens", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which ocean is the largest?",
    image: "https://cicloud.imgix.net/images/default-source/default-album/ci_63002536.jpg?sfvrsn=ec76b4ce_10&&auto=compress&auto=format&fit=crop&w=1440&h=900",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true }
    ]
  },
  {
    question: "Which artist painted the Mona Lisa?",
    image: "https://cdn.britannica.com/87/2087-050-8B2A01CD/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent Van Gogh", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  }
];

const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const imageElement = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = `Score: ${score}`;
  nextButton.style.display = "none";
  showQuestion();
  startTimer();
}

function showQuestion() {
  resetState();
  timeLeft = 30;
  timerElement.innerText = `Time: ${timeLeft}s`;
  clearInterval(timerInterval);
  startTimer();

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  if (currentQuestion.image) {
    imageElement.src = currentQuestion.image;
    imageElement.style.display = "block"; 
  } else {
    imageElement.src = "";
    imageElement.style.display = "none"; 
  }

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  clearInterval(timerInterval);
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score+=10;
    scoreElement.innerText = `Score: ${score}`;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  clearInterval(timerInterval);
  nextButton.style.display = "inline-block";
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "inline-block";
    }
  }, 1000);
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  imageElement.src = "";
  timerElement.innerText = "";
  nextButton.innerText = "Play Again";
  nextButton.style.display = "inline-block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
    nextButton.innerText = "Next";
  }
});

startQuiz();



