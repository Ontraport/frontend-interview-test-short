$(function() {

  var $page = $('#page');
  var $textInput = $('input[type=text]');

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

    var $inputVal = $textInput.val();

    if($inputVal) {

      var date = new Date();
      var seconds = date.getSeconds();

      $page.prepend('<p>' + $inputVal + ' - ' + seconds + '</p>');

      arr.push({key: $inputVal, val: seconds});
      localStorage.setItem('arr', JSON.stringify(arr));

      $textInput.val('');
    }

  });

  //clear data on page and in localStorage
  $('button').on('click', function() {
    localStorage.clear();
    arr = [];
    $page.empty();
  });

});