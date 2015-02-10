document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('Dom loaded');

  var form = document.getElementsByTagName("form"),
			postButton = document.getElementsByTagName("input")[1],
			input = document.getElementsByTagName('input')[0],
			thoughtsValue = document.getElementsByTagName('input')[0].value,
			page = document.getElementById("page"), // all above vars work
 			ul=document.createElement('ul');
 	
	// Add ul to #page
 	page.appendChild(ul);
	


 	// Handle form button on click
	postButton.onclick = function(e) {
		thoughtsValue = document.getElementsByTagName('input')[0].value;

		console.log("clicked", thoughtsValue);

		// Add new li with contents
 		var li = document.createElement("li");
 		ul.appendChild(li);
 		document.getElementsByTagName('li')[0].innerHTML += thoughtsValue;

		

		// clear input text
		if (input.value != '') {
			input.value = '';
		}

		e.preventDefault();
	};

	var submitForm = function(e) {
		e.preventDefault();
		page.innerHTML += thoughtsValue; // works
		console.log(thoughtsValue);
	}

	console.log('loaded');
});