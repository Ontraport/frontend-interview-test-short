const form = document.querySelector('form');
const page = document.getElementById('page');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputVal = event.target[0].value;
  const newEl = document.createElement('div');
  newEl.innerText = inputVal;
  page.prepend(newEl);
});
