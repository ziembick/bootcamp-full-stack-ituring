////////////////////////////////////////////////////
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

