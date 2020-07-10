//Event Bubbling 

//Burdaki olay eğer karta tıklanırsa o kardın üst elemanıda etkilenir.
//Bunu isteniyorsak e.stopPropagation(); yaparak sonlandırabiliriz.



const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');
/* 
form.addEventListener('click', function (e) {
  console.log('form');
  e.stopPropagation();
});
cardBody.addEventListener('click', function (e) {
  console.log('card body');
  e.stopPropagation();
});
card.addEventListener('click', function (e) {
  console.log('card');
  e.stopPropagation();
});
container.addEventListener('click', function (e) {
  console.log('container');
  e.stopPropagation();
});
 */
//Event Captuing 
//En dıştan içe doğru yapa yapmamız için 3.bir parametre alır ve bu da true değerinin
//döndürür.
//yani bu en dışdan içe doğru yaparsak en dışdakine  ulaşırız ve belki saçma olabilir.


/* 
form.addEventListener('click', function (e) {
  console.log('form');
  e.stopPropagation();
}, true);
cardBody.addEventListener('click', function (e) {
  console.log('card body');
  e.stopPropagation();
}, true);
card.addEventListener('click', function (e) {
  console.log('card');
  e.stopPropagation();
}, true);
container.addEventListener('click', function (e) {
  console.log('container');
  e.stopPropagation();
}, true); */
/* 
 const deleteItem = document.querySelectorAll('.fa-times');
 
 deleteItem.forEach(function (item) {
   item.addEventListener('click', function (e) {
     console.log(e.target);
   })
 })
 
 
 console.log(deleteItem);; */


const ul = document.querySelector('ul');

ul.addEventListener('click', function (e) {
  if (e.target.className === 'fas fa-times') {
    e.target.parentElement.parentElement.remove();
    e.preventDefault();
  }
})
