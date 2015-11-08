
var userName = "x";
var askToPlay = function(){
  userName=prompt("What is your name?");
  confirm("Welcome to my guessing game " + userName + " would you like to play? (Press ok to play the game)");
}();

var scoreIt = 0; // running tally of correct answers

var question1 = function() {
  var userAnswer1 = prompt("I currently live in Seattle but I grew up in Massachusetts. What city in Massachusetts did I grow up in?");
  if((userAnswer1.toUpperCase() === "BOSTON") || (userAnswer1.toUpperCase() === "BOS")) {
    document.getElementById('question1').innerHTML="You are correct I was born in Boston.";
     scoreIt++;
  }else {
    document.getElementById('question1').innerHTML="Incorrect. I grew up in Boston.";
  };
}();//IIFE

var question2 = function() {
  var userAnswer2 = prompt("I was born in 1983 can you guess which month?");
  if((userAnswer2.toUpperCase() === "OCTOBER")||(userAnswer2.toUpperCase() === "OCT")) {
    document.getElementById('question2').innerHTML="You are correct! I was born in October.";
    scoreIt++;
  }else {
    document.getElementById('question2').innerHTML="You are incorrect. I was born in October.";
  };
}();

var question3 = function() {
  var userAnswer3 = prompt("I have a child who is less than a year old can you guess how many months old she is?");
  if((userAnswer3 === "7")||(userAnswer3.toUpperCase() === "seven")) {
    document.getElementById('question3').innerHTML="You are correct! My daughter is seven months old.";
    scoreIt++;
  }else {
    document.getElementById('question3').innerHTML= "You are incorrect. My daughter is seven months old.";
  };
}();

var question4 = function() {
  var userAnswer4 = Number(prompt("How old am I?"));
  if(userAnswer4 === 32) {
    document.getElementById('question4').innerHTML="Wow! Nice guess. You are correct! I am 32 years old.";
    scoreIt++;
  }else if (userAnswer4 > 32) {
    document.getElementById('question4').innerHTML="You think I am "+userAnswer4+" years old? How insulting.... :p";
  }else if (userAnswer4 < 32) {
    document.getElementById('question4').innerHTML="No I am actually older than " +userAnswer4 + ". But thanks for the compliment.";
  };
}();

var question5 = function() {
  var userAnswer5 = prompt("How many years have I lived in Seattle?");
  if ((userAnswer5 === '11') || (userAnswer5.toUpperCase() ==='ELEVEN')) {
    document.getElementById('question5').innerHTML="You are correct! I have lived in Seattle for 11 years.";
    scoreIt++;
  }else {
    document.getElementById('question5').innerHTML="Incorrect. I have lived in Seattle for 11 years.";
  };
}();

alert("You got " + scoreIt + "/5 correct");

var bonusRound = function() {
  if (scoreIt >= 4) {
    var bonusPick = window.confirm("Great Job! " + userName + " You scored high enough for the bonus round.");

    if (bonusPick === true) {
       var numberRandom = Math.floor(Math.random() * 10);
       var guess = Number(prompt("Guess the number between 0-15"));
        if(guess > numberRandom) {
          alert("The actual number is lower than your guess.");
        }else if (guess < number) {
          alert("The actual number is higher than your guess.")
        }else {
          alert("You guessed the correct number!!!!");
          result=0;
    };
  };

  };

}();

document.write("<h2> Your final score was " +scoreIt+ "/5. Refresh the Page to play again.</h2>");


