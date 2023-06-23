document.addEventListener("DOMContentLoaded", function() {
  // Attach a submit event listener to the form inside the div with id 'search'.
  document.querySelector('#search form').addEventListener('submit', function(e) {
      // Prevent the form from being submitted and the page from being refreshed.
      e.preventDefault();
  });
});
