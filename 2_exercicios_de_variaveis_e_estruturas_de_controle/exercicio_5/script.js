// Exercício com if else

const velMaxima = 80.0;

let velocidadeDoCarro = 81.0;

if(velocidadeDoCarro > velMaxima) {
  document.getElementById('para1').innerHTML = `Está acima da velocidade`;
}else{
  document.getElementById('para1').innerHTML = `Não está acima da velocidade`;
}