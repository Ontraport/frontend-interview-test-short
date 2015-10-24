// JavaScript Document
if (!window.jQuery) {
  	var script = document.createElement('script');
	script.type = 'text/javascript';
  	if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                form_init();
            }
        };
    } else {  //Others
        script.onload = function(){
            form_init();
        };
    }
  	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
  	document.getElementsByTagName('head')[0].appendChild(script);
}
function form_init(){
	jQuery(document).ready(function(){
		jQuery("#search form").submit(function(e){
			e.preventDefault();
			$form=jQuery(this);
			
			//Current Input
			$input=$form.find("input[name=post]").val();
			
			//Current Second of browser Date
			$date=new Date();
			$input=$input+" "+$date.getSeconds()
			
			//Append to Target
			$target=jQuery("#page");
			$target.html($input+"<br />"+$target.html());
		});
	});
}