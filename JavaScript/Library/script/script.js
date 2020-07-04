//Script will be written here
/* let myLibrary = [];

function Book() {
  
}
function addBookToLibrary() {
  
} */
document.addEventListener('DOMContentLoaded', () => {
  const newBookkForm = document.querySelector('#newBook');
  const close = document.getElementById('close');
  const button = document.querySelector('#addBook');
  const ContainerR = document.querySelector('#booksRContainer');
  const ContainerNr = document.querySelector('#booksNrContainer');
  let forStorage = '';
  let myLibrary = [];

  showcase = localStorage.getItem('books');//checking storage

  if (showcase != null) {
    showcase = showcase.trim();
  }
})