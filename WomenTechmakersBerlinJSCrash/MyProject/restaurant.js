const Food = require('./foods')
const Driver = require('./driver')
const Chalk = require('chalk');

module.exports = class Restaurant {
  constructor(costumer, order, address) {
    this.costumer = costumer;
    this.orders = order;
    this.address = address;

    this.orderList(this.orders);
    // console.log(this.costumer, this.orders);
  }
  orderList = (orders) => {
    let food = [];
    food = orders.split(',');
    food.forEach(addFood);
  }
}
var price = 0;
addFood = food => {
  var yemekler = new Food();
  for (let i = 0; i < yemekler.foods.anayemekler.length; i++) {
    if (yemekler.foods.anayemekler[i].foodName == food) {
      console.log(Chalk.black.bgRed('İstenilen Yemek Mevcuttur. İstenilen Yemek :' + yemekler.foods.anayemekler[i].foodName));
      //Yemeklerin fiyatını bulduran kod
      console.log(Chalk.black.bgGreenBright('Fiyatı: ' + yemekler.foods.anayemekler[i].foodPrice));
      price = price + parseInt(yemekler.foods.anayemekler[i].foodPrice);
      console.log(Chalk.black.magentaBright('Toplam Fiyat: ' + price));
      //Yemek mevcut ise driver'ı çağır götürsün
      var driver = new Driver();
    }
  }

  price = 0;
}