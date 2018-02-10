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
    let form = $('#search form')
    let input = $(form.find('input[type="text"]'))
    let page = $('#page')

    $('#search form').submit(function(e){
        e.preventDefault()
        
        render(page, getValue(input) + appendDateInSeconds())

        input.select()
    })
})()
