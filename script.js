var startBtn = document.querySelector("#startbtn");

startBtn.addEventListener("click", function(){
  //  start the timer
  var timeLeft = 100;
  var timer = setInterval(function(){
      document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
      timeLeft -= 1;
      console.log(timeLeft)
      if(timeLeft <=0) {
          clearInterval(timer);
          document.getElementById("timer").innerHTML = "Game over"
          showResults()
      }
  },1000)}
);

startBtn.addEventListener("click", function(){
  document.getElementById("quizContainer").style.display = "block"
})

function entireQuiz(){
  function quizDisplay(){
    var out = [];
    questionChoice.forEach(function(currentQuestion, questionNum){
        var answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNum}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        out.push(
            `<div class="card">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = out.join('');
  }

  function showResults(){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    questionChoice.forEach( function(currentQuestion, questionNum) {
      var answerContainer = answerContainers[questionNum];
      var selector = `input[name=question${questionNum}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
      }
      else{
        // Need script here to deduct time from timer
      }
    });

    var score = (numCorrect/questionChoice.length)*100;
    console.log(score);

    resultsContainer.innerHTML = `You answered ${numCorrect} out of ${questionChoice.length} questions correctly`;
  }

function showcard(n) {
    cards[currentcard].classList.remove('active-card');
    cards[n].classList.add('active-card');
    currentcard = n;
    
    if(currentcard === 0){
      prevButton.style.display = 'none';
    }
    else{
      prevButton.style.display = 'inline-block';
    }
    
    if(currentcard === cards.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

function showNextcard() {
    showcard(currentcard + 1);
}
  
function showPreviouscard() {
    showcard(currentcard - 1);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('counter');
var submitButton = document.getElementById('submit');
var scoreContainer = document.getElementById('score');

var questionChoice = [
    {
      question: "Question One Text",
      answers: {
        a: "answerone",
        b: "answertwo",
        c: "answerthree"
      },
      correctAnswer: "c"
    },
    {
      question: "Question Two Text",
      answers: {
        a: "answerone",
        b: "answertwo",
        c: "answerthree"
      },
      correctAnswer: "c"
    },
    {
      question: "Question Three Text",
      answers: {
        a: "answerone",
        b: "answertwo",
        c: "answerthree"
      },
      correctAnswer: "a"
    }
  ];

quizDisplay();

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var cards = document.querySelectorAll(".card");
let currentcard = 0;

showcard(currentcard);

submitButton.addEventListener('click', showResults);
prevButton.addEventListener("click", showPreviouscard);
nextButton.addEventListener("click", showNextcard);
}



 
startBtn.addEventListener("click", entireQuiz)

var submitButton = document.getElementById('submit');
submitButton.addEventListener("click", function(){
  document.getElementById("form").style.display = "block"
  document.getElementById("quizContainer").style.display = "none"
})



