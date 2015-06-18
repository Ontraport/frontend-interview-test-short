(function(){
	
	var form = document.querySelectorAll('#search form')[0];
	form.addEventListener("submit", function(e){
	e.preventDefault();
	var formText = document.querySelectorAll('#search form input')[0];
	if (formText.value !== "") {
			var d = new Date();
			var text = formText.value + " - " + d.getSeconds();
			var textNode = document.createTextNode(text);
			var list = document.createElement("li");
			list.innerHTML += text
			var br = document.createElement("br");
			var parentNode = document.getElementById("page"); 
			
			if (parentNode.firstElementChild === null) {
				parentNode.appendChild(list)
			}else{
				parentNode.insertBefore(list, parentNode.firstElementChild);
			}
			
		}
		
	})
	
})();
