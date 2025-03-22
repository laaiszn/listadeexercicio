let teclado = require('prompt-sync')();
let respostasPositivas: number = 0;
 let resposta1: string | null = prompt("Você telefonou para a vítima? (sim/não)");
    if (resposta1 === "sim") {
        respostasPositivas++;
    }

    let resposta2: string | null = prompt("Você esteve no local do crime? (sim/não)");
    if (resposta2 === "sim") {
        respostasPositivas++;
    }

    let resposta3: string | null = prompt("Você mora perto da vítima? (sim/não)");
    if (resposta3 === "sim") {
        respostasPositivas++;
    }

    let resposta4: string | null = prompt("Você devia para a vítima? (sim/não)");
    if (resposta4 === "sim") {
        respostasPositivas++;
    }

    let resposta5: string | null = prompt("Você já trabalhou com a vítima? (sim/não)");
    if (resposta5 === "sim") {
        respostasPositivas++;
    }

    let classificacao: string = "Inocente";
    if (respostasPositivas === 2) {
        classificacao = "Suspeita";
    } else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
        classificacao = "Cúmplice";
    } else if (respostasPositivas === 5) {
        classificacao = "Assassino";
    }

    console.log("Você foi classificado como:", classificacao);
    alert("Você foi classificado como: " + classificacao);
}
