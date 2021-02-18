const $form = document.querySelector('form');
const $page = document.querySelector('#page');
const [ $inputBox, $postButton ] = $form.children;

$postButton.addEventListener('click', () => {
  event.preventDefault();
  const $text = document.createElement('p');
  $text.textContent = `${$inputBox.value} - ${new Date().getSeconds()}`;
  $page.prepend($text);
  $form.reset();
});
