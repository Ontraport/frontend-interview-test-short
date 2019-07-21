let form = document.forms[0];
let page = document.getElementById('page');

function appendInput(e){
  //preventing get call on submit since there is no server to call
  if (e.preventDefault)
    e.preventDefault();

    let inputVal = new FormData(form).get("post");
    let date = new Date().getSeconds();
    let pNode = document.createElement('p')
    let text = document.createTextNode(String(inputVal) + " - " + String(date));

    pNode.appendChild(text);
    page.prepend(pNode);

    //I don't know if you wanted the form to reset, but I did it because
    //it is something I normally do on submit especially on single page apps
    form.reset();
}

form.addEventListener("submit", appendInput);
