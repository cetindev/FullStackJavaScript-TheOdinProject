const Customer = require('./customer')
const Foods = require('./orders')
const Restaurant = require('./restaurant')
const Database = require('./database')
const Chalk = require('chalk')


costumer1 = new Customer('Cihat', 'Beşyüz Evler İstanbul/GOP', 'Lahmacun,Döner,Kebap');
console.log(costumer1);
goster = new Restaurant(costumer1.customerName, costumer1.order, costumer1.location);

costumer2 = new Customer('Ali', 'Esenler  Malatya/GOP', 'Lahmacun,Döner');
goster2 = new Restaurant(costumer2.customerName, costumer2.order, costumer2.location);

costumer3 = new Customer('Ayşe', 'Etiler  İstanbul/GOP', 'Lahmacun,Döner,Kebap');
goster3 = new Restaurant(costumer3.customerName, costumer3.order, costumer3.location);

var allView = [goster, goster2, goster3]


//Burayı anlamalıyım yani koda tekrar yazmalıyım
Database.save('orders.json', allView);

console.log(Chalk.black.bgWhite(allView));

const loadedFile = Database.load('orders.json');
console.log(loadedFile); 