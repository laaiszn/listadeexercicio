let teclado = require(`prompt-sync`)();
let num1 = parseFloat(teclado(`Digite o primeiro número: `));
let num2 = parseFloat(teclado(`Digite o segundo número: `));
let num3 = parseFloat(teclado(`Digite o terceiro número: `));
if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
}  else if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1,1);
    }
} else {
    if (num1 <  num2){
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
        
    
    }
} 