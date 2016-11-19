

// I have included a start button for the game.
//When the player presses the start button, the countdown timer begins.

    $("#startButton").on("click", function() {
  

//This section contains the variables
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredtotal = 0;
    var timer = 25;
    var q1score = 0;
    var q2score = 0;
    var q3score = 0;
    var q4score = 0;
    var q5score = 0;
    var quantityofquestions = 5;


            //console.log("Starting Time: " + timer + " Seconds");
  
//Countdown timer.  Once time reaches 0 seconds, then results shall be checked by function checkquestions.
    setInterval (function() {
        timer--;
          if (timer >= 0) {
            //console.log("remaining time: " + timer + " Seconds");
            $('#display').html(timer);
          }

          if (timer === 0) {
            clearInterval (timer);
            //console.log("Out of Time: " + timer + " Seconds");

            checkquestions();          
          }

      }, 1000);


  //This function checks each question and answer to determine if player selected correct or incorrect answer
  //or if player did not answer the question.
        function checkquestions(){

  //Obtains data from HTML, checks answer selected and determines if answer is correct.
  //This is repeated for each question in the game.
            questionone = document.getElementsByName("ques1answer");
              for(i=0; i<questionone.length; i++) {
                  if (questionone[i].checked) {
                    q1score = parseInt(questionone[i].value);
                    //console.log("q1score: " + q1score);
                  }
              }

  //In order to determine unanswered questions, we check if a radio (button) was pressed.
  //This is repeated for each question in the game.
                if (!$("input[name='ques1answer']").is(':checked')) {
                    unansweredtotal++;
                    //console.log("check confirmation ques1answer: " + unansweredtotal);
                };

            questiontwo = document.getElementsByName("ques2answer");
              for(i=0; i<questiontwo.length; i++) {
                  if (questiontwo[i].checked) {
                    q2score = parseInt(questiontwo[i].value);
                    //console.log("q2score: " + q2score);
                  }
              }

                  if (!$("input[name='ques2answer']").is(':checked')) {
                    unansweredtotal++;
                  };


            questionthree = document.getElementsByName("ques3answer");
              for(i=0; i<questionthree.length; i++) {
                  if (questionthree[i].checked) {
                    q3score = parseInt(questionthree[i].value);
                    //console.log("q3score: " + q3score);
                  }
              }

                  if (!$("input[name='ques3answer']").is(':checked')) {
                    unansweredtotal++;
                  };


            questionfour = document.getElementsByName("ques4answer");
              for(i=0; i<questionfour.length; i++) {
                  if (questionfour[i].checked) {
                    q4score = parseInt(questionfour[i].value);
                    //console.log("q4score: " + q4score);
                  }
              }

                  if (!$("input[name='ques4answer']").is(':checked')) {
                    unansweredtotal++;
                  };


            questionfive = document.getElementsByName("ques5answer");
              for(i=0; i<questionfive.length; i++) {
                  if (questionfive[i].checked) {
                    q5score = parseInt(questionfive[i].value);
                    //console.log("q5score: " + q5score);
                  };
              }

                  if (!$("input[name='ques5answer']").is(':checked')) {
                    unansweredtotal++;
                  };
             

  //This section contains the players results.

              $('#quantityofquestions').html('<h4>' + quantityofquestions + '</h4>');


  //Count of correct answers
              correctAnswers = q1score + q2score + q3score + q4score + q5score;
              //console.log("correct answers: " + correctAnswers);
              $('#correctAnswers').html('<h4>' + correctAnswers + '</h4>');

  //Display of unanswered questions
              $('#unanswered').html('<h4>' + unansweredtotal + '</h4>');
               //console.log("un answered total: " + unansweredtotal);

  //Count of incorrect answers
              incorrectAnswers = quantityofquestions - correctAnswers - unansweredtotal;
              $('#incorrectAnswers').html('<h4>' + incorrectAnswers + '</h4>');
               //console.log("in correct answers: " + incorrectAnswers);
     
          }       

  });


            //HERE WE CREATE THE HTML THAT WILL BE INJECTED INTO OUR DIV AND DISPLAYED ON THE PAGE.
              var html = "";
      

          // Injecting the HTML we just created into our div and updating the game information on our page.
            document.querySelector("#game").innerHTML = html;

