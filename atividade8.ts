
let teclado = require('prompt-sync')();
console.log("Digite os ângulos do triângulo: ");
let angulo1 = Number(teclado("Digite o primeiro ângulo: "));
let angulo2 = Number(teclado("Digite o segundo ângulo: "));
let angulo3 = Number(teclado("Digite o terceiro ângulo: "));
let soma = angulo1 + angulo2 + angulo3;
if (soma == 180) {
    if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        console.log("Triângulo Retângulo");
    } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        console.log("Triângulo Obtusângulo");
    } else {
        console.log("Triângulo Acutângulo");
    }
} else {
    console.log("Não é um triângulo");
}