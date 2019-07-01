(function() {
  getForm().onsubmit = handleSubmit;
  initializeList();
})();

function getForm() {
  return Array.from(document.forms).pop();
}

function initializeList() {
  const page = document.getElementById('page');
  const list = document.createElement('ul');
  list.id = 'pageList';
  page.append(list);
}

function handleSubmit(event) {
  const value = getForm().post.value;
  event.preventDefault();

  if (value) {
    getForm().post.value = '';
  }
}

