function somar(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 2) {
            total += lista[i];
        } 
    }
    return total;
}
let lista = [100, -20, -30, 10, -7, -21, -5];
console.log(`O valor total depositado foi de R$: ${somar(lista)}`);

function somar2(lista2) {
    let total = 0;
    for (let i = 0; i < lista2.length; i++) {
        if (lista2[i] <= 0) {
            total += lista2[i];
        }
    }
    return total;
}
let lista2 = [100, -20, -30, 10, -7, -21, -5];
console.log(`O valor total retirado foi de R$:${somar2(lista2)}`);

//
let numeros = [100, -20, -30, 10, -7, -21, -5]

let soma = numeros.reduce(function(soma,i) {
    return  soma + i;
})

console.log(`O saldo final de sua conta foi positivo no valor de R$${soma}`)


