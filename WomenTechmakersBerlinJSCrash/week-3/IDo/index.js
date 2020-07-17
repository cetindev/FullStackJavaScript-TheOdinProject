const Database = require('./database')
const Meetup = require('./meetup')
/*
const Chalk = require('chalk')

const armagan = new Person("Armagan", 35)
const mert = new Person("Mert", 34)

const wtmb = new Meetup("Women Techmakers Berlin")

armagan.attend(wtmb)
mert.attend(wtmb)
wtmb.printAttendeeNames()

console.log(Chalk.blue.bgRed.bold(wtmb.name))

Database.save('meetup.json', wtmb) */

const callback = (err, loadedFile) => {
  const wtmb = Meetup.create(err, loadedFile);
  if (err) {
    console.log('Hey ,an error accured', err);
    return
  }
  console.log('Hello');
  const omur = new Person('Omur', 30);
  // const cihat = new Person('Cihat', 20);
  omur.attend(wtmb)
  /* cihat.attend(wtmb); */
  Database.save('./meetup.json', wtmb);
  wtmb.printAttendeeNames();
  console.log(wtmb.name);
}


const Person = require('./person')
Database.load('meetup.json', callback)

//Vol3-Lecture3 1:13:42
console.log('Am I the last operation? ');