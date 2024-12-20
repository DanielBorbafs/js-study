// Tarefa : Calcular o desvio padrão de um array de números.
const listaNumeros = [5, 2, 3];

// Calcular a média
const numeroOcorrencia = listaNumeros.length;
const somaArray = listaNumeros.reduce((acc, currentValue) => acc + currentValue, 0);
let media = somaArray / numeroOcorrencia;

// Calcular a soma dos quadrados das diferenças em relação à média
const somaQuadrados = listaNumeros.reduce((acc, currentValue) => acc + Math.pow(currentValue - media, 2), 0);

// Calcular o desvio padrão
const desvioPadrao = Math.sqrt(somaQuadrados / numeroOcorrencia);

console.log("Desvio Padrão: ", desvioPadrao.toFixed(2));

// function
function calculaDesvio(a, b, c) {
    let arr = [a, b, c]
    let numeroOcorrencia = arr.length
    const somaArray = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    const media = somaArray / numeroOcorrencia

    const somaQuadrados = arr.reduce((acc, currentValue) => acc + Math.pow(currentValue - media, 2), 0);

    const desvioPadrao = Math.sqrt(somaQuadrados / numeroOcorrencia)
    console.log("Desvio Padrão: ", desvioPadrao.toFixed(2))
}

calculaDesvio(5, 10, 15)