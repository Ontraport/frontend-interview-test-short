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

		// Create a new Paragraph and append the value to it
		const newNode = document.createElement("p");
		newNode.innerHTML = `${textInput} - ${browserSecond}`;

		// Use insertBefore method to display the value upside down
		page.insertBefore(newNode, page.childNodes[0]);

		// Reset the input text
		input.value = "";
	} else {
		alert("Please input text!!!")
	}
});
