// Get the form data and add an event listener for submit
const searchField = document.forms[0];
searchField.addEventListener("submit", appendText);

// Self executing function to create a UL inside page div onload
(function (){
	const pageObj = document.getElementById('page');
	const listObj = document.createElement('ul');
	listObj.setAttribute('id', 'list-head');
	pageObj.appendChild(listObj);
}());

/* Function appends the input value to the page div
** Prevents default form action
** Alerts when the form data is empty and submit is pressed 
**/
function appendText(ev){
	ev.preventDefault();
	const listHead = document.getElementById('list-head');
	const childObj = document.createElement('li');
	const input = searchField["post"].value;
	if(input){
		childObj.innerHTML = input + ' - ' + Math.round(new Date().getSeconds());
		childObj.setAttribute('class', 'listElements')
		listHead.appendChild(childObj);
	} else {
		alert('Please enter some value');
	}
}