/**********************************************************
FUNCTION: appendText()
RECEIVES: Input Text (obj) textInput, String targetDivId
RETURNS: True on success, False on failure.
DESCRIPTION: prependTextToDiv() receives a string denoting the id of
a div to which "textToPrepend" will be prepended. Assuming
user input is valid, prependTextToDiv()) will obtain a reference
to the div element, and finally prepend "textToPrepend" with
the seconds from the current date timestamp to the innerHTML
of the div obtained from targetDivId.
**********************************************************/
function prependTextToDiv(textInput, targetDivId)
{
	var textToPrepend = textInput.value;
	var targetDiv = document.getElementById(targetDivId);

	if(!targetDiv)
	{
		alert("Error: The target div was not found on the page");
	}
	else if(!textToPrepend || textToPrepend.length == 0)
	{
		alert("Error: The input string was empty or null");
	}
	else
	{
		//We have valid input!
		var date = new Date();
		var previousText = targetDiv.innerHTML;
		previousText = textToPrepend + " - " + date.getSeconds() + "<br/>" + previousText;
		targetDiv.innerHTML = previousText;
		textInput.value = "";

		//IE doesn't do this for us automatically
		textInput.focus();

		//Here is where we might return true if we actually wanted to submit the form.
		//Instead, any of our conditions above will fall through to the final statement.
		//return true;
	}

	//prevent form submission (and with it page refresh, erasing our innerHTML) for this exercise
	return false;
}