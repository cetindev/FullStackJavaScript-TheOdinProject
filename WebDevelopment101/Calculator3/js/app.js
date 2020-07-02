//Event DELEGATİON
document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', () => {
    console.log(key.getAttribute('data-key'));//Bunun yerine console.log(key.CDATA_SECTION_NODE.value); kullanılabilir
  });
});

document.querySelector()