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
   
    const termoDeBusca = "Dexter";

    console.log(exibirSeriados(lista, termoDeBusca));