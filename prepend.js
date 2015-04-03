window.addEventListener('load', function() {
	document.addEventListener('submit', function(e) {
		// Prevent post.
		e.preventDefault();

		var form = document.getElementsByTagName('form')[0];
		var thoughts = document.getElementsByTagName('input')[0].value;
		var seconds = new Date().getSeconds();
		var posts = document.getElementById('page');
		var post = document.createElement('p');
		var first = posts.firstChild;

		post.innerHTML = thoughts + " - " + seconds;

		if (first == undefined) {
			posts.insertBefore(post, null);
		} else {
			posts.insertBefore(post, first);
		};

		form.reset();
	});
});
