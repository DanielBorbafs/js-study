const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');

async function buscaCep(cep) {
  const urlViaCep = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(urlViaCep);
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }

    const data = await response.json();

    if (!data.erro) {
      logradouroInput.value = data.logradouro || '';
      bairroInput.value = data.bairro || '';
      cidadeInput.value = data.localidade || '';
      estadoInput.value = data.uf || '';
    } else {
      alert('CEP não encontrado.');
      limpaCampos();
    }
  } catch (error) {
    console.error('Erro ao buscar o CEP:', error);
    alert('Erro ao buscar o CEP.');
    limpaCampos();
  }
}

function limpaCampos() {
  logradouroInput.value = '';
  bairroInput.value = '';
  cidadeInput.value = '';
  estadoInput.value = '';
}

cepInput.addEventListener('blur', () => {
  const cep = cepInput.value.replace(/\D/g, '');
  if (cep.length === 8) {
    buscaCep(cep);
  } else {
    alert('Digite um CEP válido com 8 dígitos numéricos.');
    limpaCampos();
  }
});
