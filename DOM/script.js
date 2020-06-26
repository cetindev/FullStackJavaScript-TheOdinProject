// const container = document.querySelector('#container');

const body = document.querySelector('body');
const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I’m red!';
p.style.color = 'red';
body.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
body.appendChild(h3);

const denemeee = document.createElement('div');
denemeee.classList.add('denemeee');
denemeee.textContent = 'I\'m a blue denemeee!';
denemeee.style.color = 'blue';
body.appendChild(denemeee);

// const div = document.querySelector('div');
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('exercis');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.borderColor = 'black';
pinkDiv.textContent = 'deneme dfsdafasdfsadf'
body.appendChild(pinkDiv);

const swc = document.querySelector('div.exercis');
const hbir = document.createElement('h1');
hbir.textContent = 'I\'m in a div';
swc.appendChild(hbir);

const pekle = document.createElement('p');
pekle.textContent = 'ME TOO';
swc.appendChild(pekle);
