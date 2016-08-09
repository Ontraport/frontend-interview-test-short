window.addEventListener("load", function(){
    var formElement =document.getElementsByTagName('form')[0];

    formElement.addEventListener("submit",function(callback){
      callback.preventDefault();
      seconds=new Date().getSeconds();
      formContent=document.getElementsByName('post')[0].value;
      var childEle=document.createElement("p");
      childEle.innerHTML=formContent+ "-" +seconds;
      var divEle=document.getElementById('page');
      divEle.insertBefore(childEle,divEle.firstChild);
      document.getElementsByName('post')[0].value="";

    });

});
