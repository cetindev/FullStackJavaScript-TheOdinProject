const Customer = require('./customer')
const Restaurant = require('./restaurant')
const Database = require('./database')
const Chalk = require('chalk')
const Food = require('./foods')


costumer1 = new Customer('Cihat', 'Beşyüz Evler İstanbul/GOP', 'Lahmacun,Döner,Kebap');
console.log(costumer1);
showCostumer = new Restaurant(costumer1.customerName, costumer1.order, costumer1.location);

costumer2 = new Customer('Ali', 'Esenler  Malatya/GOP', 'Lahmacun,Döner');
showCostumer2 = new Restaurant(costumer2.customerName, costumer2.order, costumer2.location);

costumer3 = new Customer('Ayşe', 'Etiler  İstanbul/GOP', 'Lahmacun,Döner,Kebap');
showCostumer3 = new Restaurant(costumer3.customerName, costumer3.order, costumer3.location);

var allView = [showCostumer, showCostumer2, showCostumer3]

var allFoods = new Food();


//Burayı anlamalıyım yani koda tekrar yazmalıyım
Database.save('orders.json', allView);
//food save
Database.save('food.json', allFoods);
//food show
console.log(Database.loadFood('food.json'));


console.log(Chalk.black.bgWhite(allView));

console.log(Database.load('orders.json')); 