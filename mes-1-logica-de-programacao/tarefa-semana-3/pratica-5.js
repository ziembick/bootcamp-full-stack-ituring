// minha solução
function exibirSeriados (lista, termoDeBusca)  {
    let seriesEncontradas = []; 
    let i = 0;

    while (i < lista.length) {
        if (lista[i].includes(termoDeBusca)){ 
            seriesEncontradas.push(lista[i]) 
            return i 
        }
            i++; 

        } if (i != lista.length)
            return "undefined"

    }


    const lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
   

    console.log(exibirSeriados(lista, "Dexter"));
    console.log(exibirSeriados(lista, "Friends"));
    
////////////////////////////////
/*/* SOLUÇÃO 1 */
let procuraItemEmListaS1 = (lista, valor) => {
    for (var i = 0; i < lista.length; i++)
        if (lista[i] === valor)
            return i
    return undefined
}

/* TESTANDO AS SOLUÇÕES */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(procuraItemEmListaS1(listaSeriados, "Game of Thrones"))
console.log(procuraItemEmListaS1(listaSeriados, "Friends"))

