const calcularDesconto = function (valor, desconto) {
    const valorFinal = valor*(1 - desconto/100)
    return valorFinal.toFixed(2)
}

const valorComDesconto = calcularDesconto(100, 10)

console.log(valorComDesconto)