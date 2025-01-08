// && - Retorna true apenas se ambas as expressões forem verdadeiras. Se a primeira expressão for false, ele não avalia a segunda, pois o resultado já será false.
let a = true;
let b = false;
console.log(a && b); // Saída: false

let x = 5;
console.log(x > 0 && x < 10); // Saída: true

// || - Retorna true se pelo menos uma das expressões for verdadeira. Se a primeira expressão for true, ele não avalia a segunda, pois o resultado já será true
let a = true;
let b = false;
console.log(a || b); // Saída: true

let y = 15;
console.log(y < 10 || y > 20); // Saída: false

// ! Inverte o valor booleano de uma expressão. Se a expressão for true, ! a torna false, e vice-versa.

let a = true;
console.log(!a); // Saída: false

let isLoggedIn = false;
console.log(!isLoggedIn); // Saída: true

// O operador ?? retorna o valor do lado direito se o valor do lado esquerdo for null ou undefined. Ele é útil para definir valores padrão.

let name;
console.log(name ?? 'Usuário'); // Saída: "Usuário"
