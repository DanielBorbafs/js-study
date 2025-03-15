function validarCamposVazios() {
  let nome = document.getElementById('primeiro_nome').value;
  let sobreNome = document.getElementById('segundo_nome').value;
  let email = document.getElementById('email').value;
  let senha = document.getElementById('password').value;
  let senhaConfirm = document.getElementById('password-confirm').value;

  if (
    nome == '' ||
    sobreNome == '' ||
    email == '' ||
    senha == '' ||
    senhaConfirm == ''
  ) {
    alert('Por favor preencha todos os campo');
    return;
  }
}

function validarSenhas() {
  event.preventDefault(); // Evita o envio automático do formulário

  let senha = document.getElementById('password').value;
  let senhaConfirm = document.getElementById('password-confirm').value;
  let letraMaiuscula = /[A-Z]/;
  let simbolos = /[!@#$%^&*()_+\-=\[\]{}|:;"'<>,.?\/\\]/;
  let numeros = /[0-9]/;

  validarCamposVazios();
  if (senha.length < 8 || senhaConfirm.length < 8) {
    alert('a senha precisa ter ao menos 8 digitos');
    return;
  }

  if (!letraMaiuscula.test(senha)) {
    alert('Precisa de ao menos uma letra maisucula');
    return;
  }

  if (!simbolos.test(senha)) {
    alert('Precisa ter um simbolo');
    return;
  }

  if (!numeros.test(senha)) {
    alert('precisa ter um numero');
    return;
  }
  window.location.href = 'test.html';
}

document.getElementById('btnRegister').addEventListener('click', validarSenhas);
