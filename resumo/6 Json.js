/* JAVASCRIPT OBJECT NOTATION
dados que o json armazena:
Strings
Números
Booleanos (true ou false)
Arrays
Objetos
Null

*/

// Objeto inicial
const aboutUser = {
  name: 'Daniel',
  age: 24,
  isAdmin: true,
  address: 0,
  cousers: ['Data Science', 'software'],
};
console.log(aboutUser.age);

// transformando para JSON
const convertUser = JSON.stringify(aboutUser);

//transformando para objeto novamente
const parsedUser = JSON.parse(convertUser);
console.log(parsedUser);

parsedUser.transformado = 'yes';

console.log(parsedUser);
