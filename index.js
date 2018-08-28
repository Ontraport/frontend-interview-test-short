document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
  })
const page = document.getElementById('page')
const form = document.forms[0]
const postText = form.children.post
const submit = form.lastElementChild


submit.addEventListener('click', (e)=> {
  e.preventDefault()
  let textValue = e.target.parentElement.children.post.value
  let p = document.createElement('p')
  p.innerText = textValue
  page.prepend(p)

});
