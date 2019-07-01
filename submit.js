const form = Array.from(document.forms).pop();

(function() {
  form.onsubmit = handleSubmit;
  initializeList();
})();

function initializeList() {
  const page = document.getElementById('page');
  const list = document.createElement('ul');
  list.id = 'pageList';
  page.append(list);
}

function handleSubmit(event) {
  const value = form.post.value;
  event.preventDefault();

  if (value) {
    prependToList(createListItem(value));
    form.post.value = '';
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
  newAddition.classList.add('listItem');
  return newAddition;
}
