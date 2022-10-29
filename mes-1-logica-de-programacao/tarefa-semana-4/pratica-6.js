const informacoesFilme = (f) => {
    console.log(`O filme ${f.titulo} que estreou em ${f.anoPublicacao} tem avaliação ${f.notaAvaliacao} pelo IMDb.`)
}

let f = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    categoria: "Drama"
}

informacoesFilme(f)





