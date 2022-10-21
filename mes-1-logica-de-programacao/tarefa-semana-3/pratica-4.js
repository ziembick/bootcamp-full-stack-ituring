function exibirSeriados (seriados) {
    for (let [indice, valor] of seriados.entries() ){
        console.log(`[${indice}] ${valor}`)
    }
}

let seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

exibirSeriados(seriados)