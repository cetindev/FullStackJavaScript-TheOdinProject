const Person = require('./person.js')
const Meetup = require('./meetup.js')


const mert = new Person('Mert', 34);
const armagan = new Person('Armagan', 35);

mert.greet(armagan);

const wtmb = new Meetup('WTM Berlin')
armagan.attend(wtmb)