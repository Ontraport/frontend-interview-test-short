(function () {
	var formSubmit = document.getElementsByTagName('form')[0];
	var pageEle = document.getElementById('page');

	// Event Listener for form submit
	formSubmit.addEventListener('submit', function (e) {
		var inputField = document.getElementsByName('post')[0];
		// Prevents the page from refresh
		e.preventDefault();
		if (inputField.value) {
			addContent(inputField.value);
		} else {
			window.alert('Enter some value to post');
		}
		inputField.value = '';
	})

	// Creates a new div element on form submit and adds the form input value with current time(Seconds) in div#page
	function addContent(inputText) {
		var pageContent = document.createElement('div');
		var browserDate = new Date();
		var timeSeconds = browserDate.getSeconds();
		pageContent.className = "rand1";
		pageContent.innerHTML = [inputText, timeSeconds].join(' - ');
		pageEle.appendChild(pageContent);
	}
})();