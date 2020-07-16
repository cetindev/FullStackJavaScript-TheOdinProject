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

Database.load('meetup.json', (err, loadedFile) => {

  const Person = require('./person')
  console.log('Hello');
  const wtmb = Meetup.create(loadedFile);
  const omur = new Person('Omur', 30);
  // const cihat = new Person('Cihat', 20);
  omur.attend(wtmb)
  /* cihat.attend(wtmb); */
  /* Database.save('./meetup.json', wtmb); */
  wtmb.printAttendeeNames();
  console.log(wtmb.name);
})
