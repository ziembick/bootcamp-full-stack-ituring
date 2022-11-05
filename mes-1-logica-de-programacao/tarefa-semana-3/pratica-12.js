function geraGruposDe2(lista) {
    const qtdGrupos = Math.floor(lista.length/2);
    let grupos = [];

    for (let i=0; i <= qtdGrupos; i++) {
        const indiceInicio = i*2;
        const indiceFinal = i*2+2
        grupos.push(lista.slice(indiceInicio, indiceFinal))
    }

    if (lista.length % 2 != 0) {
        const indiceUltimoGrupo = grupos.length-1
        const indiceUltimaPessoa = lista.length-1
        grupos[indiceUltimoGrupo].push(lista[indiceUltimaPessoa]);
    }

    return grupos
}


let l = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]

console.table(geraGruposDe2(l))