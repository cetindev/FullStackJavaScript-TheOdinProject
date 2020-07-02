const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Lütfen Üst Sınırınızı Giriniz: ", function (answer) {
  console.log(`Üst sınırınız  ${answer}`)
  rl.close();
  for (let i = 1; i <= answer; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz!");
    }
    else if (i % 3 == 0) {
      console.log("Fizz!");
    }
    else if (i % 5 == 0) {
      console.log("Buzz!");
    }
    else {
      console.log(i);
    }
  }
  process.exit(0);
});
