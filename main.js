$(document).ready(function(){

	$('form').on('submit', function(e){
		var inputVal = $("form input[name='post']").val();
		var second = new Date().getSeconds();
		e.preventDefault();
		$('#page').prepend("<p>" + inputVal + " - " + second + "</p>");

	});

});
