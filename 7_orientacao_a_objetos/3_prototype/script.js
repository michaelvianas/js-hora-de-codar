const pessoa = {
  nome: `Michael`
}

console.log(Object.getPrototypeOf(pessoa));
console.log(pessoa.hasOwnProperty(`nome`));
console.log(pessoa.hasOwnProperty(`CPF`));