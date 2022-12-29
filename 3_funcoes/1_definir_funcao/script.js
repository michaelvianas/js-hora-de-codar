function imprimirNoConsole() {
  console.log(`Olá, mundo!`);
}

imprimirNoConsole();

function imprimirNumero(numero) {
  console.log(`Número é ${numero}`);
}

imprimirNumero(12);
imprimirNumero(13);
imprimirNumero(14);
imprimirNumero(15);

const numeroAleatorio = function() {
  console.log(Math.ceil(Math.random() * 100));
}

numeroAleatorio();
numeroAleatorio();
