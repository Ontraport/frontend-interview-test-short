const postButton = document.getElementsByTagName("input")[1];
const input = document.getElementsByTagName("input")[0];
const page = document.querySelector("#page");

postButton.addEventListener("click", (e) => {
	// Preventing browser refreshing
	e.preventDefault();
	// Getting value from the input
	const textInput = input.value;

	if (textInput) {
		// Getting seconds by new Date and getSeconds method
		const browserSecond = new Date().getSeconds();

		//For the best optimization, I use innerHTML to append the value,then
		// use appendChild to append that value to avoid the re-render issue by innerHTML
		const newNode = document.createElement("p");
		newNode.innerHTML = `${textInput} - ${browserSecond}`;
		page.appendChild(newNode);

		// Reset the input text
		input.value = "";
	} else {
		alert("Please input text!!!")
	}
})
