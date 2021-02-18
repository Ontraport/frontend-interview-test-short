const $form = document.querySelector('form');
const $page = document.querySelector('#page');
const [ $inputBox ] = $form.children;

$form.addEventListener('submit', () => {
  event.preventDefault();
  const $text = document.createElement('p');
  $text.textContent = `${$inputBox.value} - ${new Date().getSeconds()}`;
  $page.prepend($text);
  $form.reset();
});
