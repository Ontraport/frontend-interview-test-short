// get html elements
const searchDiv = document.getElementById("search");
const searchInput = document.getElementsByName("post")[0];
const page = document.getElementById("page");
// const searchForm = searchDiv.children[1];
// add a submit listener
searchDiv.addEventListener("submit", function (event) {

    // prevent the default action
    event.preventDefault();

    // get the search value
    const inputValue = searchInput.value;

    // get current seconds
    const seconds = new Date().getSeconds();

    // concatenate input value and seconds
    const newValue = `${inputValue} - ${seconds}`;

    // create a line break;
    const lineBreak = document.createElement("br")

    // prepend it to the page div
    page.prepend(newValue, lineBreak);

    // clear input value
    event.target.reset();
});

