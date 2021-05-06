const page = document.querySelector('#page') // Select the page div

const form = document.querySelector('#search')// Select the form


//Create a new on submit that has our desired functionality
form.onsubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    const lineBreak = document.createElement('br') // Aesthetic purposes only
    const formValue = form.firstElementChild.firstElementChild.value // Get the value from the form 
    const seconds = new Date().getSeconds() // Get the seconds
    const final = `${formValue} - ${seconds}` // Put them together
    page.prepend(final, lineBreak) // prepend 
}

//I could reduce the amount of variables, but I believe it's 
//easier to read like this.