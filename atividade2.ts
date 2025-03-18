const teclado = require(`prompt-sync`)();

let x:number = parseFloat(teclado(`Digite um número: `));
let y:number = parseFloat(teclado(`Digite outro número: `));

console.log(`Os números digitados foram: ${x} e ${y}`);

let numtemp: number = x=y;
x = y;
y = numtemp;
console.log (`Os números trocados são ${x} e ${y}`);