//user inputs from post button will be stored here
var userInput = [];

//assign div with id "search" to a variable
var postButton = document.getElementById("search");
var pageContent = document.getElementById("page");

//adds event listener to submit button in postButton
postButton.addEventListener("submit", postClicked);

function postClicked(evt){
    //a bit of tomfoolery to prevent page refresh on submit
    evt.preventDefault();
    addEntry();    
    refreshContent();
}

function addEntry(){
    //create a Date object so we can append seconds count
    var date = new Date();
    //slightly ugly technique to get user input from text field which lacks an ID -- thus avoiding changes to markup as per test instructions 
    var inputText = document.getElementsByName("post")[0].value;
    var newEntry = "<p>" + inputText + " - " + date.getSeconds() + "</p>";
    userInput.push(newEntry);
}

function refreshContent(){
    var curIndex = userInput.length -1;
    var contentTemp = "";
    for (i = curIndex; i >= 0; i--){
        contentTemp += userInput[i];
    }
    pageContent.innerHTML = contentTemp;
}