/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */

async function getData(index) {
  let serverResponse = '';
  fetch(`http://localhost:8080/info?${new URLSearchParams({ id: index })}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => serverResponse = res)
    .then(() => {
      const article = document.createElement('span');
      console.log(serverResponse);
      article.innerText = serverResponse.data;
      document.querySelector(`#data${index}`).after(article);
      localStorage.setItem(`article${index}`, serverResponse.data);
    });
}

function createLi(ul, counter) {
  const li = document.createElement('li');
  li.id = `data${counter}`;
  li.innerText = `data${counter}`;
  li.addEventListener('click', () => getData(counter));
  ul.appendChild(li);
  const checkForLocalStorage = localStorage.getItem(`article${counter}`);
  if (checkForLocalStorage) {
    const article = document.createElement('span');
    article.innerText = checkForLocalStorage;
    li.after(article);
  }
}

function render() {
  const ul = document.createElement('ul');
  const elements = [1, 2, 3, 4];
  elements.map((el) => createLi(ul, el));
  document.querySelector('div').appendChild(ul);
  const btn = document.createElement('button');
  btn.innerText = 'clear localstorage';
  btn.addEventListener('click', () => {
    localStorage.clear();
  });
  ul.appendChild(btn);
}
