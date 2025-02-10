/*
 Condicional Executar declarações em ordem linear não é a única opção que temos. 
 Uma alternativa é a execução condicional, onde escolhemos entre duas rotas diferentes baseado em um valor booleano.

 A execução condicional é escrita, em JavaScript, com a palavra-chave  if . 
 No caso mais simples, nós queremos que algum código seja executado se, e somente se, uma certa condição existi
*/

var idade = 15;
let habilitado = true;

if (idade >= 18 && habilitado === true)
  console.log('Sim, você está habilitado para dirigir');
else console.log('Não pode dirigir');

/* Se tivermos mais que dois caminhos a escolher, múltiplos pares de  if / else  podem ser "encadeados".*/

habilitado = false;
let tirandoACarteira = true;

if (idade >= 18 && habilitado === true) console.log('Habilitado para dirigir');
else if (idade >= 18 && habilitado === false && tirandoACarteira === true)
  console.log(
    'Você ainda não está habilitado, mas está em processo. aguarde um pouco..'
  );
else console.log('Não pode dirigir');
