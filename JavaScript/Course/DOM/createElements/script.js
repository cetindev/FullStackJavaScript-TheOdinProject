//createing elements

const li = document.createElement('li');

//add class
li.className = "list-group-item";

//attribute
li.setAttribute('title', 'creating new item');
li.setAttribute('data-id', '5');

//text node
const text = document.createTextNode('Cihat Salik Github link');

//alt eleman eklemek için 
li.appendChild(text);


//li'nin içindeki a etiketini oluşturmak
const a = document.createElement('a');
a.setAttribute('href', 'https://github.com/cihatdev');

a.className = 'delete-item float-right';
a.innerHTML = '<i class="fab fa-github"></i>';
a.style.fontSize = "24px";
//append a to li
li.appendChild(a);
//append li to ul
var ul = document.querySelector('#task-list');
ul.appendChild(li);



console.log(li);
console.log(a);
