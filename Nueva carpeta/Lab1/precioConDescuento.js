const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
  let p = parseFloat(precio);
  let descuento = p * 0.15;
  let precioFinal = p - descuento;

  console.log(`Precio original: $${p.toFixed(2)}`);
  console.log(`Descuento (15%): $${descuento.toFixed(2)}`);
  console.log(`Precio a pagar: $${precioFinal.toFixed(2)}`);

  rl.close();
});