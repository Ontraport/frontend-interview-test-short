document.addEventListener("DOMContentLoaded", function(event) { 

  var postButton = document.getElementsByTagName("input")[1],
			input = document.getElementsByTagName('input')[0],
			thoughtsValue = document.getElementsByTagName('input')[0].value,
			page = document.getElementById("page"), // all above vars work
 			ul=document.createElement('ul');
 	
	// Add ul to #page
 	page.appendChild(ul);

 	// Handle input button on click
	postButton.onclick = function(e) {

		// Get current input text value
		thoughtsValue = document.getElementsByTagName('input')[0].value;

		// Get current date in seconds
		var currentDate = new Date(),
				seconds = currentDate.getSeconds();

		// Does this thing get the value on click? 
		console.log("clicked", thoughtsValue);

		// Create new li & get page ul
 		var newLI = document.createElement("li"),
 				pageUL = document.getElementsByTagName('ul')[0];
 		
 		// Set value of newLI to input text			
 		newLI.innerHTML = thoughtsValue + ' - ' + seconds;
		
		// Add newLI to pageUL as firstChild 		
 		pageUL.insertBefore(newLI, pageUL.firstChild);

		// clear input text
		if (input.value != '') {
			input.value = '';
		}

		// Prevent default action for input submit
		e.preventDefault();

	};

	// Did my script load?
	console.log('script loaded');
});