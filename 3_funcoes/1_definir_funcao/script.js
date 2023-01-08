function imprimirNoConsole() {
  console.log(`Olá, mundo!`);
}

imprimirNoConsole();

function imprimirNumero(numero) {
  console.log(`Número é ${numero}`);
}

imprimirNumero(2);
imprimirNumero(4);
imprimirNumero(6);
imprimirNumero(8);

const numeroAleatorioParaCima = function() {
  //console.log(Math.ceil(Math.random() * 100));
  console.log(Math.random());
  console.log(Math.ceil(Math.random() * 100));
}

const numeroAleatorioParaBaixo = function() {
  //console.log(Math.ceil(Math.random() * 100));
  console.log(Math.floor(Math.random() * 100));
}

numeroAleatorioParaCima();