/*
01. Elaborar um programa que leia dois números e calcule a soma desses números

ENTRADA: ler dois números
PROCESSAMENTO: calcular a soma
SAÍDA: informar a soma
*/

let num1 = 32;
let num2 = 41;
let soma = num1 + num2;

console.log('A soma dos números é de: ' + soma);

/*
02 - Elaborar um programa que leia o valor do jantar, calcule e informe
o valor da taxa do garçom (10%) 
*/

const taxaGarcom = 0.1;
let valorJantar = 100;
let valorDoGarcom = valorJantar * taxaGarcom;
let totalDoJantar = valorJantar + valorDoGarcom;

console.log(
  `O valor do jantar foi de R$ ${
    valorJantar + ',00'
  } a parte do garçom foi de ${
    valorDoGarcom + ',00'
  }, o total do jantar foi de ${totalDoJantar + ',00'}`
);
