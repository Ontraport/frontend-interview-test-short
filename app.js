//my code
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var page = document.getElementById('page'); 
    var search = document.getElementById('search');
    var form = search.children[0];
    var text = form.children[0];
    var submit = form.children[1];
    
    submit.addEventListener('click', function(e){
      e.preventDefault();
      var p, seconds;
      if(text.value.length > 0){
        p = document.createElement('p');
        seconds = new Date().getSeconds();
        p.innerText = text.value + ' - ' + seconds;
        text.value = '';
        text.focus();
        if(page.children.length === 0){
          page.appendChild(p);
        }else{
          var child = page.children[0];
          page.insertBefore(p, child);
        }
      }
    });
  });
})();
