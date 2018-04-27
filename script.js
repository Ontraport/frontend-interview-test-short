// Author: Aaditya Maheshwari
// Not changing anything in the html since that is the requirement except adding the script tag. I didn't even use ids. xd

let submit = document.querySelector("input[type=submit]")
submit.addEventListener("click", function appendString(e){
	let formval = document.querySelector("input[type=text]").value
	let dt = new Date().getSeconds()
	let node = document.createElement("p")
	document.getElementById("page").appendChild(node)
	node.innerHTML = formval + " - " + dt
	e.preventDefault()
})
