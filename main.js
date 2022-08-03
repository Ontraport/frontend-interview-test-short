{/* <input type="text" name="post" placeholder="thoughts?"/> */}
const inputText = document.querySelector("input[type='text']");
{/* <form method="get"> */}
const formSubmit = document.querySelector("form[method='get']");
{/* <div id="page"></div> */}
const page = document.getElementById('page')
// This will dictate what happens when the user wants to submit the content inside of the 'thoughts?' input field
formSubmit.addEventListener("submit", function(event){
    // Prevent page reload
    event.preventDefault()
    // This creates a paragraph element according to the user's input
    const paragraph = document.createElement('p');
    // This is the user's input and the return value of a function that tracks the browser's date and assigns this value to the newly created paragraph element
    paragraph.innerText = `${inputText.value} - ${new Date().getSeconds()}`;
    // Then we prepend that paragraph element as a child to the page element
    page.prepend(paragraph);
    // This clears the input field after submission
    event.target.reset();
})