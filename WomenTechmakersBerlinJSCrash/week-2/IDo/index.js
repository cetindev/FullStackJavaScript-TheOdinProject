const Person = require('./person.js')
const Meetup = require('./meetup.js')
const Chalk = require('chalk')

const mert = new Person('Mert', 34);
const armagan = new Person('Armagan', 35);

console.log(Chalk.blue.bgGreen('Hello Word!!'));
mert.greet(armagan);

const wtmb = new Meetup('WTM Berlin')
armagan.attend(wtmb)

console.log(mert.name);
console.log(armagan.name);