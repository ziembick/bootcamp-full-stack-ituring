function pesquisarSerie(lista, termoDeBuscah) {
    let seriesEncontradas = []

    for (let i = 0; i <lista.length;i++){
        if  (lista[i].includes(termoDeBuscah)){
            seriesEncontradas.push(lista[i])
        }
    }
    return seriesEncontradas
}

const lista =  ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const termoDeBuscah = "Th"

let seriesEncontradas = pesquisarSerie(lista, termoDeBuscah)

console.log(seriesEncontradas)

///////////////////////////////////////////////////////////////////////////////////////////////////////
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const filtrados = seriados.filter(function(itens){
    return itens.includes("Th")
})

console.log(filtrados)
