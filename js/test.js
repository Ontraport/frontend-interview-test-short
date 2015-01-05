$(document).ready(function() {

	$(document).on("submit", '#search', function(e) {

		var d = new Date();
		var n = d.getSeconds();
		var html = $("#page").html();
		var textfield = $("input:text[name=post]").val();
		
		$("#page").html(html + '<br>' + textfield + ' ' + n);
		e.preventDefault();
		return false;
	});

});
