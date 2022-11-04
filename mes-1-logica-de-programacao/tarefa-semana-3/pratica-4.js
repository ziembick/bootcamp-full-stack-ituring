///// minha solução
function exibirSeriados (seriados) {
    for (let [indice, valor] of seriados.entries() ){
        console.log(`[${indice}] ${valor}`)
    }
}

let seriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

exibirSeriados(seriados)
/////////////////////////////////////////////////////////

/* SOLUÇÃO */
let exibeLista = lista => {
    for (let i = 0; i < lista.length; i++)
        console.log(`[${i}] ${lista[i]}`)
}

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
exibeLista(listaSeriados)