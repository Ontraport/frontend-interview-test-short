$(document).ready(function(){
//select form input through jQuery.
var formInput = $("#search input[name='post']");
//focus on the input as soon as the document is ready for immediate typing.
formInput.focus();
//on submit, run the block of code inside the function and pass along the event.
	$('#search form').on('submit', function(e){
		//prevent the form from submitting any data.
		e.preventDefault();
		//make sure some sort of text was added to the input, if not, do nothing
		if(formInput.val() != ""){
		//get current second through native getSeconds function
		var second = new Date().getSeconds();
		//Prepend the value of the input along with the second to the div with the ID of page.
		$('#page').prepend("<p>" + formInput.val() + " - " + second + "</p>").find("p:first-child").fadeIn();
		//reset input for quick use again
		formInput.val("");
		}
	});

});
