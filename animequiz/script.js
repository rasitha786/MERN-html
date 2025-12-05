const quizData = [
    {
        question: "Who is the main protagonist of 'Naruto'?",
        options: ["Sasuke Uchiha", "Naruto Uzumaki", "Kakashi Hatake", "Sakura Haruno"],
        correct: 1
    },
    {
        question: "What is the name of the notebook in 'Death Note'?",
        options: ["Life Note", "Death Note", "Kill Book", "Dark Diary"],
        correct: 1
    },
    {
        question: "In 'One Piece', what is Luffy's dream?",
        options: ["To be Hokage", "To be Pirate King", "To find treasure", "To defeat all pirates"],
        correct: 1
    },
    {
        question: "What is the name of the titan-shifting protagonist in 'Attack on Titan'?",
        options: ["Levi Ackerman", "Armin Arlert", "Eren Yeager", "Mikasa Ackerman"],
        correct: 2
    },
    {
        question: "In 'My Hero Academia', what is the name of the main character?",
        options: ["Katsuki Bakugo", "Shoto Todoroki", "Izuku Midoriya", "All Might"],
        correct: 2
    },
    {
        question: "What is the name of the virtual reality game in 'Sword Art Online'?",
        options: ["Virtual World", "Sword Art Online", "Game of Death", "Reality Quest"],
        correct: 1
    },
    {
        question: "In 'Dragon Ball Z', what is Goku's Saiyan name?",
        options: ["Vegeta", "Kakarot", "Raditz", "Bardock"],
        correct: 1
    },
    {
        question: "What is the name of the demon slayer corps in 'Demon Slayer'?",
        options: ["Demon Hunters", "Slayer Corps", "Demon Slayer Corps", "Hashira"],
        correct: 2
    },
    {
        question: "In 'Fullmetal Alchemist', what are the brothers trying to find?",
        options: ["Gold", "Philosopher's Stone", "Magic Ring", "Dragon Balls"],
        correct: 1
    },
    {
        question: "What is the name of the main character in 'Tokyo Ghoul'?",
        options: ["Ken Kaneki", "Touka Kirishima", "Hideyoshi Nagachika", "Kishou Arima"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const questionNumberEl = document.getElementById('question-number');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const finalScoreEl = document.getElementById('final-score');
const resultMessageEl = document.getElementById('result-message');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    selectedAnswer = null;
    const question = quizData[currentQuestion];
    
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => selectAnswer(index, optionEl));
        optionsEl.appendChild(optionEl);
    });
    
    updateProgress();
    updateInfo();
}

function selectAnswer(index, optionEl) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = index;
    const correctAnswer = quizData[currentQuestion].correct;
    
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.add('disabled'));
    
    if (index === correctAnswer) {
        optionEl.classList.add('correct');
        score++;
        scoreEl.textContent = `Score: ${score}`;
    } else {
        optionEl.classList.add('wrong');
        allOptions[correctAnswer].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressEl.style.width = progress + '%';
}

function updateInfo() {
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    scoreEl.textContent = `Score: ${score}`;
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const percentage = (score / quizData.length) * 100;
    finalScoreEl.textContent = `${score} / ${quizData.length}`;
    
    let message = '';
    if (percentage === 100) {
        message = '🏆 Perfect! You\'re an anime master!';
    } else if (percentage >= 70) {
        message = '🌟 Great job! You know your anime!';
    } else if (percentage >= 50) {
        message = '👍 Not bad! Keep watching!';
    } else {
        message = '📺 Time to watch more anime!';
    }
    
    resultMessageEl.textContent = message;
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    score = 0;
    currentQuestion = 0;
}
