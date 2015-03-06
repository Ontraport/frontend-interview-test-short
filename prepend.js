$("#search").submit(function() {
	var seconds = new Date().getSeconds();
	var thoughts = $('input[name=post]');
	$("#page").prepend(thoughts.val() + " - " + seconds + "<br/><br/>");
	event.preventDefault();
});

// Get value http://api.jquery.com/val/
// Submit http://api.jquery.com/submit/
// Get Seconds http://www.w3schools.com/jsref/jsref_getseconds.asp
// Post happens, then dissapears - Fix => http://stackoverflow.com/questions/4571835/jquery-showing-div-and-then-disappearing
// Form does not clear upon submit ==> I was unable to make any of the solutions work.   var thoughts = "" || $("#search").val(''); || document.getElementById('search').value = '';  || couldn't get any to work
/*
A commpetent progammer would have cleared the search field after post.  I gave it several tries, but non wrere successful.  A real developer might have also stopped a post from happening if the field was blank.
Full disclosure, I have never worked as a developer nor do I intend to.  I was asked to give this a shot so I did my best using more than a little help from google, but nothing more than searches (no direct help).  I listed where I got answeres from above.  I'm sure there are more elegant and robust ways a real programmer would apporaoch this.  I was just wanted to represent I understand the basics of the DOM, javascript and how they interact.
*/
