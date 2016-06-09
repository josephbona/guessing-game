jQuery(document).ready(function($) {

    $('#the-guess').numpad({
    	appendKeypadTo: $("#the-guess"),
    	openOnEvent: false,
    	hideDecimalButton: true,
    	hidePlusMinusButton: true,
    	displayTpl: '<input type="text" placeholder="Pick A Number" />'
    });
    var guessesLeft = 5;
    $('.guesses-remaining').text(guessesLeft);
    var $audio 			= $('audio'),
		correctAudio 	= $audio[0];
		incorrectAudio 	= $audio[1];
    $('.submit').on('click', function(){
    	var guessInput = $('.nmpd-display')
    	var guess = guessInput.val();
    	console.log(guess);
    	guessInput.val('');

    	if(guessesLeft > 0) {
	    	if (guess === '') {

	    	} else if (guess == 23) {
		    	//play correct audio
		    	correctAudio.play();
		    	guessInput.attr('placeholder', guess + ' is right!');
	    	} else {
	    		//play correct audio
		    	incorrectAudio.play();
		    	guessInput.attr('placeholder', guess + ' is not even close.');
		    	guessesLeft--;
	    	}
	    	$('.guesses-remaining').text(guessesLeft);
    	}
    });

});