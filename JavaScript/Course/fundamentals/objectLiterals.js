let val;
let person = {
  firsName: "Cihat",
  lastName: "Salik",
  age: 20,
  hobbies: ["music", "game"],
  address: {
    city: "İStanbul",
    country: "Türkiye"
  },
  dateOfBirth: function () {
    return 2020 - this.age
  },
}
val = person.firsName;
val = person.hobbies[1];
console.log(person.hobbies.length);
console.log(person.dateOfBirth());
console.log(person.hobbies);
console.log(val);
console.log("*********************************************************************************************************************");
let people = [
  { firsName: "Abdullah", lastName: "Veli" },
  { firsName: "Sena", lastName: "Gürbüzoğlu" },
  { firsName: "Rıza", lastName: "Kılsız" }
]

val = people[2];
console.log(val);
console.log(typeof people)

for (let i = 0; i < people.length; i++) {
  console.log(people[i].firsName);
}
console.log("**********************************************************************");
//Functions
function yasHesapla(dogumYili) {
  var nowYears = new Date().getFullYear();
  var yas = nowYears - dogumYili
  return yas;
}
let yas = yasHesapla(2000);
console.log(yas);
