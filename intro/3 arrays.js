// Arrays

let colecao = ['Civic', 'Astra', 'Fusca', 'Hilux'];
console.log(colecao);
colecao.push('Prisma', 'Subaru');
console.log(colecao);

colecao.pop();
console.log(colecao);

colecao.shift();
console.log(colecao);

colecao.unshift('Onix', 'New fiesta', 'Gol bolinha', 'Corsinha');
console.log(colecao);

// Interação em array
const frutas = ['maçã', 'banana', 'laranja'];

frutas.forEach((fruta) => {
  console.log(fruta);
});

// map(): Cria um novo array com os resultados da chamada de uma função em cada elemento do array original.
const numeros = [1, 2, 3, 4];
const quadrados = numeros.map((numero) => numero * numero);
console.log(quadrados); // [1, 4, 9, 16]

// filter(): Cria um novo array com todos os elementos que passam em um teste (condição) fornecido por uma função.
const numeross = [1, 2, 3, 4, 5];
const pares = numeross.filter((numero) => numero % 2 === 0);
console.log(pares); // [2, 4]

//reduce(): Executa uma função redutora em cada elemento do array, resultando em um único valor.
const numerosss = [1, 2, 3, 4];
const soma = numerosss.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 10
