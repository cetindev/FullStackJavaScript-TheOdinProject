//Person  constructor
let Person = function (name) {
  this.name = name;
}
Person.prototype.Introduce = function () {
  console.log('Hello my name is ' + this.name);
}
//teacher constructor
function Teacher(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log('I teach ' + this.branch);
}

//student constructor
function Student(name, number) {
  Person.call(this, name);
  this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log('My student number is ' + this.number + ' I\'ve already studied hard');
}

//headmaster constructor
function Headmaster(name, branch) {
  Teacher.call(this, name, branch);
}
Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.shareTask = function () {
  console.log('I\'ve  already shared all the work');
}


let p1 = new Person('CIhat');
p1.Introduce();
console.log('*************************************************************************************');

let t1 = new Teacher('Abdullah Öğretmen', 'Math');
t1.Introduce();
t1.teach();
console.log('*************************************************************************************');

let s1 = new Student('Mehmet Öğrenci', 58);
s1.Introduce();
s1.study();
console.log('*************************************************************************************');

let h1 = new Headmaster('Ahmet Müdür', 'Physics');
h1.Introduce();
h1.teach();
h1.shareTask();