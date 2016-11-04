var textArray = [];		//adding text inputs to an array

$('#search').children().submit(function(){
	 insertText();		
	 return false;		//false to stop refresh
	});

function insertText(){
	var getSearchText = document.getElementsByName("post")[0].value; 	
	var date = new Date();
	var sec  = date.getSeconds();
	textArray.push(getSearchText + " - "+ sec);		    //push input text to textArray
	document.getElementsByName("post")[0].value = null;	//to clear input field
	//console.log("add search: "+ textArray);			//for debugging
	
	var textDisplay = "";								
	for (var i = textArray.length-1; i >= 0 ;i--) {
        textDisplay += textArray[i] + "<br>";			//formatting text for output, added line-height in css file
    }
    document.getElementById('page').innerHTML = textDisplay;		
}
