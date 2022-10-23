function pesquisarSerie(lista) {
    let seriesEncontradas = []
    let i = 0

    while (i < lista.length){
        if (lista[i].includes("Dexter")){
            seriesEncontradas.push(lista[i])
        }
        i++
    }
    return seriesEncontradas
}

const lista =  ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]



let seriesEncontradas = pesquisarSerie(lista)

console.log(seriesEncontradas)