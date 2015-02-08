/**********************************************************
FUNCTION: appendText()
RECEIVES: TextToAppend, String targetDivId
RETURNS: True on success, False on failure.
DESCRIPTION: appendText receives a string denoting the id of
a div to which "textToAppend" will be appended. Assuming
user input is valid, appendText() will obtain a reference
to the div element, prepend "textToAppend" to it, and then
concatenate the seconds from the current date timestamp.
**********************************************************/
function appendText(textToAppend, targetDivId)
{
	var targetDiv = document.getElementById(targetDivId);

	if(!targetDiv)
	{
		alert("Error: The target div was not found on the page");
		//Normally we would return true here to prevent form submission
		//return false;
	}

	if(!textToAppend || textToAppend.length == 0)
	{
		alert("Error: The input string was empty or null");

		//Normally we would return true here to prevent form submission
		//return false;
	}

	var date = new Date();
	var previousText = targetDiv.innerHTML;
	previousText = textToAppend + " - " + date.getSeconds() + "<br/>" + previousText;
	targetDiv.innerHTML = previousText;

	//Normally we would return true here to allow form submission
	//return true;
}