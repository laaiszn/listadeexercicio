let teclado = require('prompt-sync')();
    let macas = teclado('Quantas maçãs você deseja comprar? ');
    let valor = 0; // valor total da compra
    if (macas < 12){
        valor = macas * 0.30;
    } else {
        valor = macas * 0.25;
    }
    console.log(`O valor total da compra é: R$ ${valor}`)