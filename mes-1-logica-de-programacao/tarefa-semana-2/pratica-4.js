function calcularDesconto (valor, desconto) {
    const valorFinal = valor*(1 - desconto/100)
    return valorFinal.toFixed(2)
}

const valorDesconto = calcularDesconto(100, 10)

console.log(valorDesconto)