//minha solução
const saldoFinal = () => {
    let soma = numeros.reduce(function(soma,i) {
        return  soma + i;
    })
    const positivoNegativo = soma > 0 ? "positivo" : "negativo"
    console.log(`O saldo final de sua conta foi ${positivoNegativo} no valor de R$ ${soma}`)
}
let numeros = [100, -20, -30, 10, -7, -21, -5]
saldoFinal(numeros)

///////////////////////////////////////////////////////////
//solução
let exibeSaldoFinal = lista => {
    let saldoFinal = 0
    for (item of lista)
        saldoFinal += item
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}.`)
}

/* TESTANDO A SOLUÇÃO */
let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaDepositosRetiradas)