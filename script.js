$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();

		var postInputVal = $('input[name=post]').val();
		appendToPage(postInputVal);
	});
});

// Prepends inputVal to #page
function appendToPage(inputVal) {
	var seconds = new Date().getSeconds();
	var newPageItem = $('<p></p>');

	newPageItem.html(inputVal + ' - ' + seconds + '<br>');
	$('#page').prepend(newPageItem);
}
