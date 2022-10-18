function obterImc(peso, altura){
    const imc = peso / (altura * altura)
    let classificarImc

    if (imc < 18.5) {
        classificarImc = "Abaixo do Peso"
    } else if (imc < 25) {
        classificarImc = "Peso Normal"
    } else if (imc < 30) {
        classificarImc = "Sobrepeso"
    } else {
        classificarImc = "Obesidade"
    }
    return classificarImc
}

console.log(obterImc(70,1.70))

function obterImc2 (peso, altura) {
    const imc = peso / (altura * altura)

    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}

console.log(obterImc2(70, 1.80))