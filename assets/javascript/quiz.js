

// I have included a start button for the game.
//When the player presses the start button, the countdown timer begins.

$("#startButton").on("click", function() {
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unansweredtotal = 0;
  var timer = 3;
  var q1score = 0;
  var q2score = 0;
  var q3score = 0;
  var q4score = 0;
  var q5score = 0;
  var unanswered1 = 0;
  var unanswered2 = 0;
  var unanswered3 = 0;
  var unanswered4 = 0;
  var unanswered5 = 0;
  var quantityofquestions = 5;


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

            checkquestions();          
          }


  }, 1000);



        function checkquestions(){

            questionone = document.getElementsByName("ques1answer");
            for(i=0; i<questionone.length; i++) {
                  if (questionone[i].checked) {
                    q1score = parseInt(questionone[i].value);
                    console.log("q1score: " + q1score);
                  }
                  else (unanswered1 = 1);
                  console.log("un answered 1: " + unanswered1);
              }


            questiontwo = document.getElementsByName("ques2answer");
            for(i=0; i<questiontwo.length; i++) {
                  if (questiontwo[i].checked) {
                    q2score = parseInt(questiontwo[i].value);
                    console.log("q2score: " + q2score);
                  }
                  else (unanswered2 = 1);
                  console.log("un answered 2: " + unanswered2);
              }


            questionthree = document.getElementsByName("ques3answer");
            for(i=0; i<questionthree.length; i++) {
                  if (questionthree[i].checked) {
                    q3score = parseInt(questionthree[i].value);
                    console.log("q3score: " + q3score);
                  }
                  else (unanswered3 = 1);
                  console.log("un answered 3: " + unanswered3);
              }


            questionfour = document.getElementsByName("ques4answer");
            for(i=0; i<questionfour.length; i++) {
                  if (questionfour[i].checked) {
                    q4score = parseInt(questionfour[i].value);
                    console.log("q4score: " + q4score);
                  }
                  else (unanswered4 = 1);
                  console.log("un answered 4: " + unanswered4);
              }


            questionfive = document.getElementsByName("ques5answer");
            for(i=0; i<questionfive.length; i++) {
                  if (questionfive[i].checked) {
                    q5score = parseInt(questionfive[i].value);
                    console.log("q5score: " + q5score);
                  }
                  else (unanswered5 = 1);
                  console.log("un answered 5: " + unanswered5);
              }

              //if (q1score === 0) {incorrectAnswers++;}
              //if (q1score !== 0 && q1score !== 1) {unanswered++;}
              //console.log("q1score 1: " + q1score);
              //console.log("unanswered 1: " + unanswered);
              //if (q2score === 0) {incorrectAnswers++;}
              //if (q2score !== 0 && q2score !== 1) {unanswered++;}
              //console.log("unanswered 2: " + unanswered);
              //if (q3score === 0) {incorrectAnswers++;}
              //if (q3score !== 0 && q3score !== 1) {unanswered++;}
              //console.log("unanswered 3: " + unanswered);
              //if (q4score === 0) {incorrectAnswers++;}
              //if (q4score !== 0 && q4score !== 1) {unanswered++;}
              //console.log("unanswered 4: " + unanswered);
              //if (q5score === 0) {incorrectAnswers++;}
              //if (q5score !== 0 && q5score !== 1) {unanswered++;}
              //console.log("unanswered 5: " + unanswered);

              $('#quantityofquestions').html('<h4>' + quantityofquestions + '</h4>');

              correctAnswers = q1score + q2score + q3score + q4score + q5score;
              console.log("correct answers: " + correctAnswers);
              $('#correctAnswers').html('<h4>' + correctAnswers + '</h4>');

              unansweredtotal = unanswered1 + unanswered2 + unanswered3 + unanswered4 + unanswered5;
              console.log("un answered total: " + unansweredtotal);
              $('#unanswered').html('<h4>' + unansweredtotal + '</h4>');

              incorrectAnswers = quantityofquestions - correctAnswers - unansweredtotal;
              console.log("in correct answers: " + incorrectAnswers);
              $('#incorrectAnswers').html('<h4>' + incorrectAnswers + '</h4>');

              
          }       

            //console.log("total correct: " + correctAnswers);
            //$('#correctAnswers').html('<h4>' + correctAnswers + '</h4>');
            //$('#incorrectAnswers').html('<h4>' + incorrectAnswers + '</h4>');
            //$('#unanswered').html('<h4>' + unanswered + '</h4>');

  });



//HERE WE CREATE THE HTML THAT WILL BE INJECTED INTO OUR DIV AND DISPLAYED ON THE PAGE.
              var html = "";
              //"<p>All Done!</p>" +
                            "<p>Correct Answers: " + correctAnswers + "</p>";
              //              "<p>Incorrect Answers: " + incorrectAnswers + "</p>" +
              //              "<p>Unanswered: " + unanswered + "</p>";
  



          // Injecting the HTML we just created into our div and updating the game information on our page.
            document.querySelector("#game").innerHTML = html;

