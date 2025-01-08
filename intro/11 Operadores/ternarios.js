// condition ? val_for_true : val_for_false

function Podedirigir(a) {
  if (a === '' || a === undefined) {
    console.log('Error, por favor digite um valor');
  } else {
    let permissao =
      a >= 18 ? 'Habilitado para dirigir' : 'Menor de idade, não pode dirigir!';
    console.log(permissao);
  }
}

Podedirigir(18);
