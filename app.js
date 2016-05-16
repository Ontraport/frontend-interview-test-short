$(document).ready(function() {
    $('form').on('submit', prependThought);
});

function prependThought() {
    event.preventDefault();
    var thoughts = {};

    $.each($('form').serializeArray(), function (i, field) {
        thoughts[field.name] = field.value;
    });

    currentTime = new Date();
    seconds = currentTime.getSeconds();

    $('#page').prepend('<p>' + thoughts.post + ' ' + seconds + '</p>');
    console.log(thoughts);
}