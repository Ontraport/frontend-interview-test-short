//////// jQuery ////////
// on click of input type submit
$("input[type='submit']").click(function(e) {
    // prevents page refresh
    e.preventDefault();

    const info = $("input[name='post']").val();
    const date = new Date();

    // prepends value into div with an id of page and get date seconds 
    $('#page').prepend(`${info} - ${date.getSeconds()} <br/>`);
    // clear input field of text after click
    $("input[name='post']").val('');
})

//////// Vanilla JS ////////
/*
// listens for a click 
document.addEventListener('click', function (event) {
    // prevents page refresh
    event.preventDefault();

    if(event.target.matches("input[type='submit']")) {
        const content = document.querySelector("input[name='post']").value;
        const date = new Date();
        const newLine = document.createElement("br");

        // prepends values
        document.getElementById("page").prepend(content + " - " + date.getSeconds());
        document.getElementById("page").prepend(newLine);
        document.querySelector("input[name='post']").value = '';
    }
})
*/




