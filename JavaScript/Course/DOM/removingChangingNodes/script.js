const taskList = document.querySelector('#task-list');

// removing element
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);
//removing attribute
// taskList.children[0].removeAttribute('class');

//Replacing ELemenets
/* 
const cardHeader = document.querySelector('.card-header');
//create element

const h2 = document.createElement('h2');
h2.setAttribute('class', 'card-header');
h2.appendChild(document.createTextNode('My List'));

const parent = document.querySelector('.card');
parent.replaceChild(h2, cardHeader);
 */

//classes
let val;
link = taskList.children[0].children[0];

val = link.className;
val = link.classList;
/* val = link.classList[0];
val = link.classList[1];

 */
link.classList.add('new');
link.classList.remove('new');

//Attributes
val = link.getAttribute('data-id');
val = link.getAttribute('href');
val = link.getAttribute('href', 'http://github.com/cihatdev');

val = link.hasAttribute('href');

console.log(val);
/*   */

