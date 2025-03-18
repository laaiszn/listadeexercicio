let teclado = require('prompt-sync')

console.log("Digite dois números para saber qual é o maior")
let num1 = parseFloat(teclado()("Digite o primeiro número: "))
let num2 = parseFloat(teclado()("Digite o segundo número: "))
if (num1 > num2) {
    console.log("O número maior é ${num1} e o número menor é ${num2}")
} else if (num1 < num2) {
    console.log("O número maior é ${num2} e o número menor é ${num1}")
} else {
    console.log("Os números ${num1} e ${num2} são iguais")
}