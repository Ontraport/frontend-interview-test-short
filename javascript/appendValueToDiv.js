const searchForm = document.querySelector("#search form")
function createNewNode(element, innerText = null) {
    let newElement = document.createElement(element)
    if (innerText !== null) {
        newElement.innerText = innerText
    }

    return newElement
}

searchForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const pageDiv = document.querySelector("#page")

    const newEntry = searchForm.querySelector("input[name=post]").value
    pageDiv.prepend(createNewNode("div", `${newEntry} - ${new Date().getSeconds()}`), createNewNode("br"))
})
