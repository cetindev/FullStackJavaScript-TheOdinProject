const Person = require('./person.js')
const Meetup = require('./meetup.js')
const Chalk = require('chalk')
const Database = require('./database')

const mert = new Person('Mert', 34);
const armagan = new Person('Armagan', 35);

console.log(Chalk.blue.bgRed('Hello Word!!'));
mert.greet(armagan);

const wtmb = new Meetup('WTM Berlin')
armagan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames();
//Vol3 Lecture2 - 2:03:18
//Dosyalara veri yazmak için bunlar olur JSON.stringify(data) şeklinde gerçeklişir
Database.save('meetup.json', wtmb);
Database.save('person.json', wtmb);

//Dosyalardaki verileri okumak için

const loadedFile = Database.load('meetup.json');
console.log('********************************************************************************************************************');
console.log(loadedFile);
