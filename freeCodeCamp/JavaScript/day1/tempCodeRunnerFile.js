//Lesson1
/* var numArray = [];
for (var i = 0; i < 6; i++) {

  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
console.log('************************************');

var numArray = [];
var i;
for (i = 0; i < 6; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
 */
/* const dizi = [1, 2, 3, 4, 5, 6];
var s = dizi[5] = 7;
console.log(dizi[5]);
if (dizi[5] == s) {
  console.log("eşittir");
} */

//Öteleme
const s = [5, 7, 2];
let array = [];
function editInPlace() {
  'use strict';
  for (let i = 0; i < s.length; i++) {
    array[i + 1] = s[i];
    array[0] = s[s.length - 1];
    array[s.length - 1].pop();
  }
  console.log(array);
}
editInPlace();
