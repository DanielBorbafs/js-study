function validarCamposVazios() {
    let nome = document.getElementById('primeiro_nome').value
    let sobreNome = document.getElementById('segundo_nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('password').value
    let senhaConfirm = document.getElementById('password').value

    if (nome == '' && sobreNome == '' && email == '' && senha == '' && senhaConfirm == '') {
        alert('Por favor preencha todos os campo')

    }
    console.log(senhaConfirm)
    console.log(senha)
}

btnRegister = document.getElementById('btnRegister')
btnRegister.addEventListener('click', validarCamposVazios)