/* //bir söz vernek gibi yani olursa bunları bunları yapacak gibi

var p = new Promise(function (resolve, reject) {
  if (true) {
    resolve('Success');
  }
  else {
    reject('Failure'); 
  }
});

p.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log(error);
}) */

/* 
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(5);
  }, 1000);
}).then(function (number) {
  console.log(number);
  return number * number;
}).then(function (number) {
  console.log(number);
  return number * number;
}).then(function (number) {
  console.log(number);
  return number * number;
}).then(function (number) {
  console.log(number);
  return number * number;
}) */

const isMomHappy = true;
const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      name: 'Iphone 11',
      price: '9000',
      color: 'Red'
    }
    resolve(phone);
  }
  else {
    const error = new Error('Mom is not happy');
    reject(error);
  }
});

const showToFriends = function (phone) {
  const message = 'He friends this is my new phone ' + phone.name;
  return Promise.resolve(message);
}


const askMom = function () {
  willGetNewPhone
     .then(showToFriends
    ).then(message => console.log(message)
    ).catch(error => {
      console.log(error);
    })
}


askMom();