let numeros = [100, -20, -30, 10, -7, -21, -5]

let soma = numeros.reduce(function(soma,i) {
    return  soma + i;
})

console.log(`O saldo final de sua conta foi positivo no valor de R$${soma}`)