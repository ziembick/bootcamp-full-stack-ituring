function parImpar (numero) {
    const parOuImpar = numero % 2 == 0;

    if (parOuImpar) {
        console.log(`O número ${numero} é par.`)
    } else {
        console.log(`O número ${numero} é ímpar.`)
    }
}

parImpar(11)
parImpar(8)




