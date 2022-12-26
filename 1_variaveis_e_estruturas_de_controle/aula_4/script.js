// Aprendendo a usar funções Math

let maiorNumero = Math.max(1,5,2,3);

document.getElementById('numero_maior').innerHTML = maiorNumero;

let menorNumero = Math.min(1,5,2,3);

document.getElementById('numero_menor').innerHTML = menorNumero;

let arredondar = Math.round(5.29);

document.getElementById('arredondar').innerHTML = arredondar;

let arredondarParaCima = Math.ceil(5.19);

document.getElementById('arredondar_para_cima').innerHTML = arredondarParaCima;

let arredondarParaBaixo = Math.floor(5.89);

document.getElementById('arredondar_para_baixo').innerHTML = arredondarParaBaixo;