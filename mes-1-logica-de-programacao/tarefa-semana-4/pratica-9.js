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


function classificar (listaFilmes) {
  listaFilmes.sort(function(a,b){
    return b.notaAvaliacao - a.notaAvaliacao
  })

  console.log(`O filme de melhor avaliação com nota ${listaFilmes[0].notaAvaliacao} é ${listaFilmes[0].titulo}`)
}

classificar(listaFilmes)

