
var myForm = document.forms[0];

myForm.addEventListener('submit', function(e) {
	e.preventDefault();

	var txt = this.elements[0].value;
	var date = new Date();
	var sec = date.getSeconds();

	var myPage = document.getElementById('page');

	// Not specified if empty values or whitespace should be considered valid
	// if statement below should be uncommented if we do not consider empty values valid
	// if (this.elements[0].value != '') {
	myPage.innerHTML = '<div>' + txt + ' - ' + sec + '</div>' + myPage.innerHTML;
	this.elements[0].value = '';
	//}
});
