let l = {
  restaurante: "Turing Gourmet",
  tipo: "Comida britânica",
  avaliacoes: [
    {
      cliente: "Thais S.",
      nota: 9.8
    },
    {
      cliente: "Thales Gonçalves",
      nota: 8.9
    },
    {
      cliente: "José Lopes",
      nota: 9.9
    },
    {
      cliente: "Cristina Souza",
      nota: 9.3
    },
    {
      cliente: "Leo Garcia",
      nota: 8.5
    }
  ]
}

let mediaNota = function (notas)  {
  let soma = 0;
  let i = 0;
    notas.avaliacoes.forEach(function(item) {
      soma += item.nota;
    })

  media = soma / notas.avaliacoes.length;
  console.log(`A média de avaliações do restaurante ${l.restaurante} foi de ${media.toFixed(2)}`);

}

mediaNota(l);