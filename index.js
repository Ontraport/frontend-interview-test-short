document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
    const page = document.getElementById('page')
    const form = document.forms[0]
    const postInput = form.children.post
    const submit = form.lastElementChild


    submit.addEventListener('click', (e)=> {
      e.preventDefault()
      let p = document.createElement('p')
      p.innerText = postInput.value
      page.prepend(p)
      // Here you would add call to post to server
      // if successful we would clear out the value of the input.
      postInput.value = ''
    });
  })
