let modelo = 'Fiat argo';
let anoFabricacao = 2025;
let precoVenda = 17000;

// se ano for => 2025 'novo', se for => 2025 - 2 > semi novo => se for 2025 >= 3 usado

let anoAtual = new Date();
anoAtual = anoAtual.getFullYear();

let precoFinal = 0;

if (anoFabricacao == anoAtual) {
  precoFinal = precoVenda + precoVenda * 0.08;
  console.log('O carro é novo e o preço final é de R$: ' + `${precoFinal}`);
} else if (anoFabricacao == anoAtual - 1 || anoFabricacao == anoAtual - 2) {
  precoFinal = precoVenda + precoVenda * 0.1;
  console.log('O carro é seminovo e o preço final é de R$: ' + `${precoFinal}`);
} else {
  console.log('usado');
  precoFinal = precoVenda + precoVenda * 0.1;
  console.log(
    'O ' + `${modelo} ` + 'é usado e o preço final é de R$: ' + `${precoFinal}`
  );
}

/* ----- Quebrando o problema com funções aninhadas ------------ */
function obterAno() {
  let ano = new Date();
  ano = ano.getFullYear();
  return ano;
}

function classificaVeiculos(modelo, anoFabricacao, precoVenda) {
  let anoAtual = obterAno();

  if (anoFabricacao == anoAtual) {
    precoFinal = precoVenda + precoVenda * 0.08;
    console.log('O carro é novo e o preço final é de R$: ' + `${precoFinal}`);
  } else if (anoFabricacao == anoAtual - 1 || anoFabricacao == anoAtual - 2) {
    precoFinal = precoVenda + precoVenda * 0.1;
    console.log(
      'O carro é seminovo e o preço final é de R$: ' + `${precoFinal}`
    );
  } else {
    console.log('usado');
    precoFinal = precoVenda + precoVenda * 0.1;
    console.log(
      'O ' +
        `${modelo} ` +
        'é usado e o preço final é de R$: ' +
        `${precoFinal}`
    );
  }
}
classificaVeiculos('Fiat', 2025, 17000);
