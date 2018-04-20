// Global variable (getting the nouns in place)

var letters = [];

var wordBank =
  [
    "emmitt smith",
    "troy aikman",
    "michael irvin",
    "roger staubach",
    "sammy baugh",
    "bronko nagurski",
    "jim thorpe",
    "chuck bednarik",
    "bobby layne",
    "jim brown",
    "frank gifford",
    "gale sayers",
    "bart starr",
    "ray nitschke",
    "dick butkus",
    "johnny unitas",
    "bob lilly",
    "deacon jones",
    "joe namath",
    "doak walker",
    "mike ditka",

  ];

// number of tries a user has
var maxGuesses = 10;
// stores the letters the user guesses
var userGuesses = [];

// index of the solution word in the array
var currentWordIndex;

// word we are building to match the solution
var guessedWord = [];

// tries remaining for user
var remainingGuesses = 0;

// flag for "press any key to try again"
var hasFinished = false;

// how many wins user has
var wins = 0;

var gameStarted = false;

// Reset for game variables

function resetGame() {
  remainingGuesses = maxGuesses;

  currentWordIndex = Math.floor(Math.random() * (wordBank.length));

  // clear out arrays
  userGuesses = [];
  guessedWord = [];

  //build guessing word and clear it out
  for (var i = 0; i < wordBank[currentWordIndex].length; i++) {
    guessedWord.push("_");
  }

  //Hide game over and win images/text
  document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
  document.getElementById("gameover-image").style.cssText = "display: none";
  document.getElementById("youwin-image").style.cssText = "display: none";

  // show display
  updateDisplay();


};

// Updates the display on the HTML page

function updateDisplay() {

  document.getElementById("totalWins").innerText = wins;

  // Display how much of the word we've already guessed on screen.
  // Printing the array would add commas (,) - so we concatenate a string from each value in the array.

  var guessedWordText = "_";
  for (var i = 0; i < guessedWord.length; i++) {
    guessedWordText += guessedWord[i];
  }

  document.getElementById("currentWord").innerText = guesssedWord;
  document.getElementById("remainingGuesses").innerText = remainingGuesses;
  document.getElementById("userGuesses").innerText = userGuesses;

};


// Takes a letter and finds all instances of appearance in the string and replaces them in the guessed word

function evaluateGuess(letter) {
  // Array storing positions of letters in string
  var positions = [];

  // Loop through word finding all instances of guessed letter
  for (var i = 0; i < wordBank[currentWordIndex].length; i++) {
    if(wordBank[currentWordIndex][i] === letter) {
      positions.push(i);
    }
  }

  // if no indicies, remove a guess

  if (positions.length <= 0) {
    remainingGuesses--;
  }
  else {
    // Loop through all the indicies and replace the "-" with a letter
    for(var i = 0; i < positions.length; i++) {
      guessedWord[positions[i]] = letter;
    }
  }
};

// check for a win 
function checkWin() {
  if(guessedWord.indexOf("_") === -1) {
    document.getElementById("youwin-image").style.cssText = "display: block";
    document.getElementById("pressTryAgain").style.cssText= "display: block";
    wins++
    hasFinished = true;
  }
};

// Checks for a loss
function checkLoss() {
  if(remainingGuesses <=0) {
    document.getElementById("gameover-image").style.cssText = "display:block";
    hasFinished = true;
  }
}


// making a guess
function makeGuess(letter) {
  if (remainingGuesses > 0) {
    if (userGuesses.indexOf(letter) === -1) {
      userGuesses.push(letter);
      evaluateGuess(letter);
    }
  }
};

// Event
document.onkeydown = function(event) {
  if(hasFinished) {
    resetGame();
    hasFinished = false;
  }
  else {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
      makeGuess(event.key.toUpperCase());
      updateDisplay();
      checkWin();
      checkLoss();
    }
  }
};


// break up wordBank strings in letters, and make an array out of letter within string

// for loop to look through an array

// arrayname.push - need to google, 

// .split will come in handy - google that, will let you break up strings into given array



// this is going to be have to be called after something else happens - it will need to be inside a function

// for (var i = 0; i < solutionLetters.length; i++) {
  // if (press === solutionLetters[i]) {
    // do something if it's a correct guess
    // alert congrats
  // }
  //else {

    //add to a new array
    //display wrong guesses on page
 // }



  // this is where a lot of if else's will go
//}

 // document.onkeyup = function (event) {
 // var press = event.key.toLowerCase();

  //console.log(press);


 // if (press === "h") {
   // car.honk();

  //}


  //else if (press === "d") {
   // car.driveToWork();

 // }

  //else if (press === "w") {
   // car.driveAroundWorld();

  //}

  //else if (press === "t") {
  //  car.getTuneUp();
  //}

  //reWriteStats();


//}; //



