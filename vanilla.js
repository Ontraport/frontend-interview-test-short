document.addEventListener("DOMContentLoaded", () => {

    let page = document.getElementById("page");
    let form = document.querySelector("form");

    // ^ get the nodes we will be manipulating

    form.addEventListener("submit", addPost)

    // ^ adding event listener and then prepending the post on submit

});

function addPost(event){
    event.preventDefault();

    // ^ prevent page refresh so we can keep the post appended!

    let newPost = document.createElement("div");
    let input = document.querySelector("input");

    // ^ have to get the input node here so we have the input value at time of submit

    newPost.textContent = input.value + " - " + returnSeconds();
    page.prepend(newPost);

    // prepend it to the page node, then add class for styling and reset the form input

    newPost.classList.add("post")
    input.value = "";

}

function returnSeconds(){
    let date = new Date();
    return date.getSeconds();
    // getting current seconds
}