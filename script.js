// get the page element
const page = document.getElementById("page");
// get the form element
const searchForm = document.getElementById("search");
// get the search input element
const searchInput = document.getElementsByName("post")[0];

// add a listener for the submit action
searchForm.addEventListener("submit", function (event) {
  // prevent the default refresh action
  event.preventDefault();
  // create a line break
  const lineBreak = document.createElement("br");
  // get the search value
  const formValue = searchInput.value;
  // get the current date
  const seconds = new Date().getSeconds();
  // concatenate two values
  const newItem = `${formValue} - ${seconds}`;
  // prepend it to the page
  page.prepend(newItem, lineBreak);
  // clear the input on submit
  searchInput.value = "";
});
