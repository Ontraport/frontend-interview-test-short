//We want to have the Javascript run after the site loads(all HTML elements set up)
//Store the input element as variables
var postInput = document.querySelector('[type="text"]');
var submitButton = document.querySelector('[type="submit"]');
//Store div with id="page" as variable
var pageDiv = document.getElementById("page");

//Regular Expression equation to truncate values after decimal
Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        a = this.toString().match(re);
    return a ? parseFloat(a[1]) : this.valueOf();
};
//Reg Exp to take only the last two values
var removeLastTwo = new RegExp("..$");
var removeLastOne = new RegExp(".$");
//On submit, post value of postInput to div
submitButton.addEventListener("click", function(){
	//Set up seconds, changes milliseconds to decimal values
	var currentTime = (Math.floor(Date.now() / 1000)%60).toFixedDown(0);
	//remove milliseconds by removing everything after decimal and then taking only the last two digits
	var currentSeconds;
	if (currentTime <10){
		currentSeconds = removeLastOne.exec(currentTime);
	}
	else {
		currentSeconds = removeLastTwo.exec(currentTime);
	}
	//Create a div with input value and append to pageDiv
	var newPost = document.createElement('div');
	var inputText = document.createTextNode(postInput.value + " - " + currentSeconds);
	newPost.appendChild(inputText);
	pageDiv.appendChild(newPost);
	//Prevent submit to fire, refreshing the page
	event.preventDefault();
});

// //Use local storage rather than stopping the submit button
// submitButton.addEventListener("click", function(){
// 	//Set up seconds, changes milliseconds to decimal values
// 	var currentTime = Math.floor(Date.now() / 1000);
// 	//remove milliseconds by removing everything after decimal
// 	var currentSeconds = removeLastTwo.exec(currentTime.toFixedDown(0));
// 	//Create a div with input value and append to pageDiv
// 	var newPost = document.createElement('div');
// 	var inputText = document.createTextNode(postInput.value + " - " + currentSeconds);
// 	newPost.appendChild(inputText);
// 	pageDiv.appendChild(newPost);
// 	//Prevent submit to fire, refreshing the page
// 	event.preventDefault();
// });