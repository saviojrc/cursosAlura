const nome = "Sara";
const idade = anoAtual() - 1988;
const cidadeNascimento = "Fortaleza";
const apresentacao = `Meu nome é  ${nome} , minha idade é : ${idade}  e nasci na cidade de  ${cidadeNascimento}`; 


console.log(apresentacao);



function anoAtual(){
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    return year;
}