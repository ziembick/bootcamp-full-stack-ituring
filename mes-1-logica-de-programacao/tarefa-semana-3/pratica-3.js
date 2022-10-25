let ehPrimoSolucao4 = n => {
    // verifica se n é 2 ou 3. Se for, é primo.
    if (n == 2 || n == 3)
        return true

    // verifica se o resto de n com 2 ou 3 é zero. Se for, não é primo.
    if (n % 2 == 0 || n % 3 == 0)
        return false

    // função que calcula se n é divisível por i ou por i + 2. Se for, não é primo.
    let ehDivisivel = (n, i) => n % i == 0 || n % (i + 2) == 0

    // verifica se n é divisível por algum número de 5 à raiz quadrada de n, incrementando i de 6 em 6. Se for, não é primo.
    for (var i = 5; i <= Math.sqrt(n) && !ehDivisivel(n, i); i += 6);

    return !ehDivisivel(n, i) || i > Math.sqrt(n)
}


console.log(ehPrimoSolucao4(17))
console.log(ehPrimoSolucao4(2))
console.log(ehPrimoSolucao4(7))
console.log(ehPrimoSolucao4(8))
console.log(ehPrimoSolucao4(5))
console.log(ehPrimoSolucao4(23))
console.log(ehPrimoSolucao4(15))
console.log(ehPrimoSolucao4(1500450271))
    