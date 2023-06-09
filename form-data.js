const searchForm = document.querySelector('[method="GET"]');

function addToPage(value, time) {
  const target = document.getElementById('page');

  target.innerHTML += `<p>${value.concat(` - ${time}`)}</p>`;
};

searchForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  const formValue = e.currentTarget.post.value;
  
  const seconds = new Date().getSeconds();

  addToPage(formValue, seconds);
});
