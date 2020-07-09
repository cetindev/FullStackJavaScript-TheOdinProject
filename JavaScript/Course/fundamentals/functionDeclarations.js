//Functions Declarations
/* function sum(a, b) {
  var c = a + b;
  return c;
} */
//Functions Expressions
const sum = function (a = 0, b = 0) {//Burda eğer parametre eksikse b olarak gönderebiliriz bu ES6 ile gelmiş özelliktir.
  var c = a + b ;
  return c;
}
console.log(sum(10));

function sumAll() {
  var total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(12,3,2,3,234234,23423,4234,32,42,3,23432,4,23,42,34,23,4,32,4,234,234,3));
