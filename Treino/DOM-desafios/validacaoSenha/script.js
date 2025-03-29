function exibirErro(idCampo, mensagem) {
  const elementoErro = document.getElementById(idCampo);
  elementoErro.textContent = mensagem;
  elementoErro.style.display = 'block'; // Exibe a mensagem de erro
}

function limparErros() {
  const erros = document.querySelectorAll('.form__error__message');
  erros.forEach(erro => {
    erro.textContent = '';
    erro.style.display = 'none'; // Oculta a mensagem de erro
  });
}

function validarCamposVazios() {
  const campos = [
    { id: 'primeiro_nome', erroId: 'erroNome', nome: 'Primeiro Nome' },
    { id: 'segundo_nome', erroId: 'erroSobrenome', nome: 'Segundo Nome' },
    { id: 'email', erroId: 'erroEmail', nome: 'E-mail' },
    { id: 'password', erroId: 'erroSenha', nome: 'Senha' },
    { id: 'password-confirm', erroId: 'erroConfirmSenha', nome: 'Confirmação de Senha' },
  ];

  let valido = true;
  campos.forEach(campo => {
    const valor = document.getElementById(campo.id).value.trim();
    if (valor === '') {
      exibirErro(campo.erroId, `preencha o campo: ${campo.nome}`);
      valido = false;
    }
  });
  return valido;
}

function validarSenha(senha) {
  const letraMaiuscula = /[A-Z]/;
  const simbolos = /[!@#$%^&*()_+\-=\[\]{}|:;"'<>,.?\/\\]/;
  const numeros = /[0-9]/;

  if (senha.length < 8) {
    exibirErro('erroSenha', 'A senha precisa ter ao menos 8 dígitos.');
    return false;
  }
  if (!letraMaiuscula.test(senha)) {
    exibirErro('erroSenha', 'A senha precisa ter ao menos uma letra maiúscula.');
    return false;
  }
  if (!simbolos.test(senha)) {
    exibirErro('erroSenha', 'A senha precisa ter ao menos um símbolo.');
    return false;
  }
  if (!numeros.test(senha)) {
    exibirErro('erroSenha', 'A senha precisa ter ao menos um número.');
    return false;
  }
  return true;
}

function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    exibirErro('erroEmail', 'Por favor, insira um e-mail válido.');
    return false;
  }
  return true;
}

function validarFormulario(event) {
  event.preventDefault(); // Impede o envio do formulário
  limparErros(); // Limpa todas as mensagens de erro anteriores

  // Valida campos vazios
  if (!validarCamposVazios()) {
    return;
  }
  
  const nome = document.getElementById('primeiro_nome').value.trim();
  const sobrenome = document.getElementById('segundo_nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('password').value.trim();
  const senhaConfirm = document.getElementById('password-confirm').value.trim();

  // Valida e-mail
  if (!validarEmail(email)) {
    return;
  }

  // Valida senha
  if (!validarSenha(senha)) {
    return;
  }

  // Confirma se as senhas coincidem
  if (senha !== senhaConfirm) {
    exibirErro('erroConfirmSenha', 'As senhas não coincidem.');
    return;
  }

  // Cria um objeto para armazenar daados do usuário
  const usuario = {
    nome, 
    sobrenome, 
    email, 
    senha // Em um cenário real deve ser criptografada
  };

  // armazenando no localStorage
  localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario))

  // Se tudo estiver válido, redireciona ou envia o formulário
  alert('registro feito.');
  window.location.href = 'test.html';
}


// Adiciona o evento de submit ao formulário
document.querySelector('form').addEventListener('submit', validarFormulario);

