
$(window).one("click", function(){
  function postThoughtPlusTime(){
    var currentTime = new Date().getSeconds();
    var textInput = $("input[name='post']");
    var thought = $(textInput).val();
    var thougAndTime = HTMLThought.replace("%data%", thought + " - " + currentTime + " seconds ");

    if (thought.length === 0) {
    	alert("Please enter a Thought");
    }else{

    $("#page").prepend(thougAndTime);
    $(textInput).val("");
  }//end of postThoughtPlusTime
}


  $("form").on("submit", function(e){
    e.preventDefault();
    postThoughtPlusTime();
  });//end of one function
});//end of on function
