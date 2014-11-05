// remove whitespace from #page before prepending any input
$('#page').empty();

$('#search form').submit(function(e) {
  e.preventDefault();
  var text = $('#search input[name=post]').val();
  $('#search form').trigger('reset');
  if (!text.trim()) {
    return alert("Eh brah please enter some text!");
  }
  var now = new Date();
  $('#page').prepend('<p>' + text + ' - ' + now.getSeconds() + '</p>');
});