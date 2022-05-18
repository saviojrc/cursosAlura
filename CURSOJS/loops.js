escrever(`Sistema de passagens! Bem vindo!`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`

);


const destino="Fortaleza";
const idadeComprador =17;
const estaAcompanhado = false;
const podeComprar = idadeComprador>=18 || estaAcompanhado ==true;
let contador = 0;
const tamanhoLista = listaDeDestinos.length;
let destinoExiste = false;




escrever("Bem vindo a compra de passagens ");




while(contador<tamanhoLista){
    let objDestino = listaDeDestinos[contador]
  
    if(objDestino==destino){
        
        destinoExiste=true;
        break;
     }
  
    contador++;
   
}




escrever(`Destino ${destino} que foi selecionado existe : ${destinoExiste}`);

if(podeComprar && destinoExiste){
    escrever("Boa viagem!");
}else{
    escrever("Desculpe , tivemos um erro!");
}




function escrever(text) {
    console.log(`${text} \n\n`);
}


