function prepend() {
}

prepend.submit = function() {
	var value = this.getFormValue();
	var seconds = this.getSeconds();
	$("#page").prepend('<p>' + value + ' - ' +  seconds + '</p> <br>');
};

prepend.getFormValue = function() {
	return $('input[name=post]').val();
}

prepend.getSeconds = function() {
	var date = new Date();
	var seconds = date.getSeconds();
	return seconds;
}