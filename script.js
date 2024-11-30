const questions = [
    {
      question: "Quando foi nosso primeiro beijo?",
      options: ["Dia 25 de setembro", "Dia 15 de setembro", "Dia 18 de outubro"],
      answer: "Dia 25 de setembro"
    },
    {
      question: "Quando ocorreu o pedido do nosso namoro?",
      options: ["Dia 20 de setembro", "Dia 18 de setembro", "Dia 10 de agosto"],
      answer: "Dia 18 de setembro"
    },
    {
      question: "Qual foi o primeiro buquê de flores que eu te dei?",
      options: ["Rosas", "Girassóis", "Margaridas"],
      answer: "Rosas"
    },
    {
      question: "Qual foi o dia em que eu te dei o primeiro buquê?",
      options: ["25 de outubro", "20 de novembro", "15 de setembro"],
      answer: "25 de outubro"
    },
    {
      question: "Qual foi o primeiro presente que eu te dei?",
      options: ["Um colar escrito 'eu te amo'", "Um ursinho de pelúcia", "Uma carteira"],
      answer: "Um colar escrito 'eu te amo'"
    },
    {
      question: "Quem disse 'eu te amo' primeiro, Lanah ou Victor?",
      options: ["Lanah", "Victor"],
      answer: "Lanah"
    },
    {
      question: "Quem ama mais, Victor ou Lanah?",
      options: ["Victor", "Lanah"],
      answer: "Victor"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startButton = document.getElementById("start-btn");
  const quizSection = document.getElementById("quiz");
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const feedbackContainer = document.getElementById("feedback");
  const resultSection = document.getElementById("result");
  const scoreMessage = document.getElementById("score-message");
  const restartButton = document.getElementById("restart-btn");
  const surpriseMessageSection = document.getElementById("surprise-message");
  
  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);
  
  function startGame() {
    document.getElementById("start-screen").classList.add("hidden");
    quizSection.classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";
    feedbackContainer.classList.add("hidden");
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.answer) {
      score++;
      showFeedback("Acertou! ✅", "correct");
    } else {
      showFeedback("Errou! ❌", "incorrect");
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => showQuestion(), 1000);
    } else {
      setTimeout(() => showResult(), 1000);
    }
  }
  
  function showFeedback(message, type) {
    feedbackContainer.innerText = message;
    feedbackContainer.classList.remove("hidden", "correct", "incorrect");
    feedbackContainer.classList.add(type);
  }
  
  function showResult() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
  
    if (score === questions.length) {
      scoreMessage.innerText = `Parabéns! Você acertou todas as perguntas! 💖`;
    } else {
      scoreMessage.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
    }
  
    surpriseMessageSection.classList.remove("hidden");
  }
  
  function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultSection.classList.add("hidden");
    surpriseMessageSection.classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
  }
  