function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // como se fosse 5 * 4 * 3 * 2 * 1

// Usando loop
function fatorLoop(n) {
  if (n < 0) {
    return 'O fatorial de um número negativo não é definido';
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(fatorLoop(-5));
