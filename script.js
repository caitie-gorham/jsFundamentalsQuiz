// create the start button variable
var startBtn = document.querySelector("#startbtn");

// add variables globally so they can be used in other functions
var timeLeft = 100;
var timer;

// start timer on Start Button click
startBtn.addEventListener("click", function(){
  timer = setInterval(function(){
      document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
      timeLeft -= 1;
      console.log(timeLeft)
      if(timeLeft <=0) {
          clearInterval(timer);
          document.getElementById("timer").innerHTML = "Game over"
      }
  },1000)}
);

// show the quiz container when you click the start button
startBtn.addEventListener("click", function(){
  document.getElementById("quizContainer").style.display = "block";
})

// function entireQuiz contains all functions related to showing quiz questions, deciding on correct answer, and ending quiz
function entireQuiz(){
  // first function: display the quiz questions 
  function quizDisplay(){
    var out = [];
    questionChoice.forEach(function(currentQuestion, questionNum){
        var answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            // use template literal to create question and answers display after a radio button
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

  // second function: decide if the user has selected the correct answer and display what their score is
  function showResults(){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    questionChoice.forEach(function(currentQuestion, questionNum) {
      var answerContainer = answerContainers[questionNum];
      var selector = `input[name=question${questionNum}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
      }
      else {
        timeLeft -= 5;
        document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
      }
    });

    var score = (numCorrect/questionChoice.length)*100;
    console.log(score);

    clearInterval(timer);
    resultsContainer.innerHTML = `You answered ${numCorrect} out of ${questionChoice.length} questions correctly`;
    
  }

  // third function: allows only one question to be displayed at a time 
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

  // the next two funtions enable the next and previous buttons to actually show the next and previous questions
  function showNextcard() {
    showcard(currentcard + 1);
  }
  
  function showPreviouscard() {
    showcard(currentcard - 1);
  }

// create variables for the main content containers and the submit button
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('counter');
var submitButton = document.getElementById('submit');


// array of questions and answers
var questionChoice = [
    {
      question: "Question One Text",
      answers: {
        a: "answerone",
        b: "answertwo",
        c: "answerthree"
      },
      correctAnswer: "a"
    },
    {
      question: "Question Two Text",
      answers: {
        a: "answerone",
        b: "answertwo",
        c: "answerthree"
      },
      correctAnswer: "a"
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

// call the overall quiz function
quizDisplay();

// create the variables for the previous and next buttons and card/current card
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var cards = document.querySelectorAll(".card");
let currentcard = 0;

// call function to show the correct carad
showcard(currentcard);

//  click events for the submit and previous/next buttons
submitButton.addEventListener('click', showResults);
prevButton.addEventListener("click", showPreviouscard);
nextButton.addEventListener("click", showNextcard);
}



 
// kicks off the entire quiz
startBtn.addEventListener("click", entireQuiz)

var submitButton = document.getElementById('submit');

// final step: show the form to log high scores when the user clicks "submit button"
submitButton.addEventListener("click", function(){
  document.getElementById("form").style.display = "block"
  document.getElementById("quizContainer").style.display = "none"
  var scoreContainer = document.getElementById('score');
  scoreContainer.innerHTML = score.value;
  console.log(scoreContainer);
})


// still need to add function to save high score to local storage
// still need to add funtion that writes highest score to the html
// still need to add function that stops the quiz if the time runs out
// still need to add function that subtracts time from quiz if user gets question wrong



