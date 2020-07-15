class Restaurant {
  constructor(costumer, order) {
    this.costumer = costumer;
    this.orders = order;

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
      console.log('İstenilen Yemek Mevcuttur. İstenilen Yemek :' + yemekler.foods.anayemekler[i].foodName);
      //Yemeklerin fiyatını bulduran kod
      console.log('Fiyatı: ' + yemekler.foods.anayemekler[i].foodPrice);
      price = price + parseInt(yemekler.foods.anayemekler[i].foodPrice);
      console.log('Toplam Fiyat: ' + price);
      //Yemek mevcut ise driver'ı çağır götürsün
      var driver = new Driver();
    }
  }
  price = 0;
}

class Food {
  constructor() {
    
  }
  foods = {
    anayemekler: [
      {
        'foodName': 'Döner',
        'foodPrice': 10,
      },
      {
        'foodName': 'Lahmacun',
        'foodPrice': 15,
      },
      {
        'foodName': 'Kebap',
        'foodPrice': 20,
      },
    ],
    suluYemekler: [
      {
        'foodName': 'Mercimek Çorbası',
        'foodPrice': 7.5,
      }
    ]
  }

}

class Driver {
  constructor() {
    console.log('Siparişiniz Yolda...');
    var price = 0;
    return {
      price
    }
  }

}
class Customer {
  constructor(customerName, location, orders) {
    this.customerName = customerName;
    this.location = location;
    this.order = orders;
    this.toOrder();
    /* this.resaurant = new Restaurant(customerName, orders); */
  }
  toOrder() {
    console.log(`\n${this.customerName} the customer placed the order.\n${this.location} adresine ${this.order} siparişi vardır.`
    );
  }
}

costumer1 = new Customer('Cihat', 'Beşyüz Evler İstanbul/GOP', 'Lahmacun,Döner,Kebap');
goster = new Restaurant(costumer1.customerName, costumer1.order);

costumer2 = new Customer('Ali', 'Esenler  Malatya/GOP', 'Lahmacun,Döner');
goster2 = new Restaurant(costumer2.customerName, costumer2.order);

costumer3 = new Customer('Ayşe', 'Etiler  İstanbul/GOP', 'Lahmacun,Döner,Kebap');
goster3 = new Restaurant(costumer3.customerName, costumer3.order);
