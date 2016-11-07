var form = (function() {
	'use strict';

	var form;

	// CONSTANTS
	const FORM_QUERY = 		'#search form';
	const INPUT_QUERY = 	'input[type=\"text\"]';
	const OUTPUT_QUERY = 	'#page';

	// Cache DOM
	var $form = 			$(FORM_QUERY);
	var $input = 			$(INPUT_QUERY, $form);
	var $output = 			$(OUTPUT_QUERY);


	function init() {
		// Bind events
		$form.addEventListener('submit', function(event) {
			formSubmit(event);
		});
	}

	function render(content) {
		$output.insertAdjacentHTML('beforeend', wrapOutputInHTML(content));
	}

	function formSubmit(event) {
		event.preventDefault();

		if ($input.value) {
			render(addTimestamp($input.value));
			$input.value = '';
		} else {
			alert('Input can\'t be empty!');
		}
	}


	// Helper functions
	function $(selector, context) {
		context = context || document;
		return context.querySelector(selector);
	}

	function wrapOutputInHTML(value) {
		return `<p>${value}</p>`;
	}

	function addTimestamp(value) {
		let date = new Date();
		return `${value} - ${date.getSeconds()}`;
	}


	// API
	form = {
		init: init
	}


	return form;
})();

form.init();