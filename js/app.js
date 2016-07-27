
$(document).ready(function() {
  var container = $('<ul></ul>');

  function seconds() {
    var s = new Date();
    var second = s.getSeconds();
    return second;
  }

  $('#search form').submit(function() {
    event.preventDefault();

    var inputText = $('input[name="post"]').val();

    if(inputText) {
      var item = $('<li></li>')
      item.text(inputText + ' - ' + seconds());
      $('input[name="post"]').val('');
    } else {
      alert("You must enter something");
    }

    container.prepend(item);
    $('#page').append(container);
  })
})
