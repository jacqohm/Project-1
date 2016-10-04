$(document).ready(function() {
  $("#quiz").hide();
});

$("#start_quiz").click(function() {
	$('.welcome_box').hide();
	$('.player_box').show();
});

// $("#submitNameBtn").click(function() {
// 	$('.player_box').hide();
//   $('#quiz').show();
// });

var quiz = document.getElementById("quiz");
var askQuestion = document.getElementById("askQuestion");
console.log(typeof(askQuestion))
var submitBtn = document.getElementById("submitButton");
var player1_name;
var player2_name;
var checkedRadio;
var allRadios;
var counter = 0;
var qnsNum;
var score;
var numberOfQues= 10;

var questions = [
  {
    question: "Snape's Patronus takes the form of what animal?",
    choices: ["Snake", "Doe", "Serpent", "Stag"],
    correct: 1
  },
  {
    question: "Who did Harry Potter bring to the Yule Ball?",
    choices: ["Cho Chang", "Ginny Weasley", "Parvati Patil", "Padma Patil"],
    correct: 2
  },
  {
    question: "What type of car did Mr. Weasley bewitch to fly?",
    choices: ["Ford Anglia", "Triumph Twelve", "Mustang", "Ford Angela"],
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
    question: "What is Dumbledore's sister's name?",
    choices: ["Ariene", "Arianne", "Alenna", "Ariana"],
    correct: 3
  },
  {
    question: "What is the magical core of Harry's wand?",
    choices: ["Dragon's Blood", "Pheonix Tail Feather", "Pheonix Tears", "Unicorn Hair"],
    correct: 1
  },
  {
    question: "What name did Hagrid gave his pet dragon?",
    choices: ["Sorbet", "Nugget", "Norbert", "Noburt"],
    correct: 2
  },
  {
    question: "What was Harry given by Professor Lupin after the first summoning of a Patronus?",
    choices: ["Chocolate", "Chocolate Frog", "A frog", "Nothing"],
    correct: 1
  },
  {
    question: "What is the correct incantation of a Levitation Charm?",
    choices: ["Wingadam Leviosa", "Wingardum Levosa", "Wingardium Levieosa", "Wingardium Leviosa"],
    correct: 3
  }
];

// You will need to declare the following functions:
function numberOfQuestions() {
	return questions.length;
}

function currentQuestion(){
	if (counter < 10) {
    console.log("hello")
    qnsNum = Math.round(Math.random() *10);
    console.log(qnsNum);
        askQuestion.innerHTML = questions[qnsNum].question;
        for (var k = 0; k < 10; k++) {
            document.getElementById("answer" + k).innerHTML = questions[qnsNum].choices[k];
            document.getElementById("answer" + k).setAttribute("for", questions[qnsNum].choices[k]);
            document.getElementById("label" + k).setAttribute("value", questions[qnsNum].choices[k]);
        }
    }
}

$("#submitNameBtn").click(function() {
  $('.player_box').hide();
  $('#quiz').show();
	player1_name = $('#inputsm-p1').val();
  // console.log('check', player1_name);
	player2_name = $('#inputsm-p2').val();
	$('#playerName').html(player1_name);
  currentQuestion();
  console.log(currentQuestion());
});

$("#submitButton").click(function() {
  console.log('hello i am called');
})
//enable submit button to click and go to Next Player!!!!
//Player 2's turn automatically
//check correct answer?
//add on score
//add on Qns Number

// submitBtn.addEventListener("click", function() {
//     allRadios = document.getElementsByName("option");
//     var isChecked = false;
//     for (var j = 0; j < allRadios.length; j++) {
//         if (allRadios[j].checked) {
//             isChecked = true;
//             checkedRadio = j;
//         }
//     }
//     if (!(isChecked)) {
//         alert("Please select an answer before moving on");
//     } else {
//         getResults();
//         counter++;
//         displayQnsNum.innerHTML = counter;
//         currentQuestion();
//     }
// });

//to check for results
//get player 1 score compare with player 2
function getResults() {
  if (allRadios[checkedRadio].value === questions[qnsNum].choices[questions[qnsNum].correct]) {
    score++;
    displayScore.innerHTML = score;
  }
}
