// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
//call event listeners
eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener('submit', addNewItem);
}

//add new item
function addNewItem(e) {
  if (input.value === '') {
    alert('Boş bir işi kaydedemezsiniz!!!')
  }

  //create li
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value))

  li.className = 'list-group-item list-group-item-secondary';
  //create a
  const a = document.createElement('a');
  a.classList = 'delete-item float-right';
  a.setAttribute('href', '#');
  a.innerHTML = '<i class="fas fa-times"></i>';

  //add  a to li 
  li.appendChild(a);

  //add li to ul
  taskList.appendChild(li);

  //clear input
  input.value = "";


  console.log(li);


  e.preventDefault();

}