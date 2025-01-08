const pessoa = {
  nome: 'Joao',
  profissao: 'Analista de dados',
  idade: 25,
};

console.log(pessoa.nome);
pessoa.salario = 5000;
console.log(pessoa.salario);
console.log(pessoa);

// Deletando um campo
delete pessoa.profissao;
console.log(pessoa);

/* Herança de objeto, oque é? */
// Forma antiga ES5 e anteriores

const dizOi = {
  nome: 'Daniel',
  dizerBomDia() {
    console.log(`Bom dia, Meu nome é ${this.nome}`);
  },
};

const apresentacao = Object.create(dizOi);
dizOi.nome = 'Marcos';
apresentacao.dizerBomDia();

/* Forma nova ES6+ */
/*
class Pai {
  constructor(nome) {
    this.nome = nome;
  }
  dizerNome() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

class Filho extends Pai {
  constructor(nome, idade) {
    super(nome);
    this.idade = idade;
  }

  dizerIdade() {
    console.log(`tenho ${this.idade} anos`);
  }
}

const filho = new Filho('Daniel', 24);
filho.dizerNome();
filho.dizerIdade();
*/
