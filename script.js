const questions = [
    {
        question: "O que você faz ao ver um derramamento de óleo no chão?",
        options: ["Ignora e continua trabalhando", "Relata à equipe e sinaliza o local", "Limpa sem EPI"],
        correctAnswer: 1,
        feedback: "Correto! Relatar e sinalizar é a melhor opção para evitar acidentes."
    },
    {
        question: "Você percebe que uma máquina está com defeito. O que fazer?",
        options: ["Continua usando", "Avisa ao supervisor e interrompe o uso", "Pede para um colega tentar consertar"],
        correctAnswer: 1,
        feedback: "Exato! Interromper o uso e avisar é a atitude segura."
    },
    {
        question: "O alarme de incêndio toca, o que fazer?",
        options: ["Ignora", "Sai do prédio rapidamente e avisa os demais", "Espera instruções no local"],
        correctAnswer: 1,
        feedback: "Correto! Evacuar imediatamente e avisar os outros é a ação mais segura."
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-question").style.display = "none";
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("option1").textContent = questionData.options[0];
    document.getElementById("option2").textContent = questionData.options[1];
    document.getElementById("option3").textContent = questionData.options[2];
}

function answer(selectedOption) {
    const questionData = questions[currentQuestion];
    if (selectedOption === questionData.correctAnswer) {
        score += 10;
        document.getElementById("feedback").textContent = questionData.feedback;
    } else {
        document.getElementById("feedback").textContent = "Resposta incorreta. Tente novamente!";
    }
    document.getElementById("score").textContent = `Pontuação: ${score}`;
    document.getElementById("next-question").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = "<h2>Parabéns, você completou a gincana!</h2>";
        document.getElementById("next-question").style.display = "none";
    }
}

loadQuestion();