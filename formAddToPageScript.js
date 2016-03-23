function getSecond()
{
	var retString = "", date = {};
	date = new Date();
	retString = " - " + date.getSeconds() + "<br>";
	delete date;
    return retString;
};

function addToPage(ev)
{
	var thought="";
    ev.preventDefault(); // stop form from returning
    thought += $('#search form input:first-child').val();
    if(!thought) // if no user input disregard
    {
    	alert("Must have a valid thought.");
    }
    else
    {
		thought = "<br>" + thought + getSecond(); // add seconds to output string
     	$('#page').prepend(thought);
     	$("#search form")[0].reset();
    }
};
