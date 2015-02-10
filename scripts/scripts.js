document.addEventListener("DOMContentLoaded", function(event) { 

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

		// Does this thing get the value? 
		console.log("clicked", thoughtsValue);

		// Add new li with contents
 		var newLI = document.createElement("li"),
 				pageUL = document.getElementsByTagName('ul')[0];
 		
 		// Set value of newLI to input text			
 		newLI.innerHTML = thoughtsValue;
		
		// Add newLI to pageUL as firstChild 		
 		pageUL.insertBefore(newLI, pageUL.firstChild);

		// clear input text
		if (input.value != '') {
			input.value = '';
		}

		// Prevent default action for input submit
		e.preventDefault();
		
	};

	var submitForm = function(e) {
		e.preventDefault();
		page.innerHTML += thoughtsValue; // works
		console.log(thoughtsValue);
	}

	// Did my script load?
	console.log('script loaded');
});