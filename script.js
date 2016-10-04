$(document).ready(function() {
  $("#quiz").hide();
});

$("#start_quiz").click(function() {
	$('.welcome_box').hide();
	$('.player_box').show();
});

$("#submitNameBtn").click(function() {
	$('.player_box').hide();
  $('#quiz').show();
  // $('askQuestion').text('hi');
});

var quiz = document.getElementById("quiz");
var askQuestion = document.getElementById("askQuestion");
var submitBtn = document.getElementById("submitBtn");
var checkedRadio;
var allRadios;
var i;
var score;
var numberOfQues= 10;

var questions = [
  {
    question: "Snape's Patronus takes the form of what animal?",
    choices: ["Snake", "Doe", "Serpent", "Stag"],
    correct: 1
  },
  {
    question: "Who did Harry Potter bring Yule Ball?",
    choices: ["Cho Chang", "Ginny Weasley", "Parvati Patil", "Padma Patil"],
    correct: 2
  },
  {
    question: "What type of car did Mr. Weasley bewitch to fly?",
    choices: ["Ford Anglia", "Triumph Twelve", "Hillman Minx", "Humber Super Snipe"],
    correct: 0
  },
  {
    question: "What is the name of Ron's pet rat?",
    choices: ["Scuffles", "Scrabbles", "Pebbles", "Shuffles"],
    correct: 1
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  },
  {
    question: "Who slain Lord Voldermort's last Horcrux - Nagini?",
    choices: ["Hagrid", "Ron Weasley", "Harry Potter", "Neville Longbottom"],
    correct: 3
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  }
];

$( document ).ready(function() {
	i=0;
    currentQuestion();
	console.log(correctAnswer());
});

// You will need to declare the following functions:
function numberOfQuestions() {
	return questions.length;
}
// It should return an integer that is the number of questions in a game

function currentQuestion(){
	if (i < 10) {
        askQuestion.innerHTML = questions[i].question;
        for (var k = 0; k < 4; k++) {
            document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
            document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
            document.getElementById("label" + k).setAttribute("value", questions[i].choices[k]);
        }
    }
	return i;
}
// It should return an integer that is the zero-based index of the current question in the quiz

function correctAnswer(){
	return questions[currentQuestion()].correct;
}
// It should return an integer that is the zero-based index the correct answer for the currrent question

function numberOfChoices(){
}

// It should return an integer that is the number of choices for the current question
playTurn(choice)

// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.
isGameOver()

// It should return a true or false if the quiz is over.
whoWon()

// It should return 0 if the game is not yet over, else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.
restart()
