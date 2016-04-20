
//Method to add Element at the beginning of the container
var addElement = function (e)
{
	e.preventDefault();

	var container = document.getElementById('page'); // Get Container
	var text =  document.getElementsByName('post')[0].value;
	var child = document.createElement('div');
	var seconds = new Date().getSeconds();

	child.innerHTML = text + ' - ' + seconds;
	container.insertBefore(child, container.firstChild);

}

// Adding listener to form. 
var form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", addElement, false);