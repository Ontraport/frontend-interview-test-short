$(document).ready(function(){

var formInput = $("form input[name='post']");

	$('form').on('submit', function(e){
		var second = new Date().getSeconds();
		e.preventDefault();
		$('#page').prepend("<p>" + formInput.val() + " - " + second + "</p>");
		formInput.val("");

	});

});
