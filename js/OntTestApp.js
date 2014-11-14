/**
 * Created by dsmiley on 11/13/14.
 */
$( document ).ready(function() {
    console.log( 'init in OntTestPlugin');
    $('#search').ontTest({
        form:$('form').eq(0),
        outputContainer:$('#page'),
        input:$('input[type=text]').eq(0),
        submit:$('input[type=submit]').eq(0)
    });
});