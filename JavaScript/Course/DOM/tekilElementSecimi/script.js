//SElecting ELements


//Single Elements
//tek elemeny seçerken getElementById() kullanılır 
/* let val;
val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;
val = document.getElementById('header');
 *//* 
val = val.className; 
*/
/*
 val = val.id;
*/
/*  val.style.display = "none" */
/* val.style.fontSize = '45px';
val.style.color = "red";
val.style.fontWeight = 'bold';
document.getElementById('header').innerHTML = '<i>Web Developer</i>';

console.log(val);
 */

//Multiple Element
//document.querySelector()
console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));
document.querySelector('li').style.color = 'red';
console.log(document.querySelector('li:last-child').style.color = 'blue');
console.log(document.querySelector('li:nth-child(2)').style.color = 'yellow');
console.log(document.querySelector('li:nth-child(3)').textContent = 'Değiştirildi...');

/* document.querySelector('li').className = 'list-group-item list-group-item-primary' */

document.querySelector('li').classList.add('active');

