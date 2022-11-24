const searchForm = document.getElementById('search-form')
const page = document.getElementById('page')


searchForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const searchFormData = new FormData(searchForm)
    const thoughtPost = searchFormData.get('post')

    var today = new Date() 
    var seconds = today.getSeconds()

    page.innerHTML += `
    <p>${thoughtPost} - ${seconds}</p>
    `
})