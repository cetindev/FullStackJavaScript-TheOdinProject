const Chalk = require('chalk');

module.exports = class Customer {
  constructor(customerName, location, orders) {
    this.customerName = customerName;
    this.location = location;
    this.order = orders;
    this.toOrder();
    /* this.resaurant = new Restaurant(customerName, orders); */
  }
  foodView() {
    return console.log(this.customerName + 'Adlı mişterinin ' + this.toOrder() + 'siparişleri vardır.');
  }
  toOrder() {
    console.log(`\n${this.customerName} the customer placed the order.\n${this.location} adresine ${this.order} siparişi vardır.`
    );
  }
}