/** Handler for the onload element. Adds event listeners for handling form submission. */
function documentLoaded() {
  document.forms[0].addEventListener('submit', postContent, false);
  document.forms[0].querySelector('input[type="submit"]').addEventListener('click', postContent, false);
}

/** Handler for the form submission. Caches the form input text and page div, before calling the appendValue function. */
function postContent(e) {
  e.preventDefault();

  postContent.cache = postContent.cache || {};

  if (!postContent.cache['text']) {
    postContent.cache['text'] = document.querySelector('input[name="post"]');
  }

  if (!postContent.cache['page']) {
    postContent.cache['page'] = document.getElementById('page'); 
  }

  appendValue(postContent.cache['page'], postContent.cache['text'].value);
}

/** Appends a given value a given element innerHTML property. The given value is extended with current second and a line break. */
function appendValue(element, value) {
  element.innerHTML += value + ' - ' + new Date().getSeconds() + '<br/>';
}

/** Inmediate function that attaches the code the onload event. */
(function () {
  window.onload = documentLoaded;
})();