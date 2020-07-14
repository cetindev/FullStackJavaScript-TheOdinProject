//İmmediate Functions 

function welcome() {

};

//immediate Functions
/* (function () {
  
})(); */

/* (function () {
  
}()); */

//Çalıştırıldığında ilk çalışan fonksiyon olur ve bir kere çalışır.
(function (name) {
  var days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]
  var today = new Date();
  var msg = 'Welcome ' + name + ' Today is ' + days[today.getDay()];
  console.log(msg);
}('Cihat'));

