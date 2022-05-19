const nomes =   [`João Pinheiro`, `Juliana Castro`,
                 `Ana Lúcia Coelho`,`Caio Espinola`,
                 `Lara`,`Marjorie Estiano`,`Guilherme De Sá`,
                 `Aline Manzontti`,`Fabiana Juca`,
                 `André Ferezinni`,`Carlos Salgado`,
                `Paulo Brasil`,`Bia Silva`,
                `Vivian RaioLaiser`,`Isabela Nardone`,
                `Vinícius Juca`,`Renan Paixão`,
                `Renata Ingrata`,`Daisy Melo`,
                `Camilo Camelo`];

const salaUm  = nomes.splice(0,nomes.length/2);
const salaDois = nomes.splice(nomes.length/2);

salaUm.forEach(sala => {
    console.log(`Alunos da sala um : ${sala}`)
})

salaDois.forEach(s => {
    console.log(`Alunos da sala dois : ${s}`)
})