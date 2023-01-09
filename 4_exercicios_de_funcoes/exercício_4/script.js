// Exercício de funções: Devolva um valor númerico aleatório

let aleatorio = function sorteieAte100(numero){
  return Math.ceil(Math.random() * numero);
}

console.log(aleatorio(100));