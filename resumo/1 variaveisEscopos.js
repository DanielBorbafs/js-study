var nome = 'Daniel';

let salario = 5220;

const profissao = 'Analista de Dados';

// TIPOS DE DADOS:  STRING, UNDEFINED, BIGINT, NULL, BOOLEAN, NUMBER.

var escopoGlobal = 25;

function escopoFuncao() {
  const numero = 6;
  console.log('Escopo de funcao');
  if (numero <= 5) {
    console.log('Escopo de bloco');
  } else {
    console.log('Teste');
  }
}

escopoFuncao();
