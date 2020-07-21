const array = [1, 2, 3, 4, 5] // Örneklem bir dizi oluşturalım.

function hello() {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  console.log(i, i + 1, i + 2) // Artan i değeri burada erişilebilir.
}
//hello();

function world() {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
  console.log(i) // Artan i değeri burada let kullanımından dolayı erişilemez.
}