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
