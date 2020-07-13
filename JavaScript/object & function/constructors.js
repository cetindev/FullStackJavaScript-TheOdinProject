//object literals

function Person(name, dog, job) {
  this.name = name;
  this.dog = dog;
  this.job = job;
  this.calculateAge = function () {
    return 2020 - this.dog;
  }
}
//Yukardaki ile altdaki aynı şeylerdir....
let Person0 = function (name, dog, job) {
  this.name = name;
  this.dog = dog;
  this.job = job;
  this.calculateAge = function () {
    return 2020 - this.dog;
  }
}
let yigit = new Person('yigti', 2010, 'student');
let emel = new Person('Emel', 1989, 'Teacher');

console.log(yigit.name);
console.log(yigit.job);
console.log(yigit.dog);
console.log(yigit.calculateAge());
console.log('****************************************');
console.log(emel.name);
console.log(emel.job);
console.log(emel.dog);
console.log(emel.calculateAge());