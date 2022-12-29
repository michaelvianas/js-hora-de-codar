function multiplicarTresNumeros(x,y,z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log(mult);

function podeDirigir(idade, cnh) {
  if(idade > 17 && cnh == true){
    console.log(`Pode dirigir`);
  }else
    console.log(`Não pode dirigir`);
}

podeDirigir(19, true);
podeDirigir(17, 1);
podeDirigir(19, false);
podeDirigir(16, 0);
