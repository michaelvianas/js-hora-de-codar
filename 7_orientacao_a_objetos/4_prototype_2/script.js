const pessoa = {
  nome: `Michael`
}

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.nome);
console.log(pessoaNova.hasOwnProperty(`nome`));
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);