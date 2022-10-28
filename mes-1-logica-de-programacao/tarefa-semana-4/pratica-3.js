const pesquisarSerie = (lista, termoDeBusca) => {
    const novaLista = lista.filter((item) => {
        return item.includes(termoDeBusca)
    })

    return novaLista
}

const lista =  ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const termoDeBusca = "Th"

let seriesEncontradas = pesquisarSerie(lista, termoDeBusca)

console.log(seriesEncontradas)

///////////////////////////////////////////////////////////////////////////////////////////////////////
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const filtrados = seriados.filter((itens) => {
    return itens.includes("Th")
})

console.log(filtrados)
