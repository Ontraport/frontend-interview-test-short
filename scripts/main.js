$('form').submit(function(){
    event.preventDefault();

    var content = $('.post').val();
    $('.post').val('');

    var date = new Date();
    var secs = date.getSeconds();

    var post = ('<br>' + content + ' - ' + secs + '<br>');
    $('#page').prepend(post);
});
