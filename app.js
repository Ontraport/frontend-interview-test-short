$(document).ready(function() {
    $('#search').submit(function(event) {
        var x = new Date().getSeconds();
        $('#page').prepend($("<p>"+$('form [name="post"]').val()+" - "+x+ "</p>"));
        $("form [name='post']").val('');
        event.preventDefault();
    });    
});
