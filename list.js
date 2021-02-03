let strArr=[];

$("input[type='submit']").on("click",function(event){
    event.preventDefault();
    
    const txtBox=$("input[type='text']");
    let value = txtBox.val().toString();
    let display;
    strArr.push(value);
    
    for(let i=0;i<strArr.length;i++){        
        if(display==null){
            display=strArr[i];
        }else{
            display+=strArr[i];    
        }
    }
    
    txtBox.val("");
    $("#page").prepend("<p> "+display+"</p>");
});
