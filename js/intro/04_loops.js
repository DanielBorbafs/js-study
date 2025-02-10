/*
Um loop em programação é uma estrutura que permite repetir um bloco de código várias vezes, até que uma condição específica seja atendida. 
Ele é usado para evitar a repetição manual de código, automatizando tarefas repetitivas.

O fluxo de controle do loop nos permite voltar a um mesmo ponto no programa onde estávamos anteriormente e repeti-lo no estado atual do programa. 
*/
var number = 0;

while (number <= 12) {
  console.log(number);
  number += 2;
}

/* 2 elevado a 10 potencia */
var resultado = 1;
var contador = 0;
while (contador < 10) {
  resultado *= 2;
  contador += 1;
}

console.log(resultado);

/* LOP FOR */
for (var number = 0; number <= 12; number += 2) console.log(number);
for (var contador = 0; contador < 10; contador += 1) resultado += 2;
console.log(resultado);

// QUEBRANDO LOOPS
/*Ter uma condição que produza um resultado  false  não é a única maneira que um loop pode parar. 
Existe uma declaração especial chamada  break  que tem o efeito de parar a execução e sair do loop em questão.
*/
for (var valor = 20; ; valor++) if (valor % 7 == 0) break;

console.log(valor);

/* SWITCHS */
let continuar = true;

while (continuar) {
  // Pergunta ao usuário
  let opcao = prompt('Escolha uma opção:\n1 - Olá\n2 - Como vai?\n3 - Sair');

  // Switch para tratar a opção escolhida
  switch (opcao) {
    case '1':
      console.log('Olá!');
      break;
    case '2':
      console.log('Como vai?');
      break;
    case '3':
      continuar = false; // Sai do loop
      console.log('Saindo...');
      break;
    default:
      console.log('Opção inválida! Tente novamente.');
  }
}
