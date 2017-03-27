/**
 *  File: client.js
 *  Author: Yousuf Nejati
 *  Date: 3/27/17
 *  Purpose: Using client side technology only, gather user input from form upon submit get request action,
 *  add the seconds in which the request was made, and finally prepend to the page. No modifications to the
 *  index.html file should be made.
 *
 *  We make the assumption that the user is using a browser that meets compatibility standards for browser
 *  storage capabilities.
 *  Use the script provided at https://developer.mozilla.org/en-US/docs/Web/API/Storage/SessionStorage
 *  to mitigate compatibility issues if this is not the case.
 */


let setupSearch = () => {
  const pageComponent = document.getElementById('page');
  pageComponent.innerHTML = sessionStorage.getItem('formInputs');
  const searchComponent = document.getElementById('search');
  // Add event listener to search component
  searchComponent.addEventListener('submit', () => {
    // Get text
    const textInput = document.getElementsByName('post')[0].value;
    // Pass it to ..
    search(textInput, 'formInputs')
  }, false);
};

let search = (textInput, dataStoreKey) => {
  const date = new Date();
  let searchText = textInput;
  // Get values from local storage
  let data = sessionStorage.getItem(dataStoreKey);

  if (data == null) {
    data = ''
  }

  if (searchText === undefined || searchText === null) {
    // Log the error here...
    console.log('Cannot proceed: undefined or null value');
  } else {
    const seconds = date.getSeconds();
    searchText += ' - ' + seconds;
    // Simplest way since session storage stores strings
    data = ('<p>' + searchText + '</p>') + data;
    // Update session storage with new form inputs
    sessionStorage.setItem(dataStoreKey, data);
  }
};

function init () {
  setupSearch();
}

window.onload = init;


