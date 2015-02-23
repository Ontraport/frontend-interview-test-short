var main = function() {

    // Click-Event for the Form
    $('[value=Post]').click(function(e) {
      // PreventDefault() so page does not refresh upon hitting submit
      e.preventDefault();
      // Get current seconds in Browser
      var currentdate = new Date();
      seconds1 = currentdate.getSeconds();
      // Create variable post - Save value in input form
      var post = $('[name=post]').val();
     
      // Prepend to #page
      $('<div>').text(post + ' : ' + seconds1).prependTo('#page');
      
      // Clear input form box
      $('[name=post]').val('');
    });
}

$(document).ready(main);
