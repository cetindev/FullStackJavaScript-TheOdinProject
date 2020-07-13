 const person = {
  firstName: 'Sadik',
  lastName: 'Turan',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName: function (value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}
// person.setFullName('Sena');
 
//setter getter işlemleri
/* const person = {
  firstName: 'Sadik',
  lastName: 'Turan',
  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set FullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
} */

//get ve set methotları
Object.defineProperties(person, 'fullName', {
  get function() {
    return `${this.firstName} ${this.lastName}`;
  },
  set function(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
});
Object.defineProperty(person, 'age', {
  value: 50,
  writable: false
})

person.age = 55;




// person.setFullName('Sena');


person.FullName = 'Cınar Turan';
console.log(person.FullName);