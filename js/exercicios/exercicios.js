/*
01. Elaborar um programa que leia dois números e calcule a soma desses números

ENTRADA: ler dois números
PROCESSAMENTO: calcular a soma
SAÍDA: informar a soma
*/

let num1 = 32;
let num2 = 41;
let soma = num1 + num2;

console.log('A soma dos números é de:' + soma);

/*
02 - Elaborar um programa que leia o valor do jantar, calcule e informe
o valor da taxa do garçom (10%) 
*/

const taxaGarcom = 0.1;
let valorJantar = 100;
let valorDoGarcom = valorJantar * taxaGarcom;
let totalDoJantar = valorJantar + valorDoGarcom;

console.log(
  `O valor do jantar foi de R$ ${valorJantar.toFixed(
    2
  )} a parte do garçom foi de ${valorDoGarcom.toFixed(
    2
  )}, o total do jantar foi de ${totalDoJantar.toFixed(2)}`
);

/* 
3 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
Calcule e informe a duração da viagem em números e horas */

// 4 dias e 8 horas

let dias = 4;
let horas = 8;
const converteDiasEmHoras = dias * 24;
let tempoTotalDaViagem = horas + converteDiasEmHoras;

console.log(`A duração total da viagem foi de ${tempoTotalDaViagem} Horas.`);

/*
4 - Elaborar um programa que leia um número. Calcule e infomr os seus vizinhos
Ou seja, o anterior e posterior.
*/

let promptNumero = 100;
let numeroAnterior = promptNumero - 1;
let numeroPosterior = promptNumero + 1;

console.log(
  `o número digitado foi ${promptNumero}, o seu anterior é ${numeroAnterior}, o seu posterior é ${numeroPosterior}.  `
);

/*
5 - Elaborar um programa para uma pizzaria, onde é lido o valor da conta, quantos clientes vão pagar,
e informar o valor a ser pago por cada cliente.
*/

let valorDaConta = 100;
let quantidadeClientes = 6;

let valorPorCliente = valorDaConta / quantidadeClientes;
console.log(`A parte de cada cliente foi de R$ ${valorPorCliente.toFixed(2)}`);

/*
6 - Elaborar um programa para uma loja, o qual leia o preço de um produto e 
informe as opções de pagamento da loja. Calcule e informe o valor para pagamento á vista
com 10% de desconto e o valor em 3x
*/

let precoTotal = 120;
let descontoAvista = precoTotal * 0.1;
let precoaVista = 120 - descontoAvista;
let descontoParcelado = precoTotal / 3;

console.log(
  ` Preço Total R$: ${precoTotal}\n À vista R$: ${precoaVista}\n Ou 3x de R$: ${descontoParcelado}`
);

/*
 7 - Elaborar um programa que leia 2 notas de um aluno em uma disciplina, calcule e informe a média das notas
*/

let quantidadeNotas = 2;
let nota1 = 7;
let nota2 = 8;
let media = (nota1 + nota2) / quantidadeNotas;

console.log(`A média total das notas foi de ${media.toFixed(1)}`);
