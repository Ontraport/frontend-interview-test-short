var main = function() {

    $('[value=Post]').click(function(e) {
      // Click event for the Form (aka Message Box "Whats on your mind")
      e.preventDefault();
      var currentdate = new Date();
      seconds1 = currentdate.getSeconds();
      var post = $('[name=post]').val();
     
      $('<div>').text(post + ' : ' + seconds1).prependTo('#page');
      $('[name=post]').val('');
    });
}

$(document).ready(main);
