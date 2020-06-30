//Script will be written here
const buttons = document.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
const operatorButtons = buttons.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const displayExpression = document.querySelector("#expression");
const displayResult = document.querySelector("#result");
const equalButton = document.querySelector(".equal");

let lastVal,numVal = 0, values = [] , operations = [] , calculated =0;

operatorButtons.forEach(button => button.addEventListener('click', clicked));
numberButtons.forEach(button => button.addEventListener('click', clicked));
clearButton.addEventListener('click', clicked);
backspaceButton.addEventListener("click", clicked);
equalButton.addEventListener("click", clicked);
window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

function add(...arr) {
  return arr.reduce((total, current) => total += current);
}
function sub(...arr) {
  return arr.reduce((total, current) => total -= current);
}
function mul(...arr) {
  return arr.reduce((total, current) => total *= current);
}
function div(...arr) {
  return arr.reduce((total, current) => total /= current);
}

function operate(a, b, op) {
  let fun = (op == "+") ? add:
  (op == "-") ? sub:
  (op == "*" || (op == "x") ) ? mul:div;
  if ((op == "÷" || (op == "/")) && (b == "0" || b == 0)) {
    clear();
    alert("You can't divide a number by 0");
  }
  return fun(a, b);
}
function backspace(from) {
  from.innerHTML = frominnerHTML.slice(0, -1);
  if(from == displayExpression) operations.pop();
}

function clear() {
  displayExpression.innerHTML = "";
  displayResult.innerHTML = "";
  lastVal = null;
  values = [];
  calculated = 0;
}
function num(n) {
  /*Burdaki Number.EPSILON nedemek nedir */
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

function calculate(op) {
  let opi = operations.indexOf(op);
  let a = num(values[opi]);
  let b = num(values[opi + 1]);
  let res = operate(a, b, op);
  operations.splice(opi, 1);
  values.splice(opi, 2, res);
  console.log(res);
  console.log(operations);
  console.log(values);
}
function clicked() {
  switch (this.className) {
    case "operator":
      if(lastVal == this.value) break;
      if(lastVal == "+" || lastVal == "x" || lastVal == "-" || lastVal == "+") {
        backspace(displayExpression);
        displayExpression.innerHTML += this.value;
        operations[operations.length] = this.value;
        lastVal = this.value;
        break;
      }
      if(calculated != 0) displayExpression.innerHTML = "";
      values[values.length] = displayResult.innerHTML;
      operations[operations.length] = this.value;
      displayExpression.innerHTML += displayResult.innerHTML + this.value;
      displayResult.innerHTML = "";
      lastVal = this.value;
      numVal = 0;
      break;

  }
}

