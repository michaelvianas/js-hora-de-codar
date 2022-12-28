// Exercício com modificador constante

const nome = `Guilherme`;

if(nome == `Michael` || nome == `michael`) {
  document.getElementById('para1').innerHTML = `Seu nome é Michael`;
}else{
  document.getElementById('para1').innerHTML = `Seu nome não é Michael`;
}