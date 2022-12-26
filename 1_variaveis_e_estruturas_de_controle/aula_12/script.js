// Aprendendo continue

for(let i=0; i<100; i+=3) {
  if(i==48 || i==60 || i==72){
    continue;
  }
  console.log(`i neste loop vale ${i}`);
}