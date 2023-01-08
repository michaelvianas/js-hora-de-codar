let fatorial = 6;

function resolverFatorial(numero){
  if(numero > 1){
    return numero * resolverFatorial(numero - 1);
  }else
    return 1;
}

console.log(`Fatorial de ${fatorial} é ${resolverFatorial(fatorial)}`);