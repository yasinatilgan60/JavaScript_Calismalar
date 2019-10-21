// DERS; QUIZ APP UYGULAMA

function Question(text, choices, answer) {
    this.text = text,
    this.choices = choices,
    this.answer = answer
}

// Question prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}
// Soruları yönetecek olan QUIZ CONSTRUCTOR
var q1 = new Question("what's the best programming language ?", ["C#", "Python", "JavaScript", "C++"], "JavaScript");

var q2 = new Question("what's the most popular language ?", ["C#", "JavaScript", "Pascal", "Ruby"], "JavaScript");

var q3 = new Question("what's the best modern programming language ?", ["C#", "JavaScript", "Pascal", "Ruby"], "JavaScript");
var questions = [q1, q2, q3];
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex;
}

// Quiz guess ; gelecek soru ve cevap ile ilgili işlemleri yapan fonksiyon.
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

// Start quiz
var quiz = new Quiz(questions);
//  console.log(quiz.isFinish());
//  console.log(quiz.getQuestion());
//  quiz.guess('JavaScript');
//  console.log(quiz.getQuestion());
//  quiz.guess('JavaScript');
//  console.log(quiz.getQuestion());
//  quiz.guess('JavaScript');
//  console.log(quiz.score);
//  console.log(quiz.isFinish());


// console.log(q1.checkAnswer('c#')); false
// console.log(q2.checkAnswer('JavaScript')); true

// Start Quiz


function loadQuestion() {
    if (quiz.isFinish()) {
        showScore();
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector("#question").textContent = question.text;
        for (var i = 0; i < choices.length; i++) {
            document.querySelector(`#choice${i}`).textContent = choices[i];
            guess('btn' + i, choices[i]);
        }
    }
    showProgress();
}
loadQuestion();
function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion();
    }
}
function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML = html;
}
function showProgress() {
    if (quiz.isFinish()) {
        document.querySelector('#progress').textContent = "Quiz is completed.";
    } else {
        document.querySelector('#progress').textContent = 'Question ' + (quiz.questionIndex + 1) + ' of ' + this.questions.length;
    }
}


