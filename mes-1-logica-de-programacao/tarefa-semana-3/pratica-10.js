function quantidadeDeMesesComPerda(umPeriodo) {
    let total = 0;
    for (let i = 0, l = umPeriodo.length; i < l; i++) {
      if (umPeriodo[i] === 1) total++; 
    }
    return total;
  }
  
  const test = quantidadeDeMesesComPerda([1, 1, 1, 4, 4, 2, 3, 2]);
  console.log(`Brasil: ${test} votos`);
