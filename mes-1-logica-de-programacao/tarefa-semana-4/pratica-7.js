const obterChaves = (f) => {
    console.log(Object.keys(f))
}

let f = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
}

obterChaves(f)
///////////////////////////////////////////////////////////////

const hasPaid = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
}

console.log(Object.keys(hasPaid))