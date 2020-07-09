//Event Listener

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

btn.addEventListener('click', function (e) {
  console.log('btn clicked');

  let val;
  val = e;
  val = e.target;
  val = e.target.classList;
  val = e.type;


  console.log(val);
  e.preventDefault();
})

//farklı bir yöntemi daha vardır.

/* btn.addEventListener('click', btnClick);
btn.addEventListener('click', btnClick2);
btn2.addEventListener('click', btnClick);

function btnClick() {
  console.log('btn clicked');
}
function btnClick2() {
  console.log('btn 2  clicked');
} */