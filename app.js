//When document is ready...
$(document).ready(function(){
	//Focus on the input field
	$('input[name=post]').focus();
	
	//Find the submit button and modify its 'click' event handler
	$('input[type=Submit]').click(function(e){
		//Prevent the page from refresher all sneaky-like
		e.preventDefault();
		
		//Find the 'post' field
		var inField = $('input[name=post]');
		
		//Browser seconds
		var seconds = new Date().getSeconds();
		
		//Prepend the text with some carriage returns after it
		$('#page').prepend(inField.val() + ' - ' + seconds +'<br/><br/>');
		
		//Clear the text so we can enter another day
		inField.val('');
	});
	
	//NOTE:
	//If we were actually doing something server side, we wouldn't want to do it this way.
	//Even using a client-side-processing framework like Ember, we'd still want to actually submit data to the server for consistency/persistency.
	//If we didn't want the page to refresh, we'd make an $.ajax call.
});