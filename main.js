//We want to have the Javascript run after the site loads(all HTML elements set up)
//Requires HTML5 in order to work

//Test to see if localStorage is available
function storageTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

//Store the input element as variables; querySelector is an HTML5 method
var postInput = document.querySelector('[type="text"]');
var submitButton = document.querySelector('[type="submit"]');
//Store div with id="page" as variable
var pageDiv = document.getElementById("page");

if (storageTest() === true) {

	//On submit, post value of postInput to div
	submitButton.addEventListener("click", function(){
		//Set up seconds, remove milliseconds by removing everything after decimal
		var currentTime = (~~(Date.now() / 1000)%60);
		//If local storage exists, change string back to array of objects 
		//else make an empty array to store data
		var postDataObj = (localStorage.postData) ? JSON.parse(localStorage.getItem("postData")) : [];
		postDataObj.push({time: currentTime, postText: postInput.value});
		//change array of obj to string to store in localStorage
		localStorage.setItem('postData', JSON.stringify(postDataObj));
	});

	// if there is localStorage, add to DOM
	if(localStorage.postData){
		var globalStorage = JSON.parse(localStorage.getItem("postData"));
		for (var i = 0; i<globalStorage.length; i++){
		var newPost = document.createElement('div');
		var inputText = document.createTextNode(globalStorage[i].postText + " - " + globalStorage[i].time);
		newPost.appendChild(inputText);
		// prepend the new post
		pageDiv.insertBefore(newPost, pageDiv.firstChild);
		}
	}
}
else {
	submitButton.addEventListener("click", function(){
		var currentTime = (~~(Date.now() / 1000)%60);
		var postDataObj = [];
		postDataObj.push({time: currentTime, postText: postInput.value});
		//change array of obj to string to store in localStorage
		var newPost = document.createElement('div');
		var inputText = document.createTextNode(postDataObj[i].postText + " - " + postDataObj[i].time);
		newPost.appendChild(inputText);
		// prepend the new post
		pageDiv.insertBefore(newPost, pageDiv.firstChild);
		//will prevent page from reloading rather than storing a cookie
		event.preventDefault();
	});
}