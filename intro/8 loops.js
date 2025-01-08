/* LOOPS */

for (i = 0; i < 2; i++) {
  console.log(`sou o número ${i}`);
}

// for
const vendasDiarias = [700, 600, 700, 600, 110, 250, 780];
let totalSemanal = 0;

for (let i = 0; i < vendasDiarias.length; i++) {
  totalSemanal += vendasDiarias[i];
  /*
  Durante cada iteração do loop, estamos adicionando o valor atual de vendasDiarias[i] à variável totalSemanal. 
  O operador += é uma forma abreviada de escrever totalSemanal = totalSemanal + vendasDiarias[i]. Assim, em cada iteração,
  o valor da venda diária correspondente é somado ao total.
*/
}
console.log(`O total de vendas da semana foi de ${totalSemanal}`);

// While
/*
O while loop é uma estrutura de controle em JavaScript que permite executar um bloco de código repetidamente
enquanto uma condição especificada for verdadeira. Ele é especialmente útil quando o número de iterações não é conhecido previamente
e depende de uma condição que pode mudar durante a execução do loop
*/

let estoque = 5;
const limite = 10;
while (estoque < limite) {
  console.log(`estoque atual ${estoque}. Precisamos reabastecer!`);
  estoque++;
}
console.log(`estoque reabastecido para: ${estoque}`);

//do while
/*
O código é sempre executado pelo menos uma vez, pois a condição é verificada após a execução do código.*/
/*let numero;
do {
  numero = parseInt(prompt('Digite um número positivo:'));
} while (numero <= 0);
console.log(`Você digitou o número positivo: ${numero}`);
*/

// for...of
// O loop for...of é usado para iterar sobre elementos de objetos iteráveis, como arrays, strings, e outras coleções.

const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numero of numeros) {
  console.log(numero);
}

// for... in
// O loop for...in é usado para iterar sobre as chaves (ou propriedades) de um objeto.
const pessoa = {
  nome: 'Alice',
  idade: 30,
  cidade: 'São Paulo',
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
    // Interrompe o loop quando `i` é igual a 5
  }
  console.log(i);
}

// continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
    // Pula o código abaixo para números pares
  }
  console.log(i);
}
