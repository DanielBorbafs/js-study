/*  Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano.
    Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda.
   Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal).
*/

let numChinchilas = 8;
let numAno = 5;

if (numChinchilas < 2) {
  console.log('Por favor digite um número correto');
}

let i = 0;
let calculo = 0;
while (i <= numAno) {
  calculo = numChinchilas * 3;
  console.log(calculo);
  i++;
}

// Função que multiplica um número por ele mesmo até atingir um valor específico
function multiplyUntilLimit(startNumber, multiplier, limit) {
  let current = startNumber;

  while (current <= limit) {
    console.log(current); // Mostra o valor atual
    current *= multiplier; // Multiplica pelo valor definido
  }
}

// Exemplo de uso: começa com 3, multiplica por 3 até atingir ou ultrapassar 1000
multiplyUntilLimit(3, 3, 1000);

function calculoChinchila(qtdChinchila, qtdAno) {
  let quantiaChinchila = qtdChinchila;

  let i = 0;
  let fator = 3;
  while (i < qtdAno) {
    console.log(quantiaChinchila);
    quantiaChinchila *= fator;
    i++;
  }
}

calculoChinchila(8, 5);
