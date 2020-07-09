//Scape

//Global Dcope
//Heryerden ulaşabiliyoruz bunun olayı heryerden ulaşabiliriz.
/* var name = "Cınar";
function logName() {
  console.log(name);
}
logName();
 */

//Local Scope

var name = "Cınar";
var age = 25;
function logName() {
  var name = "Ada";
  console.log('function scope', name);
}
if (true) {
  var age = 30;
  console.log('block scope ', name, age);
}
console.log(age);

logName();

//Fonksiyonlar kendi scope'larını oluştururlar
//Ama blocklar yeni scope oluşturmaz . 
//ES6 ile gelen let ve cost block scope oluşturur.
//Burası çokomelli 
//ES6 ile gelen let ve cost block scope oluşturur.
//ES6 ile gelen let ve cost block scope oluşturur.

console.log("*********************************************");
if (true) {
  var model = 'Opel';
  let year = 2016;
  const color = 'white';
  console.log('block scope', model, year, color);
}
console.log('block scope', model, year, color);

