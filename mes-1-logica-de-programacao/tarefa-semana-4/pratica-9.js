let listaFilmes = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
  },
  {
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
  },
  {
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
  }]

const obterFilmes = (listaFilmes) => {
    listaFilmes.filter(function(item){
        let maiorNumero = 0
        for (let i = 0; i < item.notaAvaliacao.lenght; i++) {
            let notas = item.notaAvaliacao[i]

            if (notas > maiorNumero){
                maiorNumero = notas
            }
        }
    })
}
  
  console.log(obterFilmes(listaFilmes))
  
  /*let listaExemplo2 = [1, 5, 2]
  let novaLista2 = listaExemplo.filter(function(item) {
      const ehImpar = item % 2 == 1
      return ehImpar
  })
  
  console.log(novaLista2)
  


let maiorNumero = 0

for (let i = 0; i < notaAvaliacao.length; i++) {
    let notas = notaAvaliacao[i]
    
    if (notas > maiorNumero){
        maiorNumero = notas;
    }
}*/

