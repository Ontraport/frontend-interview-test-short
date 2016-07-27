$(document).ready(function() {
  var container = $('<ul></ul>');

  function seconds() {
    var date = new Date();
    return date.getSeconds();
  }

  function makeHtml(txt) {
    var item = $('<li></li>');
    item.text(txt + ' - ' + seconds());
    container.prepend(item);
    $('#page').append(container);
  }

  function clearInputValue(str) {
    $('input[name="post"]').val('');
  }

  function getInputValue() {
    return $('input[name="post"]').val();
  }

  $('#search form').on('submit', function() {
    event.preventDefault();

    var inputText = getInputValue();

    if(inputText) {
      makeHtml(inputText);
      clearInputValue();
    } else {
      alert("You must enter something");
    }
  })
})
