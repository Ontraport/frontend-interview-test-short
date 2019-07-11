//////// Vanilla JS ////////
// listens for a click
document.addEventListener('click', function (event) {
    // prevents page refresh
    event.preventDefault();
    // if click matches input type submit, run code inside
    if(event.target.matches("input[type='submit']")) {
        // grabs value in input field with name of post
        const content = document.querySelector("input[name='post']").value;
        // create a date
        const date = new Date();
        // create a line break
        const newLine = document.createElement("br");
        // prepends value into div with an id of page and get date seconds 
        document.getElementById("page").prepend(content + " - " + date.getSeconds());
        // prepend line break
        document.getElementById("page").prepend(newLine);
        // clear input field of text after click
        document.querySelector("input[name='post']").value = '';
    }
})


//////// jQuery ////////
/*
// on click of input type submit
$("input[type='submit']").click(function(e) {
    // prevents page refresh
    e.preventDefault();
    // grabs value in input field with name of post
    const info = $("input[name='post']").val();
    console.log(info);
    // create a date
    const date = new Date();
    // prepends value into div with an id of page and get date seconds 
    $('#page').prepend(`${info} - ${date.getSeconds()} <br/>`);
    // clear input field of text after click
    $("input[name='post']").val('');
})
*/
