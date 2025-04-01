/*
A cada passo, seleciona o menor elemento do array não ordenado e o coloca na posição correta.
*/

// O(n²) - Ele percorre cada item do array mesmo se estiver ordenado, pois ele nao identifica se já está ordenado
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i; // Assume que o primeiro não ordenado é o menor
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j; // Encontrou um elemento menor
      }
    }
    // Troca os elementos (destructuring assignment)
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// Exemplo de uso:
console.log(selectionSort([5, 3, 1, 4, 2])); // Saída: [1, 2, 3, 4, 5]
