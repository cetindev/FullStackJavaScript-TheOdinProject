//Callback functions
let val;

function MultioleByTwo(a, b, c, callback) {
  let arr = [];
  if (callback && typeof callback === 'function') {
    for (let i = 0; i < 3; i++) {
      arr[i] = callback(arguments[i] * 2);
    }
  }
  return arr
}
function addOne(a) {
  return a + 1;
}
function addThere(a) {
  return a + 2;
}
function addTwo(a) {
  return a + 3;
}
val = MultioleByTwo(5, 10, 20, addOne);

// for (let i = 0; i < val.length; i++) {
//   val[i] = addOne(val[i]);
// }

/*
//Buda olabilir
val = MultioleByTwo(5, 10, 20, function (a) {
  return a+2;
}); */

console.log(val);