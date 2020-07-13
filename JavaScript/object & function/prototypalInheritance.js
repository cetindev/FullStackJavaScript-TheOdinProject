//Prototypal Inheritance
let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  return 2020 - this.yearOfBirth;
}

let Teacher = function (name, yearOfBirth, job, subject) {
  //Burdaki call metodu javada extend edersin ya hani ana classın özelliklerini kullanmak için oda bunun gibi bişey
  Person.call(this, name, yearOfBirth, job);
  this.subject = subject;
}
let emel = new Teacher('emel', 1989, 'teacher', 'math');

//

console.log(emel);
console.log(emel.job);
