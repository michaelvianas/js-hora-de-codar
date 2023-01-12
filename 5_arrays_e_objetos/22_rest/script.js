let num1 = 1;
let num2 = 5;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...args){
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
}

//imprimirNumeros(num1, num2, num3, num4);
imprimirNumeros(1,2,3,4,5,6,7,8,9,10);