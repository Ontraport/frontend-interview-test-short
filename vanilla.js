document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementsByTagName("input")[1];
    let page = document.getElementById("page");
    
    let form = document.querySelector("form");

    console.log(button)
    console.log(page)
    form.addEventListener("submit", addPost)

});

function addPost(event){
    event.preventDefault();
    let newPost = document.createElement("div");
    let input = document.querySelector("input");

    newPost.textContent = input.value + " - " + returnSeconds();
    page.prepend(newPost);
    newPost.classList.add("post")
    input.value = "";
}

function returnSeconds(){
    let date = new Date();
    return date.getSeconds();
}