/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber(),
    guessed = [];



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * 100);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = parseInt($('[data-ui="guess"]').val());
	$('[data-ui="guess"]').val('');
	$('[data-ui="guess"]').attr('placeholder', 'You Guessed ' + playersGuess);
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	if (guessed.indexOf(playersGuess)) {
		guessed.push(playersGuess);
		if(playersGuess == winningNumber) {
			alert('Winner Winner Chicken Dinner');
		}
	} else {
		$('[data-ui="guess"]').attr('placeholder', 'Dude, You Guessed ' + playersGuess + ' already!');
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

console.log(winningNumber);
console.log(playersGuess);