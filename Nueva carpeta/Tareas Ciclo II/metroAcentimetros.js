const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese una cantidad en metros: ", (metros) => {
  let m = parseFloat(metros);
  let centimetros = m * 100;
  console.log(`${m} metros equivalen a ${centimetros} centímetros`);
  rl.close();
});