var userName=prompt("What is your name?");
var counter=0;
answer1 = "Boston";
answer2 = "October";
answer3 = "7";

console.log(answer2);


console.log("The user name entered was" + userName);

var play = confirm("Welcome to my guessing game " + userName + " would you like to play? (Press ok to play the game)");

while (play){
var userAnswer1 = prompt("I currently live in Seattle but I grew up in Massachusetts. What city in Massachusetts did I grow up in?");
var userAnswer2 = prompt("I was born in 1983 can you guess which month?");
var userAnswer3 = prompt("I have a child who is less than a year old can you guess how many months old she is?");
var userAnswer4 = prompt("How old am I?")
var userAnswer5 = prompt("How many years have i lived in Seattle?")

if ((userAnswer1 === "Boston") || (userAnswer1 === "bos") || (userAnswer1 === "boston")){
  alert("You are correct I was born in " + answer1);
  counter++;
}

else {
  alert("You were incorrect you guessed " + userAnswer1 + " The correct answer is " + answer1);
}

if ((userAnswer2 === "October") ||(userAnswer2 === "october") ||(userAnswer2 === "Oct") || (userAnswer2 === "oct")){
  alert("You are correct I was born in " + answer2);
  counter++;
}

else {
  alert("You were incorrect you guessed " + userAnswer2 + " The correct answer is " + answer2);
}

if ((userAnswer3 === "7") || (userAnswer3 === "seven")){
  alert("You are corerct my daughter is " + answer3 + " months old");
  counter++;
}

else {
  alert("You were incorrect you guessed " + userAnswer3 + " The correct answer is " + answer3);
}

if (parseInt(userAnswer4 > 32)){
  alert("You think I am " + userAnswer4 + " years old. How insulting.... :P")
}
else if (userAnswer4 < 32){
  alert("No I am actually older than " +userAnswer4 + ". But thanks for the compliment.")

}

else {
  alert("I am in fact " + userAnswer4);
  counter++;
}

if (parseInt(userAnswer5 === 11)){
  alert("You are correct I have lived here for " +userAnswer5+ " years.");
}

else{
  alert("No I haven't lived in Seattle for " +userAnswer5+ " years. I have lived here for 11");
}
alert("You got " + counter + "/5 correct");

if (counter>=4){
  var bonus = confirm("Great Job! " + userName + " You scored high enough for the bonus round. Would you like to play the bonus? (Press ok to play bonus round)");
  while (bonus){
    var result = true
  var number = Math.floor(Math.random() * 10);


  while(result){
  var guess = Number(prompt("Guess the number between 0-15"))
  if  (guess > number){
      alert("The actual number is lower than your guess try again")
    }
    else if (guess < number) {
      alert("The actual number is higher than your guess try again")
    }
    else {
      alert("You guessed the correct number!!!!")
      result=0;
    }
  }
  bonus =0;
  }

  }
  play=false;
}
