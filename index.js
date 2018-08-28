document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
  })
const page = document.getElementById('page')
const form = document.forms[0]
let postText = form.children.post
let submit = form.lastElementChild


submit.addEventListener('click', (e)=> {
  let textValue = e.target.parentElement.children.post.value
  console.log(textValue);
  debugger
});
