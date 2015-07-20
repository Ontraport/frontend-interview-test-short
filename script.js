$("form").submit(function() {
	$("#page").prepend("<p>"+$("input:first").val()+" - "+(new Date()).getSeconds()+"</p>");
	$("input:first").val("");
	return false;
});