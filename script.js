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
            `<div class="slide">
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
        // add a function that decreases the amount of time available - STILL NEED TO DO
      }
    });

    resultsContainer.innerHTML = `You answered ${numCorrect} out of ${questionChoice.length} questions correctly`;
  }

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if(currentSlide === 0){
      prevButton.style.display = 'none';
    }
    else{
      prevButton.style.display = 'inline-block';
    }
    
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

function showNextSlide() {
    showSlide(currentSlide + 1);
}
  
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('counter');
var submitButton = document.getElementById('submit');

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
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
}

var startBtn = document.querySelector("#startbtn");
 
startBtn.addEventListener("click", entireQuiz)

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
       }
   },1000)}
);



