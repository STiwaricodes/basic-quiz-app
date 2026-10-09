const questions = [
  {
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "Home Tool", "High Markup", "None"],
    answer: 0,
  },

  {
    question: "CSS used for?",
    options: ["Design", "Database", "Server", "API"],
    answer: 0,
  },

  {
    question: "JavaScript is?",
    options: ["Programming Language", "Database", "OS", "Browser"],
    answer: 0,
  },

  {
    question: "React is?",
    options: ["Library", "Database", "Language", "Editor"],
    answer: 0,
  },

  {
    question: "Which tag creates link?",
    options: ["a", "h1", "div", "img"],
    answer: 0,
  },
];

let current = 0;

let score = 0;

let selected = [];

let timer = 60;

let interval;

let quiz = [];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  quiz = shuffle([...questions]);

  document.getElementById("startScreen").classList.add("hide");

  document.getElementById("quizScreen").classList.remove("hide");

  loadQuestion();

  startTimer();
}

function loadQuestion() {
  let q = quiz[current];

  document.getElementById("question").innerText =
    `${current + 1}. ${q.question}`;

  let options = "";

  q.options.forEach((opt, index) => {
    options += `
<div class="option
${selected[current] === index ? "selected" : ""}"
onclick="selectOption(${index})"
>
${opt}
</div>
`;
  });

  document.getElementById("options").innerHTML = options;

  updateProgress();
}

function selectOption(index) {
  selected[current] = index;

  loadQuestion();
}

function nextQuestion() {
  if (current < quiz.length - 1) {
    current++;

    loadQuestion();
  } else {
    finishQuiz();
  }
}

function previousQuestion() {
  if (current > 0) {
    current--;

    loadQuestion();
  }
}

function updateProgress() {
  let p = ((current + 1) / quiz.length) * 100;

  document.getElementById("progress").style.width = `${p}%`;
}

function startTimer() {
  interval = setInterval(() => {
    timer--;

    document.getElementById("timer").innerText = timer;

    if (timer === 0) {
      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(interval);

  score = 0;

  quiz.forEach((q, index) => {
    if (selected[index] === q.answer) {
      score++;
    }
  });

  document.getElementById("quizScreen").classList.add("hide");

  document.getElementById("resultScreen").classList.remove("hide");

  document.getElementById("score").innerText = `Score:
${score}
/
${quiz.length}`;
}
