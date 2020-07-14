var num = 50;
var account = {
  name: 'Yigit',
  accounNumber: '1234567'
}

function update(a, b) {
  a = 100;
  b.accounNumber = '222222';
}

update(num, account);

console.log(num);
console.log(account);