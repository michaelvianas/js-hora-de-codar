let pessoa = {
  nome: `Michael`
}

let pessoa2 = pessoa;

let pessoa3 = {
  nome: `Gabriella`
}

console.log(pessoa3 == pessoa2);
console.log(pessoa == pessoa3);

console.log(pessoa2 == pessoa);

pessoa2.nome = `Guilherme`;

console.log(pessoa.nome);

pessoa.nome = `Maria`;

console.log(pessoa2.nome);
