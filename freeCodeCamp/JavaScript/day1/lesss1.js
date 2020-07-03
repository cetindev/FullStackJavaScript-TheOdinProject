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
  }
  array.pop();
  s[i] = array[i];
  console.log(array);
}
editInPlace();
/* ES6: Nesne Mutasyonunu Önle
Önceki meydan okumada görüldüğü gibi, consttek başına beyan, verilerinizi mutasyondan gerçekten korumaz. 
Verilerinizin değişmemesini sağlamak için JavaScript, Object.freezeveri değişimini önlemek için bir işlev sağlar .

Nesne dondurulduktan sonra, artık nesne ekleyemez, güncelleyemez veya silemezsiniz.
 Nesneyi değiştirme girişimleri hatasız olarak reddedilecektir.
  */
/* 
//isaretler ile fonksiyonlar 
const magic = () => {
 "use strict";
 const tarih = new Date();
 return tarih;
};
*/

/*  //
 const myConcat = (arr1, arr2) => {
  "use strict";
  return arr2.concat(arr1);
};

console.log(myConcat([1, 2], [3, 4, 5]));
 */
/* // Only change code below this line
const increment = (number = 5, value = 1) => number + value;
// Only change code above this line
 */

//istenilen sayı kadar girilen parametreler ile ve girilen parametreleri toplayan kod 
//ve buna ortam hazırlayan sey ise ...args 'dir.Yani kaç adet parametre girdisi ayırt etmeksizin bütün parametreleri alır
/* 
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0, 1, 2, 3, 4)); // 6
console.log(); // 0
 */

