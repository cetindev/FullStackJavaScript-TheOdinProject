//Traversing the Dom
let val;
let list = document.querySelector('.list-group');
val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //3 değeri döndürüyor yani bir text
val = list.childNodes[1].nodeType; //1 değeri döndürüyor yani bir attribute

val = list.children;//altındaki bütün çoçukları döndürür
val = list.children[0];//0. cocuğu döndürür
val = list.children[2];//0. cocuğu döndürür
val = list.children[3].textContent = "sonuncu çocuk";//ama bu elementin içindeki çocuk silinir ve yerine yazılan gelir.Ordaki x işareti silindi ordan anlarsın
val = list.children[3].children;//

list.firstChild;
val = list.firstChild;
val = list.lastChild;
val = list.childElementCount;//Kaç tane çocuğu old. gösteriyor
val = list.parentElement;//Burdaki parentElement ise üst eleme nti kast ediyor
val = list.parentElement.parentElement;//2 üst elemana çıkabiliriz.

val = list.children[0].nextSibling;//
val = list.children[2].nextElementSibling;//aynı seviyedeki elementdden sonrakine geçer(seçer)


val = list.children[0].previousSibling;//
val = list.children[2].previousElementSibling;//aynı seviyedeki elementdden bit öncekine  geçer(seçer)
/* console.log(val);
 */
for (let i = 0; i < list.childNodes.length; i++) {
  if (list.childNodes[i].nodeType === 3) {
    console.log(list.childNodes[i]);
  }
}
