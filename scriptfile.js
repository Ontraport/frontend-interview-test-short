$(function() {
  $('#search').submit(function(e) {
    e.preventDefault();
    
    var data = $('input[name="post"]').val();
    var browserSeconds = (new Date()).getSeconds();
    var dataSeconds = data + ' - ' + browserSeconds + '<br><br>';
    $( "#page" ).prepend( dataSeconds );
  })
});