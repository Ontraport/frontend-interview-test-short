$(document).ready(function(){	

   //get the query string
   a = window.location.search.substring(1);
   b = a.split('=');	
   c = b[1];
	
   //remove special characters from query string
   d = c.replace(/[-,*+=<>!&]/g,' ');	
	
   //get the seconds of the current date
   x = new Date();
   y = x.getSeconds(); 


   //get previous value
   function getCookie(cname) {
   var name = cname + "=";
   var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0)==' ') c = c.substring(1);
     if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
   return "";
   } 

   //prepend the values to the page
   z = getCookie("oldval");
   if (d != "") { 
	$("#page").prepend( "<p>"+d+" - "+y+"</p>" + z );
	var cname="oldval";
   var cvalue = "<p>"+d+" - "+y+"</p>" + z;
   
   //re-set cookie and expiration
   var dt = new Date();
   dt.setTime(dt.getTime() + 1200000);
   var expires = "expires="+dt.toUTCString();
   document.cookie = cname + "=" + cvalue + "; " + expires;
   }
   else {
   	$("#page").prepend( z );
   }

});




