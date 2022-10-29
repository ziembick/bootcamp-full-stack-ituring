const informacoesFilme = (filme) => {
    console.log(`O filme ${filme.titulo} que estreou em ${filme.anoPublicacao} tem avaliação ${filme.notaAvaliacao} pelo IMDb.`)
}

let f = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "Drama"
}

informacoesFilme(f)





