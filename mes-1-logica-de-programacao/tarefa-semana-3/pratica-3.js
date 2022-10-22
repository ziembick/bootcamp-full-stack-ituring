function obterNumerosPrimos (n) {
    let i = 2
    
    while(i <= n) {
        if (n % n === 1) {
            return false;
        }
        i++
    }

    return true;
}


console.log(obterNumerosPrimos(17))
console.log(obterNumerosPrimos(2))
console.log(obterNumerosPrimos(7))
console.log(obterNumerosPrimos(8))
console.log(obterNumerosPrimos(5))
console.log(obterNumerosPrimos(23))
console.log(obterNumerosPrimos(15))
console.log(obterNumerosPrimos(1500450271))