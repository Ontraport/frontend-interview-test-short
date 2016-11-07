var form = (function() {
	'use strict';

	var form;

	// CONSTANTS
	const FORM_QUERY = 		'#search form';
	const INPUT_QUERY = 	'input[type=\"text\"]';
	const OUTPUT_QUERY = 	'#page';

	// globals
	var inputsArray =		[];

	// Cache DOM
	var $form = 			$(FORM_QUERY);
	var $input = 			$(INPUT_QUERY, $form);
	var $output = 			$(OUTPUT_QUERY);

	// Bind events
	$form.addEventListener('submit', function(event) {
		formSubmit(event);
	});
	

	function init() {
		render();
	}

	function reset() {
		inputsArray = [];
		init();
	}


	function render() {
		let content = '';

		for (let value of inputsArray) {
			content += wrapOutputInHTML(value);
		}

		$output.innerHTML = content;
	}

	function formSubmit(event) {
		event.preventDefault();

		if ($input.value) {
			inputsArray.push(normalizeInputValue($input.value));
			$input.value = '';
			render();
		} else {
			alert('Input a non-empty value!');
		}
	}

	function wrapOutputInHTML(value) {
		return `<p>${value}</p>`;
	}

	function normalizeInputValue(value) {
		let date = new Date();
		return `${value} - ${date.getSeconds()}`;
	}


	// Helper functions
	function $(selector, context) {
		context = context || document;
		return context.querySelector(selector);
	}


	// API
	form = {
		init: init,
		reset: reset
	}


	return form;
})();

form.init();