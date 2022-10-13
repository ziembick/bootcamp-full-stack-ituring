function calculaDesconto (valor, desconto) {
    const valorFinal = valor*(1 - desconto/100)
    return valorFinal = valorFinal.toFixed(2)
}

const valorComDesconto = calculaDesconto(100, 50)

console.log(valorComDesconto)