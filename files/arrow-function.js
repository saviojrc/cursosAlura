function apresentar(nome) {
    return `meu nome é : ${nome}`;
}

const apresentarArrowFunction = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2;

console.log(soma(2,2));
console.log(apresentarArrowFunction(`Savio`));

const somaNumeroPequenos= (num1,num2) => {
    if(num1 || num2 >10){
        return "somente números de 1 à 9 "

    }else{
        return num1 + num2;
    }
}

console.log(somaNumeroPequenos(12,12));