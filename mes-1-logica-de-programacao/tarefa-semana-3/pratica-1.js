/// minha solução
function minhaTabuada (x,y) {
    let i = 1

    while (i <= y){
        console.log(`${x} X ${i} = ${x*i}`)
        i++
    }
}

minhaTabuada(9,10)
////////////////////////////////////////////////
let tabuada = n => {
    for (let i = 1; i <= 10; i++)
        console.log(`${i} x ${n} = ${i*n}`)
}

tabuada(9)