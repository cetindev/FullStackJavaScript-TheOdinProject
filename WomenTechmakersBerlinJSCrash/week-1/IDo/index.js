class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.meetups = [];
  }
  greet(person) {
    console.log('Hello ' + person.name + ", my name is " + this.name);
  }
  attend(meetup) {
    this.meetups.push(meetup);
    meetup.attendees.push(this)
  }
}

armagan = new Person('Armagan', 35);
mert = new Person('Mert', 34);
mihri = new Person('Mihri', 33)

Meetup = class {
  constructor(name) {
    this.name = name;
    this.attendees = [];
  }
  printAttendeeNames() {
    this.attendees.forEach(printName)
  }
}

printName = person => console.log(person.name);

wtmb = new Meetup('Women Techmakers Berlin');
armagan.attend(wtmb);
mert.attend(wtmb);
mihri.attend(wtmb);

wtmb.printAttendeeNames();