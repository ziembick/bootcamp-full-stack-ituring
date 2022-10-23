function pesquisarSerie(lista) {
    let seriesEncontradas = lista[0]

    for (let i = 0; i <lista.length;i++){
        if  (lista[i]){
            return seriesEncontradas
        }
    }
    
}

const lista =  ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]



let seriesEncontradas = pesquisarSerie(lista)

console.log(seriesEncontradas)