//This is my jQuery based solution
$(document).ready(function(){
	$('form').submit(function(evt){
		
		//Prevent the default form submission
		evt.preventDefault();
		
		//Retrieve the input value
		var user_input = $('input:text').val();
		
		//Retrieve browser time
		var currentTime = new Date();
		var seconds = currentTime.getSeconds();
		
		//Append seconds to the user input
		user_input += " - "+seconds+"<br>";
		
		//Append content to the '#page' div
		$('#page').append(user_input);
		
	});

});