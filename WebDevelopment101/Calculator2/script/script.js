//DOM Elementelerini variable'a attık bu variable'dan istenilen buton veya elemente erişiliebilir
const buttons = document.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
const operatorButtons = buttons.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const displayExpression = document.querySelector("#expression");
const displayResult = document.querySelector("#result");
const equalButton = document.querySelector(".equal");

let lastVal;
let numVal = 0;
let values = [];
let operations = [];
let calculated = 0;
//Butonları dinleme fonk. addEventListener
operatorButtons.forEach(button => button.addEventListener("click", clicked));
numberButtons.forEach(button => button.addEventListener("click", clicked));
clearButton.addEventListener("click", clicked);
backspaceButton.addEventListener("click", clicked);
equalButton.addEventListener("click", clicked);
window.addEventListener('keydown', function (e) {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});


//4 işlemin olduğu fonksiyonlar
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
//Seşilen operatör yani işlem ve a ve sayıları 
function operate(a, b, op) {
  let fun = (op == "+") ? add :
    (op == "−") ? sub :
      (op == "×") ? mul : div;
  //Eğer 0'a bölmek istenilirse hata mesajı verir
  if (op == "÷" && (b == "0" || b == 0)) {
    clear();
    alert("Dividing a number by 0 becomes infinity")
  }
  return fun(a, b);
}
//backspace  fonksiyonunda displayExpression elementindeki yani işlemlerin gösterildiği yerdir.
//Ayrıca burdaki fonk. slice fonk. ile alınan 0 indexden -12e kadar olan yere kadar kısmı from.innerHTML'e atıyor ve if ile displayExpression ile aynıysa
//operations.pop() luyor
function backspace(from) {
  from.innerHTML = from.innerHTML.slice(0, -1);
  if (from == displayExpression) operations.pop();
}
//C yani clear yapılmak istenirse bütün şeyler siliniyor
function clear() {
  displayExpression.innerHTML = "";
  displayResult.innerHTML = "";
  lastVal = null;
  numVal = 0;
  values = [];
  operations = [];
  calculated = 0;
}
//???????
function num(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}
//Seçilen işleme göre yani "op" değerine hangi işlem secilmiş onu alıyor  
//pek anlamadım
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
//eğer bu belli butonlardan yani buttnos mu operator mu vs. basılırsa neler olur switch ile kara alınıyor
function clicked() {
  switch (this.className) {
    case "operator":
      if (lastVal == this.value) break;
      if (lastVal == "+" || lastVal == "×" || lastVal == "−" || lastVal == "÷") {
        backspace(displayExpression);
        displayExpression.innerHTML += this.value;
        operations[operations.length] = this.value;
        lastVal = this.value;
        break;
      }
      if (calculated != 0) displayExpression.innerHTML = "";
      values[values.length] = displayResult.innerHTML;
      operations[operations.length] = this.value;
      displayExpression.innerHTML += displayResult.innerHTML + this.value;
      displayResult.innerHTML = "";
      lastVal = this.value;
      numVal = 0;
      break;
    case "number":
      if (calculated != 0) clear();
      if (numVal == 15 || (displayResult.innerText.indexOf(".") != -1 && this.value == ".")) break;
      displayResult.innerHTML += this.value;
      lastVal = this.value;
      numVal++;
      break;
    case "clear":
      clear();
      break;
    case "backspace":
      backspace(displayResult);
      numVal--;
      break;
    case "equal":
      if (values.length < 2 && displayResult.innerHTML == "") break;
      values[values.length] = displayResult.innerHTML;
      if (values.length == operations.length) backspace(displayExpression);
      let result = 0;
      let o = 0;
      calculated++;
      console.log(operations);
      console.log(values);
      let templ = operations.length;
      for (let i = 0; i < templ; i++) {
        if (operations.indexOf("×") != -1) {
          calculate("×");
        } else if (operations.indexOf("÷") != -1) {
          calculate("÷");
        } else if (operations.indexOf("+") != -1) {
          calculate("+");
        } else if (operations.indexOf("−") != -1) {
          calculate("−");
        }
      }
      result = values[0];
      displayExpression.innerHTML += displayResult.innerHTML + this.value;
      displayResult.innerHTML = result;
      break;
  }
}