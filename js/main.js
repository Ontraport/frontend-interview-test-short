$(document).ready(function(){
	$("#search form").submit(function(event){
		var inputField = $(this).children("input[type=text]");
		var userInput = inputField.val();
		var list = $("#page");
		var date = new Date();
		var seconds = date.getSeconds();
		var html = ("<p>" + userInput + " - " + seconds + "</p>");
		list.prepend(html);
		inputField.val("");
		event.preventDefault();
	});
});