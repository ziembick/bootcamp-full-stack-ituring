function pesquisarSerie(lista, termoDeBusca) {
    let seriesEncontradas = []

    for (let i = 0; i <lista.length;i++){
        if  (lista[i].includes(termoDeBusca)){
            seriesEncontradas.push(lista[i])
        }
    }
    return seriesEncontradas
}

const lista =  ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const termoDeBusca = "Th"

let seriesEncontradas = pesquisarSerie(lista, termoDeBusca)

console.log(seriesEncontradas)