$( document ).ready(function() {
	$( "form" ).submit(function(event) {
	  event.preventDefault();
	  var text = $("input:first").val();
	  var fullDate = new Date();
	  var seconds = fullDate.getSeconds();
	  var textAndSecond = text.concat(" - ", seconds.toString())
	  $("#page").prepend("<div>" + textAndSecond + "</div>");
	});
});
