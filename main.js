export class Main {

    form = document.getElementById('form');
    page = document.getElementById('page');

    constructor() {
        this.form.addEventListener('submit', this.submitThought.bind(this));
    }

    submitThought(e) {
        e.preventDefault();

        const input = e.target.elements.namedItem('post');

        const thoughtDiv = document.createElement('div');
        thoughtDiv.innerText = input.value + ' - ' + new Date().getSeconds();

        this.page.prepend(thoughtDiv);

        input.value = '';
    }


}

export default new Main();