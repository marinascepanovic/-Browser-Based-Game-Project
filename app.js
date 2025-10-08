const quizData = {
  "General Knowledge": [
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
  ],
  "Sports": [
    {
      question: "Which country won the FIFA World Cup in 2018?",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_France.svg/320px-Flag_of_France.svg.png",
      answers: [
        { text: "Brazil", correct: false },
        { text: "Germany", correct: false },
        { text: "France", correct: true },
        { text: "Croatia", correct: false }
      ]
    },
    {
      question: "How many players are on a basketball team on the court?",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png",
      answers: [
        { text: "5", correct: true },
        { text: "6", correct: false },
        { text: "7", correct: false },
        { text: "4", correct: false }
      ]
    },
    {
      question: "Which sport uses a shuttlecock?",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Shuttlecock.jpg/320px-Shuttlecock.jpg",
      answers: [
        { text: "Tennis", correct: false },
        { text: "Badminton", correct: true },
        { text: "Volleyball", correct: false },
        { text: "Cricket", correct: false }
      ]
    },
    {
      question: "What sport does Serena Williams play?",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Serena_Williams_Aus_Open_2015.jpg/320px-Serena_Williams_Aus_Open_2015.jpg",
      answers: [
        { text: "Golf", correct: false },
        { text: "Tennis", correct: true },
        { text: "Basketball", correct: false },
        { text: "Soccer", correct: false }
      ]
    },
    {
      question: "Which sport is known as the 'king of sports'?",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Soccer_ball.svg/320px-Soccer_ball.svg.png",
      answers: [
        { text: "Basketball", correct: false },
        { text: "Cricket", correct: false },
        { text: "Football (Soccer)", correct: true },
        { text: "Baseball", correct: false }
      ]
    }
  ],
  // Add more levels like Music, Science, Movies here...
};

const categories = Object.keys(quizData);
let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const imageElement = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");

const nextButton = document.createElement("button");
nextButton.id = "next-btn";
nextButton.innerText = "Next";
document.body.appendChild(nextButton);
nextButton.style.display = "none";

function startQuiz() {
  currentLevel = 0;
  score = 0;
  scoreElement.innerText = `Score: ${score}`;
  nextButton.innerText = "Next";
  nextButton.style.display = "none";
  startLevel();
}

function startLevel() {
  currentQuestionIndex = 0;
  showQuestion();
  startTimer();
}

function showQuestion() {
  resetState();
  const currentCategory = categories[currentLevel];
  const currentQuestion = quizData[currentCategory][currentQuestionIndex];

  timeLeft = 30;
  timerElement.innerText = `Time: ${timeLeft}s`;
  clearInterval(timerInterval);
  startTimer();

  questionElement.innerText = `${currentCategory} - ${currentQuestion.question}`;

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
    if (answer.correct) button.dataset.correct = "true";
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
    score += 10;
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


function handleNextButton() {
  currentQuestionIndex++;
  const currentCategory = categories[currentLevel];

  if (currentQuestionIndex < quizData[currentCategory].length) {
    showQuestion();
  } else {
    currentLevel++;
    if (currentLevel < categories.length) {
      startLevel();
    } else {
      showFinalScore();
    }
  }
}

function showFinalScore() {
  resetState();
  questionElement.innerText = `🎉 Quiz Completed!`;
  imageElement.style.display = "none";
  timerElement.innerText = "";
  scoreElement.innerText = `Final Score: ${score} / ${categories.length * 50}`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
  const currentCategory = categories[currentLevel] || "";
  const isLevelDone = currentQuestionIndex >= (quizData[currentCategory]?.length || 0);

  if (isLevelDone && currentLevel >= categories.length) {
    startQuiz();
  } else {
    handleNextButton();
  }
});

// Start the game
startQuiz();



