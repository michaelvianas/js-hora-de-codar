const pessoa = {
  nome: undefined,
  setNome: function(nomeRecebido){
    this.nome = nomeRecebido;
  },
  getNome: function(){
    return this.nome;
  }
}

console.log(pessoa.nome);
pessoa.setNome(`Michael`);
console.log(pessoa.getNome());