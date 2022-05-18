console.log(`Trabalhando com listas`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Fortaleza`
    
);

listaDeDestinos.push(`Curitiba`);

listaDeDestinos.splice(1,1);


console.log(`Destinos Possíveis`);
console.log(listaDeDestinos);

console.log(`Destinos Possíveis`);
console.log(listaDeDestinos[1]);

console.log(`Destinos Possíveis`);
console.log(listaDeDestinos[1],listaDeDestinos[2]);