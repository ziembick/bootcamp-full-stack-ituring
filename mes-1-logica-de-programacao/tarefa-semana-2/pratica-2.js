function nomeComprador (nome) {
    console.log("Olá," + nome)
}

nomeComprador("Paulo")

function entregaProduto (produto, endereco, recebimento) {
    
    console.log(`Fizemos a entrega do ${produto} no ${endereco} com sucesso! \nO seu produto foi recebido por: ${recebimento}. \nEsperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
}

entregaProduto("iPhone", "Av. Damasceno Vieira, 1080", "Paulo")
