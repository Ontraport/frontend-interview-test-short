//////// jQuery ////////

// on click of input type submit
$("input[type='submit']").click(function(e) {
    // prevents page refresh
    e.preventDefault();

    const content = $("input[name='post']").val();
    const date = new Date();
    const page =  $("#page");

    // prepends value into div with an id of page and get date seconds 
    page.prepend(`<p>${content} - ${date.getSeconds()}</p> <br/>`);
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
        const post = document.createElement("p");
        const date = new Date();
        const newLine = document.createElement("br");
        const page =  document.getElementById("page");

        // prepends values
        post.textContent = content + " - " + date.getSeconds();
        page.prepend(post);
        page.prepend(newLine);
        document.querySelector("input[name='post']").value = '';
    }
})
*/




