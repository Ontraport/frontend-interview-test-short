$(document).ready(function(){
//select form input through jQuery.
var formInput = $("form input[name='post']");
//on submit, run the block of code inside the function and pass along the event.
	$('form').on('submit', function(e){
		//get current second through native getSeconds function
		var second = new Date().getSeconds();
		//prevent the form from submitting any data.
		e.preventDefault();
		//Prepend the value of the input along with the second to the div with the ID of page.
		$('#page').prepend("<p>" + formInput.val() + " - " + second + "</p>");
		//reset input for quick use again
		formInput.val("");
	});
});
