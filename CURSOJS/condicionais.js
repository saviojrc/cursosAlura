escrever(`Sistema de passagens! Bem vindo!`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`

);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = false;

escrever("Bem vindo a compra de passagens ");

if (idadeComprador >= 18 || estaAcompanhada == true) {
    escrever("Venda efetuada com sucesso!");
    efetivarVenda(1, 1);
}else {
    escrever("Infelizmente a venda não pode ser efetivada "+"\n" +"Por favor verifique o motivo com o SAC.");
   
}

escrever("Sistema de embarque \n Verificando cartão de embarque....");

if(idadeComprador>=18 && temPassagemComprada){
    escrever("Boa viagem !! ");
}else {
    escrever("Você não pode embarcar ! \n"+ "Verifique o motivo com o SAC");
}


function efetivarVenda(x, y) {
    listaDeDestinos.splice(x, y);
}



function escrever(text) {
    console.log(`${text} \n\n`);
}

function exibirLista() {
    escrever(`Destinos Possíveis`);
    escrever(listaDeDestinos);
}

