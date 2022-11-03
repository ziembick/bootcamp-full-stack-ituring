let lista = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }



const obterMedia = (media) => {
    media.forEach(function(item){
        
    })
}

//////////////////////////////////////////////////////
 const notasAlunos = [
    
    { cliente: "Thais S", nota: 9.8 },
    { cliente: "Thales Gonçalves",  nota: 8.9 },
    { cliente: "José Lopes", nota: 9.9 },
    { cliente: "Cristina Souza",  nota: 9.3 },
    { cliente:"Leo Garcia", nota: 8.5 } 
   ]
   
   const acum = [];
   
   notasAlunos.forEach(aluno => {
     const match = acum.find(media => media.cliente === aluno.cliente);
     if (match) {
       match.soma += aluno.nota
       match.notas++;
     } else {
       aluno.soma = aluno.nota
       aluno.notas = 1;
       acum.push(aluno)
     }
   });
   
   const medias = [].map.call(acum, i => ({cliente: i.cliente, media: i.soma / i.notas}))
   
   console.log(medias)