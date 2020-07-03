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
/* const s = [5, 7, 2];
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
editInPlace(); */
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

/* ES6: Dizileri Yerinde Değerlendirmek için Yayım İşlecini Kullanma
ES6 , çoklu parametrelerin veya öğelerin beklendiği yerlerde dizileri ve diğer ifadeleri genişletmemizi sağlayan forma operatörünü sunar .

Aşağıdaki ES5 kodu apply(), bir dizideki maksimum değeri hesaplamak için kullanılır:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
Kullanmak zorundaydık Math.max.apply(null, arr)çünkü Math.max(arr)geri döndü NaN. Math.max()virgülle ayrılmış bağımsız değişkenler bekler, ancak bir dizi beklemez. Forma operatörü bu sözdizimini okumayı ve sürdürmeyi çok daha iyi hale getirir.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
...arrambalajsız bir dizi döndürür. Başka bir deyişle, diziyi yayar . Ancak, yayılma işleci yalnızca bir işleve bağımsız değişken veya dizi değişmezinde olduğu gibi yerinde çalışır. Aşağıdaki kod çalışmaz:

const spreaded = ...arr; // will throw a syntax error
 */
/*
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(() => {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
 */


/*
ES6: Nesnelerden Değerleri Ayıklamak için Yıkıcı Atamayı Kullanma
Yıkım ataması , doğrudan bir nesneden alınan değerleri düzgün bir şekilde atamak için ES6'da sunulan özel bir sözdizimidir.

Aşağıdaki ES5 kodunu göz önünde bulundurun:

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
İşte ES6 yıkım sözdizimini kullanan eşdeğer bir atama ifadesi:

const { name, age } = user;
// name = 'John Doe', age = 34
Burada nameve agedeğişkenleri usernesneden ilgili değerlerinin değerleri oluşturulur ve atanır . Bunun ne kadar temiz olduğunu görebilirsiniz.

Nesneden istediğiniz kadar çok veya az değer ayıklayabilirsiniz.
 */

/* const LOCAL_FORECAST = {
 yesterday: { low: 61, high: 75 },
 today: { low: 64, high: 77 },
 tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
// Only change code above this line
*/
/* 
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

 */

/* const myObject = {
  property: 'trial!',
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  }
}
const variable = 'property'
console.log(myObject[variable]);
console.log(myObject);
 */

const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function printName(player) {
  console.log(player.name);
}

function gameOver(winningPlayer){
  console.log("Congratulations!")
  console.log(winningPlayer.name + " is the winner!")
  // printName(playerTwo);
}
let kazanan = gameOver(playerTwo);

