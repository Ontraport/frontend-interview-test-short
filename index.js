document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
    const page = document.getElementById('page')
    const form = document.forms[0]
    const postInput = form.children.post
    const submit = form.lastElementChild

    submit.addEventListener('click', (e)=> {
      e.preventDefault()
      const newDate = new Date();
      let seconds = newDate.getSeconds()
      let p = document.createElement('p')
      p.innerText = `${postInput.value} - ${seconds}`
      page.prepend(p)
      // Here you would add call to post to server
      // if successful we would clear out the value of the input.
      postInput.value = ''
    });
  })

// Notes/thoughts
// Usually I would have assigned an ID to each (form, input) tag
// This way I could have located the exact tag even if their location changed.



// More condense submit example. Above is just for readibility

  // submit.addEventListener('click', (e)=> {
  //   e.preventDefault()
  //   const date = new Date();
  //   let p = document.createElement('p')
  //   p.innerText = `${postInput.value} - ${date.getSeconds()}`
  //   page.prepend(p)
  //   // Here you would add an event listener to post to server
  //   // if successful we would clear out the value of the input
  //   // else provide error message to user
  //   postInput.value = ''
  // });
