// Loop para criar o triângulo
for (let linha = 1; linha <= 7; linha++) {
  let escada = '';

  // Adiciona o número de '#' correspondente à linha atual
  for (let i = 1; i <= linha; i++) {
    escada += '#';
  }

  console.log(escada); // Exibe a linha atual
}
