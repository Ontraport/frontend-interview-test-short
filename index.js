const fetchFormData = () => {
    let inputData = document.querySelector('input[name=post]').value;
    let date = new Date();
    let para = document.createElement("p");
    let node = document.createTextNode(inputData + " - " + date.getSeconds());
    para.appendChild(node);
    let element = document.getElementById('page');
    element.insertBefore(para, element.firstChild);

    return false; // to prevent form from refreshing
}