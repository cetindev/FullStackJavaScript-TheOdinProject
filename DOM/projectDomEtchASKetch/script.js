const container = document.getElementById('container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerHTML = (c + 1);
    container.appendChild(cell).className = 'grid-item';
  };

  cell[4].style.backgroundColor = blue;
};

makeRows(4, 4);
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById('demo').addEventListener("mouseout", mouseOut);
function mouseOver() {
  document.getElementById('demo').style.color = "red";
}

function mouseOut() {
  document.getElementById('demo').style.color = "black";
}
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