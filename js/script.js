//Specify a function to execute when the DOM is fully loaded.
$(document).ready(function() {
  //Insert an unordered list to the id (page) in the HTML.
  $('#page').html('<ul></ul>');
  //Call a function when the form is submitted.
  $('form').submit(function(event) {
    //Get the value from the input into a variable.
    var data = $('[type="text"]').val();
    //Create a new variable that defines a list element.
    var item = $('<li>');
    //Create a new variable for the time.
    var time = new Date();
    //Set the text contents to the item variable.
    item.text(data + ' - ' + time.getSeconds() + 's');
    //Prepend the text in item to the unordered list.
    $("ul").prepend(item);
    //Prevents the default action of the function to be triggered.
    event.preventDefault();
  })
});
