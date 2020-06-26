// Yontem 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World Yöntem 2");
// Yontem 3 
const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
  alert('Hello World Yöntem 3');
});
// Farklı yontem1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  console.log(e);
});

const sec = document.querySelector('#buton');
sec.addEventListener('click', () => {
  // e.target.style.background = 'blue';
  alert("alooooo!!");
});

const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});