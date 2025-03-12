var idades = [12, 16, 15, 17, 14];

var maiores = 0;

for (var i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    console.log(idades[i]);
    maiores = 1;
  }
}

if (!maiores) {
  console.log('Não possui maiores de idades na lista!');
}
