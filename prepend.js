const form = document.querySelector('form');
const page = document.getElementById('page');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputVal = event.target[0].value;
  const currSec = new Date().getSeconds();
  const newEl = document.createElement('div');
  newEl.innerText = `${inputVal} ${currSec}`;
  page.prepend(newEl);
});
