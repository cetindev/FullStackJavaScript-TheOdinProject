//SElecting Elements


//Single Elements
//document.getElemetById()
//document.querySelector()
//Multiple Elements
// class name
//document.getElementsByClassName()

/* val = document.getElementsByClassName('list-group-item')[0];
val = document.getElementsByClassName('list-group-item')[0];
val = document.getElementsByClassName('list-group-item')[2];
*/
/* val = val[0]; */

/* let val;
val = document.getElementsByClassName('list-group-item');
val[1].style.color = 'blue';
val[1].style.fontSize = '25px';
val[2].textContent = 'I will go to Germany';
for (let i = 0; i < val.length; i++) {
  console.log(val[i].style.color = "red");
  console.log(val[i].textContent = "I will go to Germany");
  }
console.log(val);
 */


//document.getElementsByTagName()

/* val = document.getElementsByTagName('li');
val = document.getElementById('task-list').getElementsByTagName('a');
*/

//document.querySelectorAll()

let val;
/* val = document.querySelectorAll('li');

val.forEach(function (item, index) {
  item.textContent = `${index} - Hi`
  //indexlerinnin elemenaların üzerine yazdıran kod
}); */

//even çift elemanları kapsa lyani 2 ve 4'ü kapsadı.
//odd ise tekleri kapsar ve 1 ve 3'ü kapsadı
val = document.querySelectorAll('li:nth-child(even)');
val.forEach(function (item) {
  item.style.background = '#ccc';
})


console.log(val);

//Çokomelli
//getElemnts.. ile başlayan propertyler HTML collictions olur ve bunlara
//forEach() etki etmez sadaca for methodunun index numrası ile kullanabililriz.

//querySelectorAll( ) kullandığımızda bize NodeList  geliyor ve bunu da 
//forEach fonk.ile kullanabiliriz.