	function prepend_combo() {

		var s = $('header #search form');
		var v = $('header #search form input[type="text"]');
		
		s.submit(function() { 
		$('#page').append('<div class="rand">' + $(v).val() + ' - '+ new Date().getSeconds() +' </div>'); 
		return false;
		});
	};	
	jQuery(document).ready(function($) {
		prepend_combo();
    });
