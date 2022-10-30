/*solução*/
const obterRaizQuadradaCurta = (numbers) => {
    return numbers.map(item => (Math.sqrt(item)))
}

console.log(obterRaizQuadradaCurta([4, 9, 16, 25, 36, 49]))

//////////////////////////////////////////////////
const obterRaizQuadrada = (numbers) => {
    let listaAoQuadrado = numbers.map(function(item){
        return Math.sqrt(item)
    })
    return listaAoQuadrado
}

console.log(obterRaizQuadrada([4, 9, 16, 25, 36, 49]))
/////////////////////////////////////////////////////////////
let numbers = [4, 9, 16, 25, 36, 49];

let listaRaizQuadrada = numbers.map(item => (Math.sqrt(item)))

console.log(listaRaizQuadrada)




