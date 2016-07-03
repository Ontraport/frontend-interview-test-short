$(function() {

  var $page = $('#page');

  $('form').on('submit', function(e) {
    e.preventDefault();

    var date = new Date();
    var seconds = date.getSeconds();

    var $textInput = $('input[type=text]');
    var $inputVal = $textInput.val();

    $page.prepend('<p>' + $inputVal + ' - ' + seconds + '</p>');

    $textInput.val('');

  });

});