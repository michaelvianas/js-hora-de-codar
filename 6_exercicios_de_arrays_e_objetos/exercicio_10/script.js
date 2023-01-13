let calculadora = {
  somar: function(num1, num2){ 
    return num1 + num2;
  },
  subtrair: function(num1, num2){ 
    return num1 - num2;
  },
  multiplicar: function(num1, num2){ 
    return num1 * num2;
  },
  dividir: function(num1, num2){ 
    if(num2 == 0){
      return undefined;
    }
    return num1 / num2;
  }
}

console.log(calculadora.somar(2, 4));
console.log(calculadora.subtrair(6, 4));
console.log(calculadora.multiplicar(11, 3));
console.log(calculadora.dividir(2, 0));
console.log(calculadora.dividir(132, 3));
