const Customer = require('./customer')
const Foods = require('./foods')
const Restaurant = require('./restaurant')
const Database = require('./database')
const Chalk = require('chalk')


costumer1 = new Customer('Cihat', 'Beşyüz Evler İstanbul/GOP', 'Lahmacun,Döner,Kebap');
goster = new Restaurant(costumer1.customerName, costumer1.order, costumer1.food);

/* costumer2 = new Customer('Ali', 'Esenler  Malatya/GOP', 'Lahmacun,Döner');
goster2 = new Restaurant(costumer2.customerName, costumer2.order);

costumer3 = new Customer('Ayşe', 'Etiler  İstanbul/GOP', 'Lahmacun,Döner,Kebap');
goster3 = new Restaurant(costumer3.customerName, costumer3.order); */


//Burayı anlamalıyım yani koda tekrar yazmalıyım
/* Database.save('foods.json', '????'); */

console.log(Chalk.black.bgWhite(costumer1.foodView));

const loadedFile = Database.load('foods.json');
console.log(loadedFile); 