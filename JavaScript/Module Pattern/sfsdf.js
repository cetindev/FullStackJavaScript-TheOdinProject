var Module = (function () {
  let number = 0;

  let increment = function () {
    return ++number;
  }
  let decrement = function () {
    return --number;
  }
  return [
    increment,
    decrement
  ]
})();

console.log(Module.includes());