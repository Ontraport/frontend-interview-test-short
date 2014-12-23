$(document).ready(function() {
    $('#search').submit(function(event) {
        var x = new Date();
        $('#page').append($("<p>"+$('form [name="post"]').val()+" - "+x.getSeconds()+ "</p>"));
        $("form [name='post']").val('');
        event.preventDefault();
    });    
});
