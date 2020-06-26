// const container = document.querySelector('#container');
const container = document.querySelector('body');
const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I’m red!';
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.querySelector('div');
div.classList.add('div');
