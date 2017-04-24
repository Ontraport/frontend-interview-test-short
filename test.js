$(document).ready(function(event) {
  // Populate the page div with the "page" input text
  $("#search").children("form").submit(function(event) {
    var today = new Date();
    var inputMessage = "<div>" + $("input[name=post]").val() + " - " + today.getSeconds() + "</div>";
    var currMessage = $("#page").html();
    $("#page").html(inputMessage + currMessage);
    event.preventDefault();
  });
});
