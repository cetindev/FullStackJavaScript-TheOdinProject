var i = 1234;
for (let i = 0; i < 10; i++) {
  console.log('i', i);
}
console.log(i);


console.log(`Burdaki olay let ve const ; block scope oluşturur.Yani bir bloğun içindeki değerler sadece orda kullanılır ama
'var' ise block scope oluşturmaz ve heryerden ulaşılır bu yüzden birçok karışıklık olabilir.Ama bazende 'var' kullanmak daha mantıklı olabilir. `);

var i = 1234;
for (var i = 0; i < 10; i++) {
  console.log('i', i);
}
console.log(i);