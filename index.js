document.addEventListener("DOMContentLoaded", () => { 
    const form = document.querySelector("form");
    const input = document.querySelectorAll("input")[0];

    const validateInput = () => input.value.trim().length > 0;

    const submitForm = e => {
        e.preventDefault();

        if (validateInput()) { 
            const page = document.querySelector("#page");
            const seconds = new Date().getSeconds();
            const text = document.createElement('p');
            text.innerHTML = `${input.value} - ${seconds}`;
            page.insertBefore(text, page.firstChild);
        }
    };

    form.onsubmit = submitForm;
});

