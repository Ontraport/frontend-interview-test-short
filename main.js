//We want to have the Javascript run after the site loads(all HTML elements set up)
//Store the input element as variables
var postInput = document.querySelector('[type="text"]');
var submitButton = document.querySelector('[type="submit"]');
//Store div with id="page" as variable
var pageDiv = document.getElementById("page");
console.log(pageDiv);
//On submit, post value of postInput to div
submitButton.addEventListener("click", function(){
	//Create a div when you 
	var newPost = document.createElement('div');
	var inputText = document.createTextNode(postInput.value + Date.now());
	newPost.appendChild(inputText);
	pageDiv.appendChild(newPost);
	//Prevent submit to fire, refreshing the page
	event.preventDefault();
});
