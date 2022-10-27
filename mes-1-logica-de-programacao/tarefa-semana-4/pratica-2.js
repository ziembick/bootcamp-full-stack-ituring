let listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

function buscaSeriado(listaSeriados, seriado) {
    let indice = undefined;
    listaSeriados.forEach((listaSeriados, i) => {
      if (listaSeriados === seriado) {
        indice = i;
      }
    });
    return indice;
  }

console.log(buscaSeriado(listaSeriados,"Dexter"))
console.log(buscaSeriado(listaSeriados,"Friends"))
