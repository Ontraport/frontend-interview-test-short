window.addEventListener("load", function() {
	var form = document.getElementsByTagName('form');

	form[0].addEventListener("submit", function(e) {

		e.preventDefault();
		date = new Date();
		secs = date.getSeconds();
		post = document.getElementsByName("post")[0].value;
		var newItem = document.createElement("p");
		newItem.innerHTML = post + " - " + secs;
		page = document.getElementById("page");
		page.insertBefore(newItem, page.childNodes[0]);
		document.getElementsByName("post")[0].value = "";
	});
});


