var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
    else if (xhr.status === 404) {
      console.log('Kaynak Bulunamadı.');
    }
  }
}
xhr.onprogress = function () {
  console.log('On Progressing');
}

xhr.open('GET', 'msg.txt', true);
xhr.send();

console.log('Hello'); 