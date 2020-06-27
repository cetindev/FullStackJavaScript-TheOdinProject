//Event Handler Properties
/*const changeText = () => {
  const p = document.querySelector('p');

  p.textContent = "I changed because of an inline event handler.";
}

const button = document.querySelector('button');
button.onclick = changeText;

*/
/*
const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}
button.onclick = alertText;
button.onclick = changeText;
*/

//Event Listeners
const changeText = () => {
  const p = document.querySelector('p');
  p.textContent = "I changed because of an event listener"
}
const alertText = () => {
  alert('Will I alert?');
}
/*const button = document.querySelector('button');
button.addEventListener('click' , changeText);
button.addEventListener('click' , alertText);
*/
const p = document.querySelector('p');
const button = document.querySelector('button');
button.addEventListener('mousemove', () => {
  p.textContent = "Will I change?";
});

/**
click	          Fare bir öğeye basıldığında ve bırakıldığında tetiklenir
dblclick	      Bir öğe iki kez tıklandığında tetiklenir
mouseenter	    İşaretçi bir öğeye girdiğinde tetiklenir
mouseleave	    İşaretçi bir öğeden ayrıldığında tetiklenir
mousemove	      İşaretçi bir öğenin içine her girdiğinde tetiklenir
 */

/*Klavye Etkinlikleri
Klavye olayları, bir tuşa basma, bir anahtarı kaldırma ve bir tuşu basılı tutma gibi klavye eylemlerini işlemek için kullanılır.

Etkinlik	      Açıklama
keydown	        Bir tuşa basıldığında bir kez patlar
keyup	          Bir anahtar bırakıldığında bir kez tetiklenir
keypress	      Bir tuşa basılırken sürekli yanar */
document.addEventListener('keydown', event => {
  console.log('key: ' + event.keyCode);
  console.log('key: ' + event.key);
  console.log('code: ' + event.code);
});
document.addEventListener('keydown', e => {
  var element = document.querySelector('p');

  // Set variables for keydown codes
  var a = 'KeyA';
  var s = 'KeyS';
  var d = 'KeyD';
  var w = 'KeyW';

  // Set a direction for each code
  switch (e.code) {
      case a:
          element.textContent = 'Left';
          break;
      case s:
          element.textContent = 'Down';
          break;
      case d:
          element.textContent = 'Right';
          break;
      case w:
          element.textContent = 'Up';
          break;
  }
});

const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', event => {
    console.log(event.target);
});