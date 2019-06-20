//Begins a function meant to display the user's input within the "#page" div as well as
//indicating the number of seconds between the user's click and the moment the page
//was first loaded.  The first step is to identify the "Post" button by its Tag name, 
//and then add an event listener to it that listens for a "click."
document.getElementsByTagName("INPUT")[1].addEventListener("click", function () {
//Instructs the function to not perform whatever action it normally would have performed.
    event.preventDefault();
    //declares the "userInput" variable, and defines its value as whatever the user
    //has written within the first "input" field.
    let userInput = document.getElementsByTagName("INPUT")[0].value;
    //declares the "userInputVarient" variable, and defines it as "userInput" plus
    //a string containing a hyphen inbetween two spaces.
    let userInputVariant = userInput + (" - ");
    //declares the "timeInMilliseconds" variable, and defines it as the number of 
    //milliseconds that have elapsed since the page was first loaded.
    let timeInMilliseconds = performance.now();
    //declares the "timeInSeconds" variable, and sets it to equal the result of 
    //"timeInMilliseconds" divided by 1000.
    let timeInSeconds = timeInMilliseconds / 1000;
    //declares the "timeInSecondsRounded" variable, and defines it as equal to 
    //"timeInSeconds" rounded to a whole number.
    let timeInSecondsRounded = timeInSeconds.toFixed(0);
    //declares the "userInputAndTime" variable, and defines it as equal to 
    //the concatenated value of "userInputVariant" and "timeInSecondsRounded"
    let userInputAndTime = userInputVariant.concat(timeInSecondsRounded);
    //line of jQuery that takes the "userInputAndTime" variable, adds two line breaks,
    //and prepends the result to the "#page" div.
    $("#page").prepend(userInputAndTime + ("<br><br>"));
});