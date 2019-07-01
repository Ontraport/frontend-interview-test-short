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
    prependToList(createListItem(value));
    getForm().post.value = '';
  }
}

function prependToList(listItem) {
  const list = document.getElementById('pageList');
  if (list.childElementCount > 0) {
    list.insertBefore(listItem, list.firstChild);
  } else {
    list.append(listItem);
  }
}

function createListItem(value) {
  let seconds = new Date().getSeconds();
  let newAddition = document.createElement('li');
  newAddition.textContent = value + ' - ' + seconds;
  return newAddition;
}
