var let;

//Local Storage
const firstName = localStorage.setItem('firstName', 'Sadık');
const lastName = localStorage.setItem('lastName', 'Turan');

//get item
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

//
let hobies = [
  "top oynamak ",
  'kitap okumak',
  "coding"
]
//set array to storage
localStorage.setItem('hobies', JSON.stringify(hobies));
val = JSON.parse(localStorage.getItem('hobies'));
//remove item
/* localStorage.removeItem('firsName');
localStorage.removeItem('lastName'); */

//clear
localStorage.clear();

console.log(val);
console.log(localStorage);









/*
//Session Storage
const city = sessionStorage.setItem('city', 'Kocaeli');
const country = localStorage.setItem('country', 'Turkey');
console.log(localStorage);
console.log(sessionStorage); */


//Local storage sitenin ilgili URL si ile kaydettiğiniz bilgiler kalır yani silinmezz siz siteyi kapatsanızda silinmez
//Ancak session storage ise siteyi kapattığınız anda bilgiler silininr.
