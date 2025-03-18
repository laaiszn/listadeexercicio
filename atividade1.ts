let teclado = require(`prompt-sync`);
console.log("Digite o valor do raio e da altura da lata para calcular p volume");

let raio = parseFloat(teclado()("Digite o valor do raio"));
let altura = parseFloat(teclado()(`Digite o valor da altura`));
const pi = 3.14159;
 
let volume = pi * raio**2 * altura;

console.log(`O volume da lata é : ${volume}`);