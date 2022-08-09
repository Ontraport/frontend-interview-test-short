let page = document.getElementById("page")
document.getElementsByTagName('form')[0].addEventListener('submit',handleSubmit)

function  handleSubmit(e){
    e.preventDefault();
    let formdata = this.getElementsByTagName('input')[0].value;
    if(formdata.trim() === '') return

    let date = new Date()
    let p = document.createElement('p')
    p.innerText = `${formdata} - ${date.getSeconds()}`
    page.prepend(p)
}