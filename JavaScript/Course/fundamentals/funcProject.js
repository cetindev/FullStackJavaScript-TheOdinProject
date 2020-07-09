//Demo: Functions

var hesapA = {
  ad: "Kazım GönlüBoş",
  hesapNo: "2345678",
  bakiye: 1234,
  ekHesap: 1234,
}
var hesapB = {
  ad: "ALi GönlüDolu",
  hesapNo: "2345678",
  bakiye: 1234,
  ekHesap: 1234,
}
function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}`);

  if (hesap.bakiye >= miktar) {
    console.log('Para alabilirsiz.');
  }
  else {
    var toplam = hesap.bakiye + hesap.ekHesap;
    if (toplam >= miktar) {
      if (confirm('ek hesabınızdan Kullanmak İster misiniz ? ')) {
        console.log('paraNınızı Alabilriisiiz');
      }
      else {
        console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmaktadır`);
      }
    }
    else {
      console.log("Üzgünüz Yetersiz Bakiye!!!!$$#£#$#£#$½");

    }
  }
}

paraCek(hesapA, 2000);
paraCek(hesapB, 4000);