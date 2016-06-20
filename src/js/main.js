jQuery(document).ready(function($) {

    $('#the-guess').numpad({
    	appendKeypadTo: $("#the-guess"),
    	openOnEvent: false,
    	hideDecimalButton: true,
    	hidePlusMinusButton: true,
    	displayTpl: '<input data-ui="guess" type="text" placeholder="Pick A Number (1-100)" />'
    });

});