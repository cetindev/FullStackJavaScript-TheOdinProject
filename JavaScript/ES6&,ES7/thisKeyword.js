//this Keyword

/* let list = {
  category: 'phono',
  names: ['Iphone 8', 'Samsung S8', 'sdfsd'],
  call: function () {
    var self = this;
    this.names.map(function (name) {
      console.log(`${self.category} ${name}`);
    });
  }
}
 */


let list = {
  category: 'phono',
  names: ['Iphone 8', 'Samsung S8', 'sdfsd'],
  call: function () {
    this.names.map((name) => {
      console.log(`${this.category} ${name}`);
    });
  }
}
list.call();

/* function Game() {
  this.live = 0;
  this.addLive = function () {
    var self = this;
    this.OneUp = setInterval(function () {
      console.log(++self.live);
    }, 1000)
  }
  //Bu es6 ile self yapmamıza gerek kalmıyor
} */

function Game() {
  this.live = 0;
  this.addLive = function () {
    this.OneUp = setInterval(() => {
      console.log(++this.live);
    }, 1000)
  }
}


let player = new Game();
player.addLive();