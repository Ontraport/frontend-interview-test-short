$(function() {

    /* return the seconds of the current browser time */
    var getDateSeconds = function() {
        var date = new Date(); // create instance of Date
        return date.getSeconds(); // get seconds
    };

    $("form").on("submit", function(e) {
        e.preventDefault(); //prevent page reload
        var submission = $("input[name='post']").val(); // get user input
        var entry = document.createElement("p");
        entry.innerText = submission + ' - ' + getDateSeconds();
        $("#page").prepend(entry);
    });

});
