 var startBtn = document.querySelector("#startbtn");
 startBtn.addEventListener("click", function(){
    //  start the timer
    var timeLeft = 59
    var timer = setInterval(function(){
        document.getElementById("counter").innerHTML = timeLeft + " seconds remaining";
        timeLeft = timeLeft - 1;
        if(timeLeft <=0) {
            clearInterval(timer);
            document.getElementById("counter").innerHTML = "Game over"
        }
    },1000);
startBtn.addEventListener("click", function(){
    var questionOptions = [{
        question: "Question text here",
        answers: ["answer1","answer2","answer3","answer4"],
        correctAnswer: 0,
    }, {
        question: "Question text here",
        answers: ["answer1","answer2","answer3","answer4"],
        correctAnswer: 1,
    }, {
        question: "Question text here",
        answers: ["answer1","answer2","answer3","answer4"],
        correctAnswer: 2,
    }];
    
})
    
    // everything in this section needs to go in a while loop that means it will all run while the timer still has time left 
    // fill in the content of each question 
    // first question will kick off by start button
    // each subsequent question is kicked off by answering the previous question
    // fill in question content in the id "questionText"
    // fill in the answers in the id "answer#" and indicate which is correct 
    // create an object with the question text, answer choices, and correct answer choice




 });




 