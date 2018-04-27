$(document).ready(function() {
    $('input#addthought').click(function() {
        newthought = $('input#thought').val();
        dt = new Date();
        secs = dt.getSeconds();
        $('#page').prepend(newthought + ' - ' + secs + '</br>');
        $('input#thought').val('').focus();
        return false;
    });
});
