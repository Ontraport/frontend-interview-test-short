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

// //function to add to localStorage
// function appendToLocal(name, data){
//     var old = localStorage.getItem(name);
//     if(old === null) old = "";
//     localStorage.setItem(name, old + data);
// }

//On submit, post value of postInput to div
submitButton.addEventListener("click", function(){
	//Set up seconds, changes milliseconds to decimal values
	var currentTime = (Math.floor(Date.now() / 1000)%60).toFixedDown(0);
	//remove milliseconds by removing everything after decimal and then taking only the last two digits
	var currentSeconds;
	//If local storage exists, change string back to array of objects 
	//else make an empty array to store data
	var postDataObj = (localStorage.postData) ? JSON.parse(localStorage.getItem("postData")) : [];

	if (currentTime <10){
		currentSeconds = removeLastOne.exec(currentTime)[0];
		postDataObj.push({number: currentSeconds, postText: postInput.value});
	}
	else {
		currentSeconds = removeLastTwo.exec(currentTime)[0];
		console.log(currentSeconds);
		postDataObj.push({number: currentSeconds, postText: postInput.value});
	}

	localStorage.setItem('postData', JSON.stringify(postDataObj));
});

// if there is localStorage, add to DOM
if(localStorage.postData){
	var globalStorage = JSON.parse(localStorage.getItem("postData"));
	for (var i = 0; i<globalStorage.length; i++){
	var newPost = document.createElement('div');
	// var inputText = document.createTextNode(postInput.value + " - " + currentSeconds);
	console.log(globalStorage[i].postText);
	var inputText = document.createTextNode(globalStorage[i].postText + " - " + globalStorage[i].number);
	newPost.appendChild(inputText);
	// prepend the new post
	pageDiv.insertBefore(newPost, pageDiv.firstChild);
	}
}

// function fillPage(){
// 	this.divText = postInput.value;
// 	this.divNumber = "";
// }
// console.log(localStorage.getItem("postData"));
// //when the page loads
// window.addEventListener("DOMContentLoaded",function (){
// 	var globalArray = JSON.parse(localStorage.getItem("postData"));
// });

// //when the user is exiting the page
// window.addEventListener('beforeunload', function( ) {
//      localStorage.setItem("myItems",JSON.stringify(globalArray));

// });