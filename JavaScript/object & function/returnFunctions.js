function Question(hobby) {
  switch (hobby) {
    case 'car':
      return function (car) {
        console.log('CAr');
      }
      break;
    case 'book':
      return function (name) {
        console.log('Book');
      }
      break;
    case 'book':
      return function (name) {
        console.log(name + ' What is Your Favourite Book ?');
      }
      break;
    case 'software':
      return function (name) {
        console.log(name + '?');
      }
      break;


    default:
      break;
  }
}

var carQuestion = Question('car');
carQuestion('Çınar');
carQuestion('Emel');