let Person = function (name, dog, job) {
  this.name = name;
  this.dog = dog;
  this.job = job;
}
Person.prototype.calculateAge = function () {
  return 2020 - this.dog;
}
Person.prototype.getName = function () {
  return this.name;
}
Person.prototype.lastName = 'Salik';
let emel = new Person('emel', 1800, 'Muallime');
let yigit = new Person('yigit', 2000, 'Talebe');

console.log(emel.calculateAge());
console.log(emel);
console.log(emel.getName());
console.log('**************************');
console.log(yigit);
console.log(yigit.calculateAge());
console.log(yigit.getName());
// console.log(yigit.hasOwnProperty('lastName'));
console.log(yigit.lastName);