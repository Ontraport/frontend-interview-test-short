(function() {
  $('#search').submit(function() {
    var inputText = $('form input[name="post"]').val();
    event.preventDefault();
    $('#page').prepend('<p>' + inputText + '</p>');
  });
})();
