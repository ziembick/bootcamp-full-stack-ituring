const calcularImc = (peso, altura) => peso / (altura * altura)

function classificarImc(imc) {
    if (imc < 18.5) 
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}   

function checarImc (peso, altura) {
    const imc = calcularImc (peso, altura)
    console.log(classificarImc(imc))
}

checarImc(70, 1.70)