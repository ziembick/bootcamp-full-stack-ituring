function obterImc (imc) {
    const peso = 90
    const altura = 1.83
    imc = peso / (altura * altura)

    if (imc < 18.5) {
        console.log("Abaixo do Peso")
    } else if (imc >= 18.5 && imc <= 25) {
        console.log("Peso Normal")
    } else if (imc >= 25 && imc <= 30) {
        console.log("Sobrepreso") 
    } else if (imc > 30) {
        console.log("Obesidade")
    } 
    console.log(imc)
}

obterImc()