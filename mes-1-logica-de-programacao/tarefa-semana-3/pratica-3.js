let numerosPrimos = n => {
    if (n == 2 || n == 3)
        return true
    if (n % 2 == 0 || n % 3 == 0)
        return false

    let divisivel = (n, i) => n % i == 0 || n % (i + 2) == 0
    for (var i = 5; i <= Math.sqrt(n) && !divisivel(n, i); i += 6);
    return !divisivel(n, i) || i > Math.sqrt(n)
}


console.log(numerosPrimos(17))
console.log(numerosPrimos(2))
console.log(numerosPrimos(7))
console.log(numerosPrimos(8))
console.log(numerosPrimos(5))
console.log(numerosPrimos(23))
console.log(numerosPrimos(15))
console.log(numerosPrimos(1500450271))
    