let l = [
    {
      valor: 100.00,
      movimentacao: "deposito",
      dataMovimentacao: "2021-08-02T07:46:36.611Z"
    },
    {
      valor: 20.00,
      movimentacao: "retirada",
      dataMovimentacao: "2021-09-17T09:46:36.611Z"
    },
    {
      valor: 30.00,
      movimentacao: "retirada",
      dataMovimentacao: "2022-02-24T09:46:36.611Z"
    },
    {
      valor: 10.00,
      movimentacao: "deposito",
      dataMovimentacao: "2022-03-02T09:46:36.611Z"
    },
    {
      valor: 7.00,
      movimentacao: "retirada",
      dataMovimentacao: "2022-04-20T09:46:36.611Z"
    },
    {
      valor: 21.00,
      movimentacao: "retirada",
      dataMovimentacao: "2022-03-20T09:46:36.611Z"
    },
    {
      valor: 5.00,
      movimentacao: "retirada",
      dataMovimentacao: "2022-06-08T09:46:36.611Z"
    }
  ]
  
  
  
  const saldoLista = (lista) => {
    let saldoFinal = 0;
    let totalDeposito = 0;
    let totalRetirada = 0;
    let qtdDepositos = 0;
    let qtdRetiradas = 0;

 
    lista.forEach((item) => {
      if (item.movimentacao === "deposito") {
        totalDeposito += item.valor;
        qtdDepositos++;
      } else if (item.movimentacao === "retirada") {
        totalRetirada -= item.valor;
        qtdRetiradas++;
      }
    })
 
  saldoFinal = totalDeposito + totalRetirada
 
   let positivoOuNegativo = "negativo"
   if (saldoFinal >= 0)
     positivoOuNegativo = "positivo"
 
   saldoFinal = Math.abs(saldoFinal)
   
   console.log(`Total de depósitos: ${qtdDepositos}`)
   console.log(`Total de retiradas: ${qtdRetiradas}`)
   console.log(`O valor total depositado foi de: R$ ${totalDeposito}`)
   console.log(`O valor total retirado foi de: R$ ${totalDeposito - saldoFinal}`)
   console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${saldoFinal}.`)
 }
  
  saldoLista(l)

  ////////////////////////////////////////
  /*  lista.forEach(function(item){
        if (item.movimentacao === "deposito")
            qtdDepositos += 1
        if (item.movimentacao === "retirada")
            qtdRetiradas += 1
        if (item.movimentacao === "deposito")
            totalDeposito += item.valor
        if (item.movimentacao === "retirada")
            totalRetirada += item.valor
        if (item.movimentacao === "deposito")
            saldoFinal += item.valor
        else if (item.movimentacao === "retirada")
            saldoFinal -= item.valor
        
    })*/

    /*  lista.forEach(function(item){
      if (item.movimentacao === "deposito")
       totalDeposito += item.valor
     else totalRetirada -= item.valor
      if (item.movimentacao === "retirada")
        qtdRetiradas += 1
      else qtdDepositos += 1
       
   });*/