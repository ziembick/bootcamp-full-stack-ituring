// minha solução
let extrato = (lista) => {
    let finalSaldo = 0
    let depositoTotal = 0
    let retiradasTotal = 0

    for (item of lista){
        if (item >= 0){
            depositoTotal = depositoTotal += item 
        }
        if (item <= 0) {
            retiradasTotal = retiradasTotal += item
        }
    }

    finalSaldo = depositoTotal + retiradasTotal

    const positivoNegativo = finalSaldo > 0 ? "positivo" : "negativo"

    console.log(`O valor total depositado foi de R$: ${depositoTotal}`)
    console.log(`O valor total retirado foi de R$: ${Math.abs(retiradasTotal)}`)
    console.log(`O saldo final de sua conta foi ${positivoNegativo} no valor R$:${finalSaldo}`)
}

let depositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
extrato(depositosRetiradas)

/////////////////////////////////////////////////////////////////////////////////

//solução
let exibeExtrato = lista => {
    let saldoFinal = 0
    let totalDepositos = 0

    for (item of lista) {
        totalDepositos += item > 0 ? item : 0
        saldoFinal += item
    }

    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`)
}

let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeExtrato(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeExtrato(listaDepositosRetiradas)




