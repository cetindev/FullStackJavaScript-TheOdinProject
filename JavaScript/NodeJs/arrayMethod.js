/*
//Every metodu, dizinin tüm elemanlarının karşılaştırma operatörü aracılığıyla kontrol edilmesine yarar.
//Sonuç mantıksaldır ( true, false ).

var array = [1, 2, 3, 4, 5]

var result = array.every(function (piece) {
  if (piece < 6) {
    return true
  }
})

console.log(result)
*/

/*
//Filter metodu, dizinin elemanlarını filtrelemeyi sağlar.
//Sonuç yeni bir dizi olarak dönecektir. Ana dizinin elemanlarını değiştirmez.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = array.filter(function (piece) {
  if (piece % 2 === 0) {
    return piece
  }
})

console.log(result)
*/

/*
//Find metodu, dizi içerisinde arama yapmayı sağlar.
var users = [
  {
    id: 1,
    name: 'alpcan'
  },
  {
    id: 2,
    name: 'hasan'
  },
  {
    id: 3,
    name: 'burak'
  }
]
var user = users.find(function (user) {
  if (user.name === 'hasan') {
    return user
  }
})

console.log(user)
*/

/*
//From metodu, belirli uzunlukta dizi oluşturmayı sağlar.Bundan dolayı 2 parametre alır .Biri uzunluğudur.
var array = Array.from({ length: 10 }, function (value, index) {
  return index * 2
})
console.log(array)
*/

/*
//Map metodu, çağırılan dizide elemanların üzerinde işlem yapar ve yeni bir dizi olarak döndürür.
var array = ['cagatay', 'cali', 'javascript', 'eğitimi']
var result = array.map(function (piece) {
  return piece.toUpperCase()
})

console.log(result);
console.log(array)
*/


/*
//Reduce metodu, dizi elemanları üzerinde işlem yapar ve sonucu tek bir değer şeklinde döndürür.
var total = [10, 5, 4, 6].reduce(function (sum, value) {
  return sum + value
}, 1)

console.log(total)
*/

/*
//Some metodu, dizideki elemanlardan en az birisinin koşula uyması durumunda mantıksal bir dönüt yapar.
var array = [1, 2, 3, 4, 5]
var result = array.some(function (piece) {
  if (piece > 4) {
    return true
  }
})

console.log(result)
*/

/* 
var array = [1, 2, 3, 4, 5, 6]
array.push(7) // Dizinin sonuna 7 elemanını ekler.
array.shift() // Dizinin ilk elemanını çıkartır.
array.unshift(0) // Diziye bir eleman ekler. (En başa)
// delete array[1] // Dizinin 1. anahtarlı elemanını çıkartır.
array.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
array.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
array.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
array.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır
 */

//Daha fazla açıklama için aşağıdaki linke daha açıklayıcıdır.
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array