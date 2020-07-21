module.exports = name => `Merhaba ${name}!`;

const sayHello = require('./hello');
console.log(sayHello('Cihat'));