function numeroAleatorio () {
    const min = 0
    const max = 10000
    const numero = Math.random()*(max - min)
    return Math.floor(numero);
}

console.log(numeroAleatorio())