//This is my native Javascript solution.
/*
Please note that I am more familiar with the use of jQuery for DOM selection, 
so I did need to use the web to create this solution
*/
document.querySelector('#search form').addEventListener('submit', function(e) {
    //Prevent default submit event
	e.preventDefault();
	
	//Retrieve browser time
	var currentTime = new Date();
	var seconds = currentTime.getSeconds();
	
	//Retrieve content from input field
	var input = document.getElementsByTagName("input")[0].value;
	
	//Select page div
	var page_div = document.getElementById('page');

	//Append content to div
	page_div.innerHTML = page_div.innerHTML + input + " - " + seconds + "<br>";
	
});
