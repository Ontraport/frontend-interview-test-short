/**
 * Prepends provided data to the provided container.
 * It creates a new div element and sets its content as the provided data.
 * 
 * @param {string} data to be prepended
 * @param {HTMLElement} container to which the data will be prepended
 */
const prependDataToElement = (data, container) => {
  // create new div with new content
  const newPost = document.createElement('div');
  newPost.innerHTML = data;

  // prepend new div to page
  container.prepend(newPost);
}

/**
 * Handler for form submission.
 * @param {event} event on form submission
 */
const handleFormSubmission = (event) => {
  // prevent default form submission
  event.preventDefault();

  // get form data 
  const data = new FormData(event.target);
  const post = data.get('post');

  // concatenate the second of the current browser date
  const date = new Date();
  const seconds = date.getSeconds();
  const postWithDate = `${post} - ${seconds}`;

  // prepend data to page
  const pageEl = document.getElementById('page');
  prependDataToElement(postWithDate, pageEl);  
}

/**
 * DOM initialisation logic implemented here.
 * Adds event listeners.
 */
const init = () => {
  const formEl = document.querySelector('#search form');
  formEl.addEventListener('submit', handleFormSubmission);
}

init();