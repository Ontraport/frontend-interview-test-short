document.addEventListener("DOMContentLoaded", init);

function init() {
    var page = document.getElementById('page');
    var form = document.getElementsByTagName('form')[0];

    form.addEventListener('submit', function(e) {
        var date = new Date();

        var el = document.createElement('span');
        el.className = 'form-post';
        el.innerHTML = this.post.value + ' - ' + date.getSeconds();

        page.insertBefore(el, page.firstChild);

        e.preventDefault();
    });
};
