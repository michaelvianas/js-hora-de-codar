function somar(a,b) {
  if(a === undefined || b === undefined){
    console.log("Esta função precisa ter dois argumentos");
  }else{
    console.log(a+b);
  }
}

somar(7);
somar(7,8);