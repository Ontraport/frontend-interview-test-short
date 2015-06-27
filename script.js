$(document).ready(function(){
	$('form').submit(function(prep){
		prep.preventDefault();
		var input = $(':text').val();
		var date = new Date();
		var seconds = date.getSeconds();
			input += " - "+seconds+"<br>";
		$('#page').append(input);
	});
}); 