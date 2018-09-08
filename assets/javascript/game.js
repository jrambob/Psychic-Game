var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedletters = []

  var winningletter = alphabet[Math.floor(Math.random() * alphabet.length)];

  console.log(winningletter)

document.onkeypress = function(event) {
  var userGuess = event.key;

  if(userGuess === winningletter){
    wins++;
    console.log(wins);
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    guesses = 9
    guessedletters = []
    winningletter = alphabet[Math.floor(Math.random()* alphabet.length)];
  }else{
    guesses--;
    guessedletters.push(userGuess);
    document.getElementById('lettersguessed').innerHTML = "Leters Guessed: " + guessedletters;
    console.log(guessedletters);
    console.log(guesses);
    document.getElementById('guesses').innerHTML = "Guesses Remaining: " + guesses;
  };

  if(guesses === 0){
    losses++;
    console.log(losses)
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    guesses = 9
    guessedletters = []
  };
};  


