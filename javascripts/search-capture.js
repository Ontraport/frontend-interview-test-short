$(function() {
    $('form').submit( function() {
        // Prevents the default POST action
        event.preventDefault();

        // Gets current seconds using Date()
        var date = new Date();
        var seconds = date.getSeconds();

        // Gets the text input
        var input = $(":text").val();

        // Clear current text input
        $(":text").val("");

        // Prepend input and seconds to <div id="page">
        $("#page").prepend("<div>" + input + " - " + seconds + "</div>");
    });
})
