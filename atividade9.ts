let teclado = require('prompt-sync')();
console.log("Digite sua idade e seu peso: ");
let idade = teclado("Digite sua idade: ");
let peso = teclado("Digite seu peso: ");
if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log("Você pode doar sangue");
} else {
    console.log("Você não pode doar sangue");
    if (idade < 18 || idade > 67) {
        console.log("Idade fora do intervalo permitido");
    }
    if (peso <= 60) {
        console.log("Peso insuficiente");
    }
}