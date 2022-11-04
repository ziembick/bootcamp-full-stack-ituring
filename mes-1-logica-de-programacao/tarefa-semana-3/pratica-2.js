//// minha solução
function exibirImparesde1a17 (n) {
    let i = 1

    while (i <= n ) {
        if ( i % 2 === 1){
            console.log(i)
        }
        i++
    }

    if (n < 0) {
        console.log("Número Inválido")
        return undefined
    }
}

exibirImparesde1a17(17)
/////////////////////////////////////////////// solução 
let imparesDe1AteN = n => {
    for (let i = 1; i <= n; i +=2)
        console.log(i)
}

imparesDe1AteN(17)


