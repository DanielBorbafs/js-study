function pesquisaBinaria(lista, item) {
  let baixo = 0;
  let alto = lista.length - 1; // Corrigido: precisa ser `length - 1`

  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2); // Corrigido: usar `Math.floor`
    let chute = lista[meio];

    if (chute === item) {
      return meio; // Encontrou o item
    }

    if (chute > item) {
      alto = meio - 1; // Buscar na metade inferior
    } else {
      baixo = meio + 1; // Buscar na metade superior
    }
  }

  return null; // Retorna `null` se o item não for encontrado
}

// Testando
let lista = [1, 3, 5, 7, 9];
console.log(pesquisaBinaria(lista, 3)); // Saída correta: 1
console.log(pesquisaBinaria(lista, 9)); // Saída correta: 4
console.log(pesquisaBinaria(lista, 2)); // Saída correta: null
