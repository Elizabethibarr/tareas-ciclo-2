const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
  let p = parseFloat(precio);
  let iva = p * 0.13;
  let total = p + iva;

  console.log(`Precio original: $${p.toFixed(2)}`);
  console.log(`IVA (13%): $${iva.toFixed(2)}`);
  console.log(`Precio total: $${total.toFixed(2)}`);

  rl.close();
});