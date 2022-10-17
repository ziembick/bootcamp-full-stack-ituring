function obterCores (cores) {
    switch (cores) {
        case "Vermelha":
            console.log("rgb(255,0,0)");
            break
        case "Laranja":
            console.log("rgb(255,128,0)");
            break
        case "Amarela":
            console.log("rgb(255,255,0)");
            break
        case "Verde":
            console.log("rgb(0,255,0)");
            break
        case "Azul Claro":
            console.log("rgb(0,255,255)");
            break
        case "Azul Marinho":
            console.log("rgb(0,0,255)");
            break
        case "Rosa":
            console.log("rgb(255,0,255)");
            break
        default:
            console.log("rgb(255,255,255)")
    }
}

obterCores("Vermelha")
obterCores("Laranja")
obterCores("Amarela")
obterCores("Verde")
obterCores("Azul Claro")
obterCores("Azul Marinho")
obterCores("Rosa")
obterCores("Teste")