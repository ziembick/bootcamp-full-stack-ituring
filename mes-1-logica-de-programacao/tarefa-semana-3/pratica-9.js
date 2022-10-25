function quantidadePositivos(numeros) {
    return numeros.filter(nr => nr >= 0).length;
}
  
  let lista4 = quantidadePositivos([100, -20, -30, 10, -7, -21, -5]);
  console.log(`Total de depósitos: ${lista4}`);

function quantidadeNegativos(numeros) {
    return numeros.filter(nr => nr <= 0).length;
}
  
  let lista5 = quantidadeNegativos([100, -20, -30, 10, -7, -21, -5]);
  console.log(`Total de retiradas: ${lista5}`);

function somar(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 2) {
            total += lista[i];
        } 
    }
    return total;
}
let lista = [100, -20, -30, 10, -7, -21, -5];
console.log(`O valor total depositado foi de R$: ${somar(lista)}`);

function somar2(lista2) {
    let total = 0;
    for (let i = 0; i < lista2.length; i++) {
        if (lista2[i] <= 0) {
            total += lista2[i];
        }
    }
    return total;
}
let lista2 = [100, -20, -30, 10, -7, -21, -5];
console.log(`O valor total retirado foi de R$:${somar2(lista2)}`);

//
let numeros = [100, -20, -30, 10, -7, -21, -5]

let soma = numeros.reduce(function(soma,i) {
    return  soma + i;
})

console.log(`O saldo final de sua conta foi positivo no valor de R$${soma}`)


// solução

let exibeExtratoCompleto = lista => {
    let saldoFinal = 0
    let totalDepositos = 0
    let qtdDepositos = 0
    let qtdRetiradas = 0

    for (item of lista) {
        const ehDeposito = item > 0
        qtdDepositos += ehDeposito ? 1 : 0
        qtdRetiradas += !ehDeposito ? 1 : 0
        totalDepositos += ehDeposito ? item : 0
        saldoFinal += item
    }
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`Total de depósitos: ${qtdDepositos}`)
    console.log(`Total de retiradas: ${qtdRetiradas}`)
    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`)
}

let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeExtratoCompleto(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeExtratoCompleto(listaDepositosRetiradas)