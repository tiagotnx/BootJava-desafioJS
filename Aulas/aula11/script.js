// function Pessoa(nome) {
//   this.nome = nome;
// }

// Pessoa.prototype.msg = function () {
//   alert('Olá ' + this.nome);
// };
// let NovaPessoa = new Pessoa('José');
// let OutraPessoa = new Pessoa('Maria');
// NovaPessoa.msg();
// OutraPessoa.msg();
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);

// let Pessoa2 = {
//   nome: '',
//   idade: '',
// };
// //console.log(Pessoa2);
// Pessoa2.__proto__.msg = function () {
//   alert('Olá ' + Pessoa2.nome);
// };

// let P = Pessoa2;
// P.nome = 'Vinícius';
// P.msg();
// console.log(P);

let Pessoa3 = [
  {
    nome: 'Vinícius',
    idade: 18,
    sexo: 'M',
  },
  {
    nome: 'Suellem',
    idade: 18,
    sexo: 'F',
  },
  {
    nome: 'João',
    idade: 40,
    sexo: 'M',
  },
];

let NPessoa = Pessoa3;

console.log(NPessoa[0].nome);

console.log(`Existem ${NPessoa.length}cadastradas`);
