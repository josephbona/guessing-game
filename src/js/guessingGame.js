/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber(),
    guessedArray = [],
	guessesRemaining = 5,
    $audio 			= $('audio'),
	correctAudio 	= $audio[0],
	incorrectAudio 	= $audio[1];

/* **** Guessing Game Functions **** */

// Display guesses remaining
$('[data-ui="guessesRemaining"]').text(guessesRemaining);

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * 100);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	if(guessesRemaining > 0) {
		playersGuess = parseInt($('[data-ui="guess"]').val());
		$('[data-ui="guess"]').val('');
		$('[data-ui="guess"]').attr('placeholder', 'You Guessed ' + playersGuess);
		checkGuess();
	} else {
		alert('You Lose!');
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	if(playersGuess )
	if (guessedArray.indexOf(playersGuess) < 0) {
		guessedArray.push(playersGuess);
		guessesRemaining--;
		$('[data-ui="guessesRemaining"]').text(guessesRemaining);
		if(playersGuess == winningNumber) {
			alert('Winner Winner Chicken Dinner');
		}
	} else {
		$('[data-ui="guess"]').attr('placeholder', 'You Already Guessed ' + playersGuess + '!');
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