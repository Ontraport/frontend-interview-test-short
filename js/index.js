$(() => {
    $('form').on('submit', e => {
        e.preventDefault();

        const $input = $('input[name="post"]');
        const $pageDiv = $('div#page');

        const inputVal = $input.val();
        const seconds = new Date().getSeconds();

        const $newElement = $('<div></div>');
        // set text safely
        $newElement.text(`${inputVal} - ${seconds}`);

        $pageDiv.prepend($newElement);
        // clear the input to get ready for another value
        $input.val('');
    });
});
