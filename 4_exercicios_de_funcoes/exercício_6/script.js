// Exercício de funções: Retorne o tipo de dado

let tipoDeDado = function retorneTipoDeDado(dado){
  return `Tipo de dado: ${typeof(dado)}`;
}

console.log(tipoDeDado(8));
console.log(tipoDeDado(`Michael`));
console.log(tipoDeDado(false));
console.log(tipoDeDado(null));
console.log(tipoDeDado(undefined));
