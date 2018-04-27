const form = document.querySelector('form');
const page = document.getElementById('page');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});
