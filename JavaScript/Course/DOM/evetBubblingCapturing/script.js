//keyboaeds events
const input = document.querySelector('#txtTaskName');
const form = document.querySelector('#addTaskForm');
/* input.addEventListener('keydown', eventHandler);
input.addEventListener('keyup', eventHandler);
input.addEventListener('keypress', eventHandler);

 */
// input.addEventListener('focus', eventHandler);

/* input.addEventListener('cut', eventHandler);
input.addEventListener('paste', eventHandler);
 */

form.addEventListener('submit', eventHandler);

function eventHandler(e) {
  console.log('event type : ' + e.type);
  /*
    console.log('key Code: ' + e.keyCode);
    console.log('value : ' + e.target.value); */
  // e.target.style.background = 'green';
  e.preventDefault();
}