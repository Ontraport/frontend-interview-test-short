$(function() {

  var $page = $('#page');

  //Load data stored in localStorage if present
  if(!localStorage.getItem('arr')) localStorage.setItem('arr', JSON.stringify([]));

  var arr = JSON.parse(localStorage.getItem('arr'));

  for(var i = 0 ; i < arr.length ; i++) {
    var curObj = arr[i];
    $page.prepend('<p>' + curObj.key + ' - ' + curObj.val + '</p>');
  }

  //Prepend text from text input
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

  //clear data on page and in localStorage
  $('button').on('click', function() {
    localStorage.clear();
    arr = [];
    $page.empty();
  });

});