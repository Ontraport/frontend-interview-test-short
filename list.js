$("input[type='submit']").on("click",function(event){
    event.preventDefault();
    let txtBox=$("input[type='text']");
    let todoText = txtBox.val();
    txtBox.val("");
    $("#page").append("<li> "+todoText+"</li>");
});