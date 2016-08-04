document.addEventListener('DOMContentLoaded', function (e) {
  e.preventDefault();

  const randomColors = ['3c6dd1', 'd13c9e', '3cd19e'];
  let currentColor = 0;

  // Grab the form
  const form = document.getElementById('search').children[0];

  // Attach a onsubmit event handler
  form.onsubmit = function (e) {
    e.preventDefault();



    /*
      Instantiated an instance of the Date object
      and call the getSeconds method on the returned
      object to get the seconds
    */
    const browserDateSeconds = new Date().getSeconds();

    // Get the value from the input
    const dataFromInputField = form.children[0].value;

    /*
      Created a check for the input value length
      so that you cannot submit an empty input
     */
    if (dataFromInputField.length < 1) {
      return alert('Please enter a value!');
    }

    // Create list items
    const newListItem = document.createElement('li');

    // Add the user input and the browser seconds to the list item node
    newListItem.innerHTML = dataFromInputField.concat(' - ' + browserDateSeconds.toString() + ' seconds');

    /*
      Lines 45-56 - Decided to animate the way the
      list items were prepended to the container div.
     */
    setTimeout(function () {
      newListItem.className = newListItem.className.concat('show');
    }, 10);

    const color = randomColors[currentColor];

    if (currentColor === randomColors.length - 1) {
      currentColor = 0;
    } else {
      currentColor++;
    }
    newListItem.style.backgroundColor = '#'.concat(color);

    // Grab the container div and get access to the ul node.
    const containerDiv = document.getElementById('page').children[0];

    // Prepend the new list item node to the ul node.
    containerDiv.insertBefore(newListItem, containerDiv.childNodes[0]);

    // Lines 65 and 66 - Grab the form and empty the input.
    const inputs = form.getElementsByTagName('input')[0]

    inputs.value = '';
  };
});
