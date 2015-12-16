//add the current time (seconds) to the page with a post

$(document).ready(function(){
  newPost();
})


var newPost = function(){
  $('#search').on("click", '#new_post_link', function(event) {
    event.preventDefault();
    var postText = $('#new_post_text').val();
    var postDate = new Date;
    var postTime = postDate.getSeconds();
    var postWithTime = postText + " " + "-" + " " + postTime;
    $('#page').prepend(postWithTime);
//clear the text field
    $('#new_post_text').val('');
  })
}