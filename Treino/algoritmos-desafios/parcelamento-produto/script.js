let preco = 9000;
let parcelas = 10;

let contador = 1;

while (contador <= parcelas) {
  let valorParcela = preco / contador;
  console.log(`${contador} x` + ' de R$: ' + valorParcela.toFixed(2));
  contador++;
}
