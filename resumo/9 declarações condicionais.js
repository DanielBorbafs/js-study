// if...else
if (condition) {
} else {
}

// if, else if, else
let age = 18;
if (age < 18) {
  console.log('Menor de idade');
} else if (age === 18) {
  console.log('Acabou de atingir a maioridade');
} else {
  console.log('Maior de idade');
}

//Usando switch
let day = 'quarta-feira';

switch (day) {
  case 'segunda-feira':
    console.log('Hoje é segunda');
    break;
  case 'terça-feira':
    console.log('Hoje é terça');
    break;
  case 'quarta-feira':
    console.log('Hoje é quarta');
    break;
  default:
    console.log('Outro dia da semana');
    break;
}

//Operador Ternário (? :)
let score = 75;
let result = score >= 60 ? 'Aprovado' : 'Reprovado';
console.log(result);

//Comparação com && (E) e || (OU)
let user = {
  isLoggedIn: true,
  isAdmin: false,
};

if (user.isLoggedIn && user.isAdmin) {
  console.log('Bem-vindo, Admin!');
} else if (user.isLoggedIn && !user.isAdmin) {
  console.log('Bem-vindo, usuário!');
} else {
  console.log('Por favor, faça login.');
}

// Condicionais encadeadas
let time = 14;
if (time < 12) {
  console.log('Bom dia');
} else {
  if (time < 18) {
    console.log('Boa tarde');
  } else {
    console.log('Boa noite');
  }
}
