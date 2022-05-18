const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
const textoUm = "Olá mundo!";
const textoDois ='Ola mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros ="34567";
const citacao = `Meu nome é : `;
const nome = "Sávio";


console.log(`${citacao} ${nome}`);