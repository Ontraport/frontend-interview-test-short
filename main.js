/* ONTRAPORT Front-End Evaluation, Short Test */
/* Brian Cottrell                             */
/* 01-29-2010                                 */
/* Description: In order the update the page  */
/* content on each submission of the form,    */
/* input data is passes into the browser      */
/* storage so that it is retained between     */
/* page refreshes.                            */

/*Functions*/
//This is called when the page is loaded
function loadPage(){
    //Add event listeners to the text input and submit button
    document.getElementsByTagName('input')[0].addEventListener('keyup', editText);
    document.getElementsByTagName('input')[1].addEventListener('click', prependText);
    //Load all previously submitted text onto the page element
    document.getElementById('page').innerHTML = JSON.parse(sessionStorage.pageText);
}
//Respond whenever a character is entered into the text input
function editText(){
    //Add a variable to the browser session storage if it doesn't exist
    if(!sessionStorage.inputText){
        sessionStorage.inputText = JSON.stringify('');
    }
    //Temporarily store whatever is in the text box
    sessionStorage.inputText = JSON.stringify(document.getElementsByTagName('input')[0].value);
}
//Respond when the post button is clicked
function prependText(){
    //Add a variable to the browser session storage if it doesn't exist
    if(!sessionStorage.pageText){
        sessionStorage.pageText = JSON.stringify('');
    }
    //Prepend the current text in the input to all previously submitted text and add seconds
    sessionStorage.pageText = JSON.stringify(JSON.parse(sessionStorage.inputText)+
        ' - '+new Date().getSeconds()+'</br>'+JSON.parse(sessionStorage.pageText));
}
/*Program*/
//Load the page whenever the script is run
loadPage();
