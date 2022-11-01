/*let votosCopa = (brasil, espanha, portugal, argentina) => {
    if(brasil >= argentina && brasil >= espanha && brasil >= portugal)
        return "Brasil"
    else if (argentina >= espanha && argentina >= portugal)
        return "Argentina"
    else if (espanha >= portugal)
        return "Espanha"
    else 
        return "Portugal"
}*/

let verificaPreferidoDaCopa = (votosBrasil, votosArgentina, votosEspanha, votosPortugal) => {
    if (votosBrasil >= votosArgentina && votosBrasil >= votosEspanha && votosBrasil >= votosPortugal)
        return "Brasil"
    else if (votosArgentina >= votosEspanha && votosArgentina >= votosPortugal)
        return "Argentina"
    else if (votosEspanha >= votosPortugal)
        return "Espanha"
    else
        return "Portugal"
}

let exibePreferidoDaCopa = listaVotos => {
    let votosBrasil = 0
    let votosArgentina = 0
    let votosEspanha = 0
    let votosPortugal = 0

    for (voto of listaVotos) {
        votosBrasil += voto === 1 ? 1 : 0
        votosArgentina += voto === 2 ? 1 : 0
        votosEspanha += voto === 3 ? 1 : 0
        votosPortugal += voto === 4 ? 1 : 0
    }
    
    var preferido = verificaPreferidoDaCopa(votosBrasil, votosArgentina, votosEspanha, votosPortugal)

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgentina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugal} voto(s)\n`)

    console.log("Resultado:")
    console.log(`${preferido} é o preferido para ganhar a Copa do Mundo!`)
}

let listaVotos = [1, 1, 1, 4, 4, 2, 3, 2]
exibePreferidoDaCopa(listaVotos)

