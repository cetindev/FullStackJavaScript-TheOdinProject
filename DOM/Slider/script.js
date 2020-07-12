//random olarak geçen versiyonu
var models = [
  {
    name: 'Bmw 418',
    image: 'img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
  },
  {
    name: 'Mazda CX-3',
    image: 'img/mazda.jpg',
    link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion',
  },
  {
    name: 'Volvo S60',
    image: 'img/volvo.jpg',
    link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
  },
  {
    name: 'Skoda Superb',
    image: 'img/skoda.jpg',
    link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active',
  },
  {
    name: 'Honda Civic',
    image: 'img/honda.jpg',
    link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance',
  }
];
var index = 0;
var slaytCount = models.length;
var intarvel;;
var settings = {
  duration: '1500',
  random: false,

}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
  index--;
  showSlide(index);
  console.log(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
  index++;
  showSlide(index);
  console.log(index);
});
document.querySelectorAll('.arrow').forEach(item => {
  item.addEventListener('mouseenter', function () {
    clearInterval(intarvel);
  })
});
document.querySelectorAll('.arrow').forEach(item => {
  item.addEventListener('mouseleave', function () {
    init(settings);
  })
});

function init(settings) {
  var prev;// üst üste aynı değer döndürmemesi için yapıyoruz.  

  //setTimeout girilen değeri kadar yapar sonra durur .ornek 200ms kadar çalıştırır sonra durur
  //ama setInterval //loop gibi olur clearInterval gelene kadar çalışır
  intarvel = setInterval(function () {
    if (settings.random) {
      //random  index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
      // index = Math.floor(Math.random() * slaytCount);
    }
    else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index)
  }, settings.duration);
}


function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector('.card-title').textContent = models[index].name;
  document.querySelector('.card-img-top').setAttribute('src', models[index].image);
  document.querySelector('.card-link').setAttribute('href', models[index].link);
}



































/* //Sağ ve sola tıklanarak geçilen ayarı
var models = [
  {
    name: 'Bmw 418',
    image: 'img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
  },
  {
    name: 'Mazda CX-3',
    image: 'img/mazda.jpg',
    link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion',
  },
  {
    name: 'Volvo S60',
    image: 'img/volvo.jpg',
    link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
  },
  {
    name: 'Skoda Superb',
    image: 'img/skoda.jpg',
    link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active',
  },
  {
    name: 'Honda Civic',
    image: 'img/honda.jpg',
    link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance',
  }
];
var index = 2;
var slaytCount = models.length;
showSlide(index);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
  index--;
  showSlide(index);
  console.log(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
  index++;
  showSlide(index);
  console.log(index);
});

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector('.card-title').textContent = models[index].name;
  document.querySelector('.card-img-top').setAttribute('src', models[index].image);
  document.querySelector('.card-link').setAttribute('href', models[index].link);
}
 */