// Exercício de funções: Funçoes + if/else

function poderDirigir(idade){
  if(idade > 17){
    console.log(`Você tem ${idade} anos e, se tiver carteira, pode dirigir.`);
  }else
    console.log(`Você tem ${idade} anos e não pode dirigir.`);
}

poderDirigir(17);