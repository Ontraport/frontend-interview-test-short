const getValue = (input) =>  (input.length && input.val() !== '') ? input.val() : ''

const appendDateInSeconds = () => {
    let date = new Date()
    return ' - ' + date.getSeconds()
}

const render = (targetObj, value) => {
    if(targetObj && targetObj.length && value && value.length){
        targetObj.prepend('<p>' + value + '</p>')
    }
}

(function(){
    $('#search form').submit(function(e){
        e.preventDefault()

        let input = $($(this).find('input[type="text"]'))

        render($('#page'), getValue(input) + appendDateInSeconds())

        input.select()
    })
})()
