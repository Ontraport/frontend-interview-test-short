//We want to have the Javascript run after the site loads(all HTML elements set up)

//Store the input element as variables
var postInput = document.querySelector('[type="text"]');
var submitButton = document.querySelector('[type="submit"]');
//Store div with id="page" as variable
var pageDiv = document.getElementById("page");

//Regular Expression equation to truncate values after decimal
Number.prototype.removeDecimal = function() {
    var re = new RegExp("(\\d+\\.\\d{" + 0 + "})(\\d)"),
        a = this.toString().match(re);
    return a ? parseFloat(a[1]) : this.valueOf();
};
//Reg Exp to take only the last two values
var lastTwoDigits = new RegExp("..$");
var lastDigit = new RegExp(".$");

// //function to add to localStorage
// function appendToLocal(name, data){
//     var old = localStorage.getItem(name);
//     if(old === null) old = "";
//     localStorage.setItem(name, old + data);
// }

//On submit, post value of postInput to div
submitButton.addEventListener("click", function(){
	//Set up seconds, remove milliseconds by removing everything after decimal
	var currentTime = (Math.floor(Date.now() / 1000)%60);
	//If local storage exists, change string back to array of objects 
	//else make an empty array to store data
	var postDataObj = (localStorage.postData) ? JSON.parse(localStorage.getItem("postData")) : [];
	postDataObj.push({number: currentTime, postText: postInput.value});
	localStorage.setItem('postData', JSON.stringify(postDataObj));
});

// if there is localStorage, add to DOM
if(localStorage.postData){
	var globalStorage = JSON.parse(localStorage.getItem("postData"));
	for (var i = 0; i<globalStorage.length; i++){
	var newPost = document.createElement('div');
	var inputText = document.createTextNode(globalStorage[i].postText + " - " + globalStorage[i].number);
	newPost.appendChild(inputText);
	// prepend the new post
	pageDiv.insertBefore(newPost, pageDiv.firstChild);
	}
}