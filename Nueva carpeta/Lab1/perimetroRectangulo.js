const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el ancho del rectángulo: ", (ancho) => {
  rl.question("Ingrese el alto del rectángulo: ", (alto) => {
    let a = parseFloat(ancho);
    let h = parseFloat(alto);

    let perimetro = 2 * (a + h);

    console.log(`Ancho: ${a}, Alto: ${h}`);
    console.log(`Perímetro del rectángulo: ${perimetro}`);

    rl.close();
  });
});