function obterNumerosPrimos (n) {
    let i = 2
    
    while(i <= n) {
        if (n % i === 0) {
            return false;
        }
        i++
    }

    return true;
}

obterNumerosPrimos(17)
obterNumerosPrimos(2)
obterNumerosPrimos(7)
obterNumerosPrimos(8)
obterNumerosPrimos(5)
obterNumerosPrimos(23)
obterNumerosPrimos(15)
obterNumerosPrimos(1500450271)

console.log(obterNumerosPrimos(17))
console.log(obterNumerosPrimos(2))
console.log(obterNumerosPrimos(7))
console.log(obterNumerosPrimos(8))
console.log(obterNumerosPrimos(5))
console.log(obterNumerosPrimos(23))
console.log(obterNumerosPrimos(15))
console.log(obterNumerosPrimos(1500450271))