let pessoa = {
  "nome": "Michael",
  "idade": 28,
  "profissão": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);


