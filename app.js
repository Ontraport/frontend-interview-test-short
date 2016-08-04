document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
    console.log("DOM fully loaded and parsed");

    // var randomColours = ['3c6dd1', 'd13c9e', '3cd19e'];
    // var currentColour = 0;
    // var currentDemoColour = 0;

    var form = document.getElementById('search').children[0];
    console.log('this is the form', form);

    form.onsubmit = function (e) {

      e.preventDefault();

      console.log('heyyyyyy');

      var browserDateSeconds = new Date().getSeconds();

      var dataFromInputField = form.children[0].value;

      console.log("this is the data", dataFromInputField);

      var newListItem = document.createElement('LI');

      newListItem.innerHTML = dataFromInputField.concat(' - ' + browserDateSeconds.toString() + ' seconds');

      setTimeout(function() {
          newListItem.className = newListItem.className + " show";
      }, 10);

      var containerDiv = document.getElementById('page').children[0];

      containerDiv.insertBefore(newListItem, containerDiv.childNodes[0]);

      var inputs = form.getElementsByTagName('input')[0]

      inputs.value = '';

      console.log(inputs);
      
    }
  });
