(function() {
  getForm().onsubmit = handleSubmit;
})();

function getForm() {
  return Array.from(document.forms).pop();
}

function handleSubmit(event) {
  const value = getForm().post.value;
  event.preventDefault();

  if (value) {
    getForm().post.value = '';
  }
}

