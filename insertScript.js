$('#search').submit(function(){
 insertText();
 return false;	// false to stop refresh
});

var textArray = [];		//add all text inputs to array
function insertText () {
	
	var getSearchText = document.getElementsByName("post")[0].value;	
	var date = new Date();
	var sec  = date.getSeconds();
	textArray.push(getSearchText + " - "+ sec);		    //adding input text to textArray
	document.getElementsByName("post")[0].value = null;	//to clear input field, optional
	console.log("add search: "+ textArray);			//for debugging
	
	var textOutput = "";								
	for (var i = textArray.length-1; i >= 0 ;i--) {
        textOutput += textArray[i] + "<br>";			//formatting text for output, added line-height in css file
    }
    document.getElementById('page').innerHTML = textOutput;		
}
