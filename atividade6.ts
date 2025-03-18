let teclado = require('prompt-sync')();
let n1 = parseFloat(teclado('Digite a nota da N1: '));
let n2 = parseFloat(teclado('Digite a nota da N2: '));
let media = (n1 + n2) / 2;
if (media >= 8.5 && media <= 10) {
    console.log('A');
} else if (media >= 7 && media < 8.5) {
    console.log('B');
} else if (media >= 5 && media < 7) {
    console.log('C');
} else if (media >= 3 && media < 5) {
    console.log('D');
} else {
    console.log('E');
}