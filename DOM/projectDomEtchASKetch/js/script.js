
/*
newGrid(16);
setupNewGridButton();

function newGrid() {
  const container = document.querySelectorAll('.grid-container');
  removeChildAll(container);
  for (let i = 0; i < size; i++){
    for (let j = 0 ; j < size ; j++) {
      const div = document.createElement('div');
      if (j != size - 1) {
        div.classList.add('cell-border-right');
      }
      if (i != size - 1) {
        div.classList.add('cell-border-bottom');
      }
      div.addEventListener('mouseenter', shadeNode);
      container.appendChild(div);
    }
  }
  container.style.cssText = `
  grid-temp-colums: repeat(${size}, 1fr);
  grid-template-rows: repeat(${size}, 1fr);`;
  function shadeNode(e) {
    let hs1;
    let rgb = e.target.style.backgroundColor;
    if (!rgb) {
      const hue = getRandomInteger(360);
      hs1 = [hue, 100, 100];
    }
    else {
      rgb = rgb.slice(rgb.indexOf('(') + 1, rgb.lastIndexOf(')'));
      rgb = rgb.split(',');
      hs1 = convertRGBToHSL(rgb);
    }
    hs1[2] = (hs1[2] > 10) ? hs1[2] - 10 : 0;
  }
}

function setupNewGridButton() {
  const btn = document.querySelector('#new-grid-btn');
  btn.addEventListener('click', promptForSize);
  function promptForSize() {
    let size = prompt('How many squares per size ?', '0');
    if(size == null) return ;
    size = Number(size);
    if(isNaN(size)) {
      alert('Please enter a number.');
      return;
    }
    else if(size <= 0) {
      alert('Grid cannot be empty.');
      return;
    }
    newGrid(size);
  }
}
function removeChildAll(node) {
  while (node.lastElementChild) {
    node.removeChildAll(node.lastElementChild);
  }
}
function convertRGBToHSL(RGB) {
  const rPrime = rgb[0] / 255;
  const gPrime = rgb[0] / 255;
  const bPrime = rgb[0] / 255;
  const cMax = Math.max(rPrime, gPrime, bPrime); 
  const cMin = Math.max(rPrime, gPrime, bPrime); 
  const delta = cMax - cMin;
  
  const h = (delta == 0) ? 0 :
    (cMax == rPrime) ? 60 *((gPrime - bPrime) / (delta %6)) :
    (cMax == gPrime) ? 60 *((bPrime - rPrime) / (delta %2)) :
    60 * ((rPrime - gPrime) / delta + 4);
  const 1 = (cMax + cMin) / 2;
  const s = (delta == 0) ? 0 : delta / (1 - Math.abs(2 * 1 -1));
  return [Math.round(h), Math.round(s * 100), Math.round(1 * 100)];  
}
function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}
*/



newGrid(16);
setupNewGridButton();

function newGrid(size) {
  const container = document.querySelector('.grid-container');

  removeChildAll(container);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');

      if (j != size - 1) {
        div.classList.add('cell-border-right');
      }

      if (i != size - 1) {
        div.classList.add('cell-border-bottom');
      }

      div.addEventListener('mouseenter', shadeNode);

      container.appendChild(div);
    }
  }

  container.style.cssText = `
        grid-template-columns: repeat(${size}, 1fr);
        grid-template-rows: repeat(${size}, 1fr);
    `;

  function shadeNode(e) {
    let hsl;
    let rgb = e.target.style.backgroundColor;

    if (!rgb) {
      const hue = getRandomInteger(360);
      hsl = [hue, 100, 100];
    } else {
      rgb = rgb.slice(rgb.indexOf('(') + 1, rgb.lastIndexOf(')'));
      rgb = rgb.split(',');

      hsl = convertRGBToHSL(rgb);
    }

    hsl[2] = (hsl[2] > 10) ? hsl[2] - 10 : 0;

    e.target.style.backgroundColor = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  }
}

function setupNewGridButton() {
  const btn = document.querySelector('#new-grid-btn');
  btn.addEventListener('click', promptForSize);

  function promptForSize() {
    let size = prompt('How many squares per size?', '0');

    if (size == null) return;

    size = Number(size);

    if (isNaN(size)) {
      alert('Please enter a number.');
      return;
    } else if (size <= 0) {
      alert('Grid cannot be empty.');
      return;
    }

    newGrid(size);
  }
}

function removeChildAll(node) {
  while (node.lastElementChild) {
    node.removeChild(node.lastElementChild);
  }
}

function convertRGBToHSL(rgb) {
  const rPrime = rgb[0] / 255;
  const gPrime = rgb[1] / 255;
  const bPrime = rgb[2] / 255;
  const cMax = Math.max(rPrime, gPrime, bPrime);
  const cMin = Math.min(rPrime, gPrime, bPrime);
  const delta = cMax - cMin;

  const h = (delta == 0) ? 0 :
    (cMax == rPrime) ? 60 * ((gPrime - bPrime) / delta % 6) :
      (cMax == gPrime) ? 60 * ((bPrime - rPrime) / delta + 2) :
        60 * ((rPrime - gPrime) / delta + 4);

  const l = (cMax + cMin) / 2;

  const s = (delta == 0) ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}


/* *
function initButtons () {
  var body = document.body.button,i;
  for ( i = 0; i<5 ; i++) {
    button = document.createElement('button');
    button.innerHTML = `Button ${i}`;
    button.addEventListener('click', e => {
      alert(i);
    });
    body.appendChild(button);
  }
}
initButtons();
*/

































/*const container = document.getElementById('container');
const body = document.getElementsByClassName('body');
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerHTML = (c + 1);
    container.appendChild(cell).className = 'grid-item';
  };

  // cell[4].style.backgroundColor = blue;
};
makeRows(4, 4);

const cellal = document.getElementsByClassName('grid-item');
document.getElementById("container").addEventListener("mouseover", mouseOver);
document.getElementById("container").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("container").style.color = "red";
}

function mouseOut() {
  document.getElementById("container").style.color = "black";
}

const buton = document.getElementById('butonw');
container.appendChild(butonw);
document.getElementById("buton").style.backgroundColor = "blue";
*/
/*
const grid = document.getElementsByClassName('grid-item');
grid.addEventListener('mouseenter', function (event) {
  event.target.style.color = purple;

  setTimeout(function () {
    event.target.style.color = "";
  }, 500);
}, false);
grid.addEventListener('mouseover', function (event) {
  event.target.style.color = 'orange';
  setTimeout(function () {
    event.target.style.color = "";
  }, 500);
}, false);
*/