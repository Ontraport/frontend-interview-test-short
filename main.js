$(function() {

  var $page = $('#page');

  if(!localStorage.getItem('arr')) localStorage.setItem('arr', JSON.stringify([]));

  var arr = JSON.parse(localStorage.getItem('arr'));

  for(var i = 0 ; i < arr.length ; i++) {
    var curObj = arr[i];
    $page.prepend('<p>' + curObj.key + ' - ' + curObj.val + '</p>');
  }

  $('form').on('submit', function(e) {
    e.preventDefault();

    var date = new Date();
    var seconds = date.getSeconds();

    var $textInput = $('input[type=text]');
    var $inputVal = $textInput.val();

    $page.prepend('<p>' + $inputVal + ' - ' + seconds + '</p>');

    arr.push({key: $inputVal, val: seconds});
    localStorage.setItem('arr', JSON.stringify(arr));

    $textInput.val('');

  });

});