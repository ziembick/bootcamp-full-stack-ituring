function exibirLista (lista) {
    for(let [indice, valor] of lista.entries()){
        console.log(`${indice} ${valor} `)
    }
}


let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

exibirLista(lista)