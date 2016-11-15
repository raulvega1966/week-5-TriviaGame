

// I have included a start button for the game.
//When the player presses the start button, the countdown timer begins.

$("#startButton").on("click", function() {
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var timer = 5;
  var answers = ["chi", "hou", "cle", "new"];
  //answers[1] = "hou";
  //answers[2] = "cle";
  //answers[3] = "new";

  //console.log("cA: " + correctAnswers);
  //console.log("iA: " + incorrectAnswers);
  //console.log("u: " + unanswered);

  $('#correctAnswers').html('<h4>' + correctAnswers + '</h4>');
  $('#incorrectAnswers').html('<h4>' + incorrectAnswers + '</h4>');
  $('#unanswered').html('<h4>' + unanswered + '</h4>');

  console.log("Starting Time: " + timer + " Seconds");
  

  setInterval (function() {
  timer--;
        if (timer >= 0) {
            //span = document.getElmentbyID("count");
            //span.innerHTML = timer;
            console.log("remaining time: " + timer + " Seconds");
            $('#display').html(timer);
          }

if (timer === 0) {
            clearInterval (timer);
            console.log("Out of Time: " + timer + " Seconds");

            //questionone = document.getElementsByName("ques1answer");
            //if (questionone[0].checked = answers){
             // correctAnswers++;
            //  console.log("first answer: " + questionone[0]);
            //  console.log("this is working: ");
            //}

            function checkquestionone(){
            questionone = document.getElementsByName("ques1answer");
            //ques1answer = parseInt(document.querySelector('input[name = "ques1answer"]:checked').value);
            //console.log("question 1 variable: " + questionone);
            for(i=0; i<questionone.length; i++) {
                  if (questionone[i].checked) {
                  //console.log("variablevar2: " + questionone);
                  q1score = parseInt(questionone[i].value);
                  //console.log("q1score: " + q1score);
                  }
              }
            }         
}


  }, 1000);

  });


//Setting up que question with 4 multiple choice answers.








// When the user presses a key, it will run the following function...
              


              //A bunch of console logs so I can check my code..........
                  //console.log("L randomNumber by comp: " + randomNumber);
                  //console.log("L diamond1: " + diamond1);
                  //console.log("L diamond2: " + diamond2);
                  //console.log("L diamond3: " + diamond3);
                  //console.log("L diamond4: " + diamond4);
                  //console.log("L your total score: " + playersum);

                //More console logs to check code....................
                      //console.log($(this));
                      //playersum = playersum + diamond1;
                      //console.log("here is the player sum: " + playersum);
                      //console.log("wins total: " + wins);
                      //console.log("loss total: " + losses);

  

//HERE WE CREATE THE HTML THAT WILL BE INJECTED INTO OUR DIV AND DISPLAYED ON THE PAGE.
              var html =    "<p>All Done!</p>" +
                            "<p>Correct Answers: " + correctAnswers + "</p>" +
                            "<p>Incorrect Answers: " + incorrectAnswers + "</p>" +
                            "<p>Unanswered: " + unanswered + "</p>";
  



          // Injecting the HTML we just created into our div and updating the game information on our page.
            document.querySelector("#game").innerHTML = html;

