/* index.js
Claire Inglehart
September 3nd, 2022
Ontraport Front End Software Developer Evaluation - Short Test */

var form = document.getElementsByTagName('form')[0];

window.onload = function(){
    //if session storage has no input, add empty array
    if(!sessionStorage.input){
        sessionStorage.setItem("input", JSON.stringify([]));
    }

    var page = document.getElementById('page')
    var inputArray = JSON.parse(sessionStorage.getItem("input"));

    //loop through array backwards and append paragraph element to the page div
    inputArray.reverse().forEach((x) => {
        let p = document.createElement('p');
        p.innerHTML = x;
        page.appendChild(p);
    })
}

form.onsubmit = function(){
    //retrieve array from session storage, add new element, put array back into storage
    var inputArray = JSON.parse(sessionStorage.getItem("input"));
    inputArray.push(this.elements[0].value + "\t" + "- " + new Date().getSeconds());
    sessionStorage.setItem("input", JSON.stringify(inputArray));
}