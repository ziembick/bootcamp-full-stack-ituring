function diaDaSemana (dias) {
    switch(dias) {
        case 01:
            console.log("Segunda-Feira");
            break
        case 02:
            console.log("Terça-Feira");
            break
        case 03:
            console.log("Quarta-Feira");
            break
        case 04:
            console.log("Quinta-Feira");
            break
        case 05:
            console.log("Sexta-Feira");
            break
        case 06:
            console.log("Sábado");
            break
        case 07:
            console.log("Domingo");
            break
        default:
            console.log(`O número ${dias} não é válido para o dia da semana`)
    }
}

diaDaSemana(01)
diaDaSemana(02)
diaDaSemana(03)
diaDaSemana(04)
diaDaSemana(05)
diaDaSemana(06)
diaDaSemana(07)
diaDaSemana(08)