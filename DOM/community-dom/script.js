//section 1
const body = document.querySelector('body');
const pdeg = document.createElement('p');
pdeg.textContent = 'Helloooooo';
document.querySelector("p#demo").innerHTML = "Hello World!";
body.appendChild(pdeg);
//section 2
let navLink = document.getElementById('nav');
navLink.href = 'https://www.wikipedia.org';
navLink.textContent = 'Navigate to Wikipedia';
navLink.innerHTML = "changed my link is change";
navLink.style.background = 'green';
navLink.style.color = 'white';
navLink.style.border.style = 'solid';
//section 3
const buton = document.createElement('button');
buton.textContent = "BackGround Change";
buton.style.fontSize = 'xx-large';
body.appendChild(buton);
let button = document.getElementById('changeBackgorund');
buton.addEventListener('click', () => {
  document.body.style.background = 'fuchsia';
})
//section 4
document.getElementById("myImage").src = "https://www.istasyonsanat.com/upload/ckfinder/files/duyurular/resim-yapmanin-puf-naktalari.jpg";