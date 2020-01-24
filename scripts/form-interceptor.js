// wrapping within window onload is probably unecessary in this case, but good practice in general
window.addEventListener('load', function() {
  // might want a more specific selector in the future in case of multiple forms
  const form = document.forms[0];
  const input = form.querySelector('input[name="post"');
  const page = document.getElementById('page');

  function onFormSubmit(e) {
    e.preventDefault();

    // get values and generate string
    const userInput = input.value;
    const seconds = new Date().getSeconds();
    const stringToPrepend = `${userInput} - ${seconds}`;

    // create element and prepend
    const el = document.createElement('p');
    el.innerText = stringToPrepend;
    page.prepend(el);

    // reset form value
    input.value = '';
  }

  form.addEventListener('submit', onFormSubmit);
});