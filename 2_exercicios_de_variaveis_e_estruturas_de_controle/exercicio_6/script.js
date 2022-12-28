// Exercício com if else aninhado

let idade = 23;
let temCNH = true;

if(idade >=18 && temCNH == false) {
  document.getElementById('para1').innerHTML = `Não pode dirigir`;
}else if(idade >=18 && temCNH == true){
  document.getElementById('para1').innerHTML = `Pode dirigir`;
}else
  document.getElementById('para1').innerHTML = `Não pode dirigir`;