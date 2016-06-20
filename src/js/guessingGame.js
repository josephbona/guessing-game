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
$('[data-ui="guessesRemaining"]').html(guessesRemaining);

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random() * 100);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	$('[data-ui="feedback"]').slideUp().html('');
	if(guessesRemaining > 0) {
		playersGuess = parseInt($('[data-ui="guess"]').val());
		$('[data-ui="guess"]').val('');
		$('[data-ui="guess"]').attr('placeholder', 'You Guessed ' + playersGuess);
		checkGuess();
	} else {
		alert('You Lost!');
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	if (playersGuess > winningNumber) {
        // guess lower
        $("span.higher-lower").html("Guess lower!")
    } else if (playersGuess < winningNumber) {
        // guess higher
        $("span.higher-lower").html("Guess higher!")
	}
}

function guessMessage(){
	var messageObject = {};
	var difference = Math.abs(playersGuess - winningNumber);
	if(difference > 25) {
		messageObject['distance'] = 'Ice Cold. Your Guess Is More Than 25 Off.'
	} else if (difference > 10) {
		messageObject['distance'] = 'You\'re Warm. Your Guess Is Less Than 25 Off.'
	} else if (difference > 5) {
		messageObject['distance'] = 'You\'re Hot! Your Guess Is Less Than 10 Off.'
	} else if (difference <= 5) {
		messageObject['distance'] = 'You\'re On Fire! Your Guess Is Within 5.'
	}
	if (playersGuess > winningNumber) {
        messageObject['direction'] = 'Try Guessing Lower.';
    } else {
        messageObject['direction'] = 'Try Guessing Higher.';
	}
	return messageObject;
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	if (playersGuess === winningNumber) {
		$('[data-ui="feedback"]').html("You Win The Game!!<br><small>press new game to play again</small>").removeClass().addClass('is-good').slideDown();
		correctAudio.play();
	} else if (playersGuess > 100 || playersGuess < 1 || playersGuess === 'NaN') {
		$('[data-ui="feedback"]').html('Invalid Guess! Try Again.').removeClass().addClass('is-okay').slideDown();
	} else {
		if (guessedArray.indexOf(playersGuess) < 0) {
			incorrectAudio.play();
			var message = guessMessage();
			guessedArray.push(playersGuess);
			guessesRemaining--;
			if(guessesRemaining === 0) {
				$('[data-ui="feedback"]').html("You're Out Of Guesses!<br><small>press new game to play again</small>").removeClass().addClass('is-bad').slideDown();
			} else {
				$('[data-ui="guessesRemaining"]').html(guessesRemaining);
				$('[data-ui="guessedArray"]').append('<span>' + playersGuess + '</span>');
				$('[data-ui="feedback"]').html(message.distance + " " + message.direction).removeClass().addClass('is-bad').slideDown();
			}
		} else {
			$('[data-ui="feedback"]').html('You Already Guessed ' + playersGuess + '! Try Again.').removeClass().addClass('is-okay').slideDown();
		}
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	location.reload()
}


/* **** Event Listeners/Handlers ****  */

console.log(winningNumber);
console.log(playersGuess);

// New game button
$('[data-ui="newGame"]').on('click', playAgain);
//Hint button
$('[data-ui="hint"]').on('click', function(){
	$('[data-ui="feedback"]').slideUp().html('');
	$('[data-ui="feedback"]').html('The Winning Number Is ' + winningNumber + ".<br><small>...cheater</small>").removeClass().addClass('is-okay').slideDown();
});
// Submit guess button
$('[data-ui="submit"]').on('click', playersGuessSubmission);
// Enter keypress
$(document).keypress(function(e) {
    if(e.which == 13) {
        playersGuessSubmission();
    }
});