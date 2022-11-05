///// minha solução
let votosCopa = (lista) => {
    let brasil = 0
    let argentina = 0
    let espanha = 0
    let portugal = 0

    for (item of lista) {
        if (item === 1) {
            brasil = brasil += 1
        }
        if (item === 4) {
            argentina = argentina += 1
        }
        if (item === 3){
            espanha = espanha += 1
        }
        if( item === 2) {
            portugal  = portugal += 1
        }
    }

let preferido = preferidoGanharCopa(brasil, argentina, espanha, portugal)

    
console.log(`Brasil: ${brasil} voto(s)`)
console.log(`Argentina: ${argentina} voto(s)`)
console.log(`Espanha: ${espanha} voto(s)`)
console.log(`Portugal: ${portugal} voto(s)`)

console.log(`Resultado: \n${preferido} é o preferido para ganhar a copa do mundo!`)
}

let preferidoGanharCopa = (brasil, argentina, espanha, portugal) => {
    if (brasil >= argentina && brasil >= espanha && brasil >= portugal)
        return "Brasil"
    else if (argentina >= espanha && argentina >= portugal)
        return "Argentina"
    else if (espanha >= portugal)
        return "Espanha"
    else
        return "Portugal"
}


votosCopa([1, 1, 1, 4, 4, 2, 3, 2])
///////////////////////////////////////////////////////


/* SOLUÇÃO */
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

/* TESTANDO A SOLUÇÃO */
let listaVotos = [1, 1, 1, 4, 4, 2, 3, 2]
exibePreferidoDaCopa(listaVotos)
