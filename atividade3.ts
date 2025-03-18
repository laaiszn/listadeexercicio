let teclado = require('prompt-sync')();
let letra = teclado('Digite uma letra: ');
if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || 
    letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
    console.log('A letra digitada é uma vogal');
} else {
    console.log('A letra digitada é uma consoante');
}
console.log('Fim do programa');