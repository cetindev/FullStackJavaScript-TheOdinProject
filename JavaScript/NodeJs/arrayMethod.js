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