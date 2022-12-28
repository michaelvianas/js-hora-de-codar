// Teste de número primo
let numero = 23;
let ePrimo = true;

for(let inicio = 2; inicio < numero; inicio++) {
  if(numero % inicio == 0){
    ePrimo = false;
    break;
  }
}

if(ePrimo == true){
  document.getElementById('para1').innerHTML = `${numero} é primo`; 
}else
  document.getElementById('para1').innerHTML = `${numero} não é primo`;