$(document).ready(function(){
 
	//get the query string
	var a = window.location.search.substring(1);
	var b = a.split('=');	
	var c = b[1];
	
	//remove special characters from query string
   var d = c.replace(/[-,*+=<>!&]/g,' ');		
	
	//get the seconds of the current date
   var x = new Date();
	var y = x.getSeconds(); 
	
   //prepend the values to the page
   if (d != "") {
   $("#page").prepend( "<p>"+d+" - "+y+"</p>" );
   }
            
});
