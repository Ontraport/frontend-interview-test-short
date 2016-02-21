var callback = function(e) {
    e.preventDefault();
    
    var el = document.getElementById('page'),
    elChild = document.createElement('div'),
    elContent = document.getElementsByName('post')[0].value;

    elChild.innerHTML = elContent + '- ' + new Date().getSeconds();

    el.insertBefore(elChild, el.firstChild);
};

var formEl = document.getElementsByTagName('form')[0];

formEl.addEventListener('submit', callback, false);


