

function geraGruposDe2(lista) {
    const qtdGrupos = Math.floor(lista.length/2);
    let grupos = [];

    for (let i=0; i<qtdGrupos; i++) {
        grupos.push(lista.slice(i*2, i*2+2))
    }

    return grupos
}


let l = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]

geraGruposDe2(l)