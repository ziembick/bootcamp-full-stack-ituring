//não sei como fazer pra funcionar pra passar números iguais e exibir qualquer um dos numeros

function obterNumero (numero){
    const numero1 = 10
    const numero2 = 20
    
    if(numero == numero1) {
        console.log(numero2)
    } else if (numero == numero2) {
        console.log(numero2)
    } else if (numero == numero1 && numero == numero2) {
        console.log(numero1 || numero2)
    } 
}

obterNumero(10)
obterNumero(20)


