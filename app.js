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
      image: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/17F9C/production/_102540289_modric_mbappe.jpg",
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
      image: "https://www.racquetpoint.com/cdn/shop/articles/badminton-the-ultimate-guide-to-the-racquet-sport-460186.jpg?v=1741601376&width=2048",
      answers: [
        { text: "Tennis", correct: false },
        { text: "Badminton", correct: true },
        { text: "Volleyball", correct: false },
        { text: "Cricket", correct: false }
      ]
    },
    {
      question: "What do the rings in the Olympics represent?",
      image: "https://content.quizzclub.com/trivia/2019-09/c-hto-simvoliziruyut-pyat-olimpijskih-kolec.jpg",
      answers: [
        { text: "Kinds of sports", correct: false },
        { text: "Five continents", correct: true },
        { text: "Natural elements", correct: false },
        { text: "Five great athletes", correct: false }
      ]
    },
    {
      question: "Which sport is known as the 'king of sports'?",
      image: "https://mybtoys.com/wp-content/uploads/BX2348_LS_N.jpg",
      answers: [
        { text: "Basketball", correct: false },
        { text: "Cricket", correct: false },
        { text: "Football (Soccer)", correct: true },
        { text: "Baseball", correct: false }
      ]
    }
  ],

  "Movies": [
    {
      question: "Who directed the movie 'Inception'?",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Christopher_Nolan_Cannes_2018.jpg",
      answers: [
        { text: "Christopher Nolan", correct: true },
        { text: "Steven Spielberg", correct: false },
        { text: "James Cameron", correct: false },
        { text: "Quentin Tarantino", correct: false }
      ]
    },
    {
      question: "Which movie won Best Picture at the Oscars in 2020?",
      image: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      answers: [
        { text: "Joker", correct: false },
        { text: "Parasite", correct: true },
        { text: "1917", correct: false },
        { text: "Ford v Ferrari", correct: false }
      ]
    },
    {
      question: "Which actor played the Joker in 'The Dark Knight'?",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
      answers: [
        { text: "Heath Ledger", correct: true },
        { text: "Joaquin Phoenix", correct: false },
        { text: "Jared Leto", correct: false },
        { text: "Jack Nicholson", correct: false }
      ]
    },
    {
      question: "What is the highest-grossing movie of all time (as of 2025)?",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Avengers_Endgame_poster.jpg",
      answers: [
        { text: "Avengers: Endgame", correct: true },
        { text: "Avatar", correct: false },
        { text: "Titanic", correct: false },
        { text: "The Lion King", correct: false }
      ]
    },
    {
      question: "What movie is this quote from: 'I'll be back'?",
      image: "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
      answers: [
        { text: "The Terminator", correct: true },
        { text: "Die Hard", correct: false },
        { text: "RoboCop", correct: false },
        { text: "Predator", correct: false }
      ]
    }
  ],
};

const categories = Object.keys(quizData);
let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;
let gameOver = false;

const frontPage = document.getElementById("front-page");
const instructionsPage = document.getElementById("instructions-page");
const quizContainer = document.getElementById("quiz-container");

const startBtn = document.getElementById("start-btn");
const beginQuizBtn = document.getElementById("begin-quiz-btn");

const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");
const imageElement = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");

const nextButton = document.createElement("button");
nextButton.id = "next-btn";
nextButton.innerText = "Next";
quizContainer.appendChild(nextButton);
nextButton.style.display = "none";


startBtn.addEventListener("click", () => {
  frontPage.classList.add("hidden");
  instructionsPage.classList.remove("hidden");
});

beginQuizBtn.addEventListener("click", () => {
  instructionsPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startQuiz();
});


function startQuiz() {
  currentLevel = 0;
  currentQuestionIndex = 0; 
  score = 0;
  scoreElement.innerText = `Score: ${score}`;
  nextButton.innerText = "Next";
  nextButton.style.display = "none";
  gameOver = false;  
  startLevel();
}

function startLevel() {
  currentQuestionIndex = 0;

  const currentCategory = categories[currentLevel];
  const levelMessage = document.getElementById("level-message");
  levelMessage.innerText = `🔔 Level ${currentLevel + 1} - ${currentCategory} Starting...`;
  levelMessage.classList.remove("hidden");
  quizContainer.classList.add("hidden");

  nextButton.innerText = "Next";
  nextButton.style.display = "none";

  setTimeout(() => {
    levelMessage.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
    startTimer();
  }, 2000); 
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
  timerElement.style.color = "#000"; 
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
    if (timeLeft <= 0) {
      timerElement.innerText = `Time: 0s`;
      clearInterval(timerInterval);

      questionElement.innerText = "⏰ Time is up! Game Over!";
      imageElement.style.display = "none";

      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });

      nextButton.innerText = "Play Again";
      nextButton.style.display = "inline-block";

      gameOver = true; 

      return;
    }

    timerElement.innerText = `Time: ${timeLeft}s`;

    if (timeLeft <= 10) {
      timerElement.style.color = "#e74c3c";
    } else {
      timerElement.style.color = "#000";
    }

    timeLeft--;
  }, 2000);
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

  gameOver = true; 
}

nextButton.addEventListener("click", () => {
  if (gameOver) {
    startQuiz();
    gameOver = false; 
  } else {
    handleNextButton();
  }
});
