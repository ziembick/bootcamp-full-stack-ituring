function exibirNumeroPrimos (n) {
    let i = 1

    while (i <= n ) {
        if ( i % 1 === 0){
            return
        } else if (i % n === 0) {
            return
        } else {
            return
        }
        i++
        return exibirNumeroPrimos
    }

    if (n < 0) {
        console.log("Número Inválido")
        return undefined
    }
}

exibirNumeroPrimos(17)
exibirNumeroPrimos(2)
exibirNumeroPrimos(7)
exibirNumeroPrimos(8)
exibirNumeroPrimos(5)
exibirNumeroPrimos(23)
exibirNumeroPrimos(15)
exibirNumeroPrimos(1500450271)

