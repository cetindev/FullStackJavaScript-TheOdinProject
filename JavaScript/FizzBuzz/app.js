const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Lütfen Üst Sınırınızı Giriniz: ", function (answer) {
  console.log(`Üst sınırınız  ${answer}`)
  rl.close();
  for (let i = 1; i <= answer; i++) {
    console.log(i);

  }

  process.exit(0);
});
