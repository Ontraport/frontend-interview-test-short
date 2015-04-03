window.addEventListener('load', function() {
	document.addEventListener('submit', function(e) {
		// Prevent post.
		e.preventDefault();

		var form = document.getElementsByTagName('form')[0];
		var posts = document.getElementById('page');
		
		// Create new post
		var post = document.createElement('p');
		var thoughts = document.getElementsByTagName('input')[0].value;
		var seconds = new Date().getSeconds();
		post.innerHTML = thoughts + " - " + seconds;

		if (!posts.firstChild) {
			posts.insertBefore(post, null);
		} else {
			posts.insertBefore(post, posts.firstChild);
		};

		form.reset();
	});
});
