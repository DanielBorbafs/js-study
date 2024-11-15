// Função declarativa
function multiplicar(number) {
  number = 5;
  return console.log(number * number);
}
multiplicar();

// função anônima
const somar = function (numero) {
  return numero + numero;
};
console.log(somar(100));

// Arrow function
const soma = (a, b) => a + b;

// ...Rest
/* Suponha que queremos criar uma função que soma qualquer quantidade de números: */

function somarNumeros(...numeros) {
  return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

console.log(somarNumeros(1, 2, 3));

/* 
 Na função somar, usamos ...numeros como o parâmetro de descanso. 
 Isso significa que todos os argumentos passados para somar serão agrupados em um array chamado numeros.
 Depois, usamos o método reduce para somar os valores dentro do array numeros.
*/

// Expressão de função invocada (IIFE)
(function () {
  console.log('Função executada imediatamente');
})();

// Unindo funçoes com objetos
const pessoa = {
  nome: 'Ana',
  cumprimentar: function () {
    return `Olá, meu nome é ${this.nome}`;
  },
};

console.log(pessoa.cumprimentar());

/* recursäo: Recursão é uma técnica onde uma função chama a si mesma para resolver um problema. 
Esse conceito permite dividir problemas complexos em subproblemas menores e mais gerenciáveis
*/

function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // como se fosse 5 * 4 * 3 * 2 * 1

// O javascript também possui funçõe incorporadas como map, toFixed, push, toUpperCase etc...
