let listaFilmes = [{
  titulo: "Um Sonho de Liberdade",
  notaAvaliacao: 9.2,
  duracao: 142,
  anoPublicacao: 1994,
  categoria: "Drama"
},
{
  titulo: "Clube da Luta",
  notaAvaliacao: 8.7,
  duracao: 139,
  anoPublicacao: 1999,
  categoria: "Drama"
},
{
  titulo: "Toy Story 3",
  notaAvaliacao: 8.3,
  duracao: 103,
  anoPublicacao: 2010,
  categoria: "Animação"
}]


const obterNota = (listaFilmes) => {
  listaFilmes.filter(function(item){
    console.log(Math.max(item.notaAvaliacao))
  })
  
}
obterNota(listaFilmes)

let idade = [18, 42, 12, 15, 20];

console.log(Math.max(...idade))



/*const obterFilmes = (listaFilmes) => {
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
  
let listaExemplo2 = [1, 5, 2]
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

