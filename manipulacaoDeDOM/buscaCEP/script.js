const urlViaCep = 'https://viacep.com.br/ws/01001000/json/';

// por enquanto alteramos o campo de cep aqui
let cep = '29178675';
let UrlTransformada = `https://viacep.com.br/ws/${cep}/json/`;

async function buscaCep() {
  try {
    const response = await fetch(UrlTransformada);
    if (!response.ok) {
      throw new Error('Erro na requisição' + response.status);
    }
    const data = await response.json();

    const enderecoFormatado = {
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
      cep: data.cep,
    };
    enderecoFormatado.sucesso = 'Json obtido com sucesso';
    console.log('Endereco formatado:', enderecoFormatado);

    exibirEndereco(enderecoFormatado);
  } catch (error) {
    console.error('Error:', error);
  }
}

function exibirEndereco(Endereco) {
  console.log('Alerta:', Endereco.sucesso);
  // aqui podemos jogar na dom
}

buscaCep();
