const lista =  ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const pesquisarSerie = (lista, termoDeBusca) => {
        return lista.filter((item) => {
            return item.includes(termoDeBusca)
    })

}

console.log(pesquisarSerie(lista,"Th"))
///////////////////////////////////////////////////////////////////////////////////////////////////////
const seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

const filtrados = seriados.filter((itens) => {
    return itens.includes("Th")
})

console.log(filtrados)
///////////////////////////////////////////////////
