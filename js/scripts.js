jQuery(document).ready(
	function($) {
		$("form").submit(handle_submit);
		$("input[type='text']").focus(mark_valid);
	});

	var count = 0; 
	
	function handle_submit(event) {
		event.stopPropagation();
		var status = validate(event)
		if(!status) {
			return false;
		} else {
			// I saw there were styles for rand1, rand2, and rand3, so I figured I'd make these work
			if(count < 3) {
				count++;	
			} else {
				count = 1;
			}
			// Although there is currently only one form on the page, using the more specific references ensures any additional forms and their inputs won't break the logic
			var form = $("#search").find("form"), 
				thoughts = $(form).find("input[type='text']").val();
			display_thoughts(thoughts, count);
		
			// Prevent form from actually submitting
			event.preventDefault();
			return false;
		}
	}
	
	function validate(event) {
		// Again this is maybe a little overkill now because there's only one form with a single input, but this code ensures less time spent refactoring and generifying later if additional fields or forms are added to the page
		try {
			var form = $(event.target),
				required_fields = form.find("input[type='text']");
			required_fields.each(function(index, identifier) {
				var field = $(identifier);
				var empty_field = field.val() == "";
                   
				if( empty_field ) {
					field.addClass("invalid");
					// With additional input fields, this message would be more generic, but for the purposes of this exercise I thought it made sense
					field.attr("placeholder", "Please type your thoughts here");
				} else {
					field.removeClass("invalid");
				};
			});
            
			var invalid_fields = form.find(".invalid").map(function(index, field) {return field.id;});
			var valid = invalid_fields.length == 0,
				form_message = form.find(".message");
			if(valid) {
				mark_valid();
			} else {
				var message = "Please enter valid values for the fields marked in red.";
				form_message.html(message).show();
			}
            
		} catch (x) {
			console.log(x);
		}
		return valid;
	}
	function mark_valid() {
		$("input[type='text']").removeClass("invalid");
	}
	function display_thoughts(thoughts, count) {
		var seconds = get_time_seconds();
		$("#page").prepend("<p class='rand" + count + "'>" + thoughts + " - " + seconds + "</p>");
	}
	
	function get_time_seconds() {
		var d = new Date(),
			seconds = d.getSeconds();
		return seconds;
	}
	