// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const items = ['item 1', 'item 2', 'item 3'];

//load items
loadItem();
//call event listeners
eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener('submit', addNewItem);

  //delete an item
  taskList.addEventListener('click', deleteItem);

  //delete all items
  btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItem() {
  items.forEach(function (item) {
    createItem(item);
  })
}

function createItem(text) {
  //create li
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(text))

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
}

//add new item
function addNewItem(e) {
  if (input.value === '') {
    alert('Boş bir işi kaydedemezsiniz!!!')
  }
  else {

    //create item
    createItem(input.value);

    //clear input
    input.value = "";
    // console.log(li);
  }


  e.preventDefault();

}

//delete an item
function deleteItem(e) {
  if (e.target.className === 'fas fa-times') {
    if (confirm('Emin misiniz ? Bu Görev Silenecek... ')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}

//delete all items
function deleteAllItems(e) {
  //1.yöntem
  if (confirm('Emin misiniz ? Bütün Görevler Silenecek... ')) {
    taskList.innerHTML = '';

  }
  //'.yöntem
  /*   if (confirm('Emin misiniz ?')) {
      taskList.childNodes.forEach(function (item) {
        if (item.nodeType === 1) {
          item.remove();
        }
      })
    }
   */
  e.preventDefault();
}