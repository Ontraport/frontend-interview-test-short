document.addEventListener("DOMContentLoaded", function() {
  // Attach a submit event listener to the form inside the div with id 'search'.
  document.querySelector('#search form').addEventListener('submit', function(e) {
      // Prevent the form from being submitted and the page from being refreshed.
      e.preventDefault();

      // Get the value of the input field with the name 'post'.
      const inputValue = document.querySelector('input[name="post"]').value;

      // Get the current second.
      const currentSecond = new Date().getSeconds();

      // Concatenate the input value and the current second.
      const updatedValue = inputValue + " " + currentSecond;

      // Create a new paragraph element.
      let newParagraph = document.createElement('p');

      // Set the text content of the new paragraph to the updated value.
      newParagraph.textContent = updatedValue;

      // Prepend the new paragraph to the div with the id 'page'.
      document.querySelector('#page').prepend(newParagraph);
  });
});
