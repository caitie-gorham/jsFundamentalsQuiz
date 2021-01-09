 var startBtn = document.querySelector("#startbtn");
 startBtn.addEventListener("click", function(){
    //  start the timer
    var timeLeft = 59
    var timer = setInterval(function(){
        document.getElementById("counter").innerHTML = timeLeft + " seconds remaining";

        timeLeft -= 1;
        if(timeLeft <=0) {
            clearInterval(timer);
            document.getElementById("counter").innerHTML = "Game over"
        }
    },1000);
    
    // generate the first question
 });

 var questionGenerator = document.querySelector("#questionDiv");
 questionGenerator.addEventListener("click", function(){
    var counter = document.querySelector("#counter");
    //  for each question, when user clicks on an answer, figures out if the answer is correct
    // if answer is correct, show message and add count to quiz score
    // if answer is incorrect, show message and deduct count from quiz score
    // show new quiz question
    // repeat
 });




 