document.querySelector("input[type=submit]").addEventListener("click", function (event) {
	var div = document.createElement("div");
	var d = new Date();
	var x = document.querySelector("input[type=text]").value;
	x = x + " - " + d.getSeconds();
	document.getElementById("page").prepend(div, x);
	event.preventDefault();
}, false);
