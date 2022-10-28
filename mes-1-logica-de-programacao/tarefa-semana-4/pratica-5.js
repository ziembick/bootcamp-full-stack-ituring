const obterNumeros = (numeros) => {
    let numerosSort = numeros.sort((a,b) => a - b)
    return numerosSort
}

console.log(obterNumeros([4, 9, 7, 1, 8, 12]))
//////////////////////////////////////////////////////////
function ordenarNumeros(a, b) {
    if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
}

const numbers = [4, 9, 7, 1, 8, 12]

let numerosOrdenados = numbers.sort(ordenarNumeros)

console.log(numerosOrdenados)
////////////////////////////////////////////////////////
const numeros = [4, 9, 7, 1, 8, 12]
console.log(numeros.sort((a,b) => a - b))


