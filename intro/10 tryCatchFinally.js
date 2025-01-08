// No JavaScript, o try...catch...finally é uma estrutura para lidar com erros e exceções de forma segura

try {
  // Código que pode causar erro
  let result = riskyFunction();
} catch (error) {
  // Código executado se ocorrer um erro
  console.error('Ocorreu um erro:', error.message);
} finally {
  // Código executado sempre, com ou sem erro
  console.log('Finalizado.');
}

function acessarListaDeContatos() {
  try {
    // Tenta carregar a lista de contatos da internet
    let contatos = buscarContatosOnline();
    console.log('Lista de contatos carregada:', contatos);
  } catch (erro) {
    // Se algo der errado (ex: sem conexão), exibe uma mensagem amigável
    console.error(
      'Não foi possível carregar os contatos. Verifique sua conexão.'
    );
  } finally {
    // Sempre exibe uma mensagem final, independente de sucesso ou erro
    console.log('Processo de carregamento de contatos finalizado.');
  }
}

acessarListaDeContatos();
