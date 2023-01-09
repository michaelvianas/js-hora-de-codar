// Exercício de funções: Decremente um valor e mostre os números pares

function decrementarNumero(numero){
  for(aux = numero; aux > 0; aux--){
    if((aux % 2) == 0){
      console.log(aux);
    }
  }
}

decrementarNumero(11);