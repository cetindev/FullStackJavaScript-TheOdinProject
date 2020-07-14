/* let welcomeES6 = () => {
  console.log('Hello from ES6');
}
welcomeES6();

let multipleES6 = (x, y) => {
  return x * y
}
let multipleES6 = (x, y) => x * y;

let splitES6 = text => text.spli(' ');
 */
//Object Literals

let getProductES6 = (id, name) => ({
  id: id,
  name: name
})

const arr = [1, 2, 3, 4, 5, 6, 8, 76, 43, 34567, 89, 8, 32, 340];

let evenES6 = arr.filter((a) => a % 2 == 1);
console.log(evenES6);