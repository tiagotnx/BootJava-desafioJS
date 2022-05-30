// let i = 5;
// for (let x = 0; x <= 10; x++) {
//   console.log(`O valor da iteração é ${x} o x mais ele mesmo ${i++}`);
// }

// FOR IN
//objeto pessoa
// let Pessoas = {
//   nome: 'Vinícius Andrei',
//   idade: 90,
//   herói: 'Capitão América',
// };
// console.log(Pessoas.nome);
// for (let propriedades in Pessoas) {
//   console.log(Pessoas.nome);
//   console.log(Pessoas.idade);
//   console.log(Pessoas.herói);
// }
//array associativo

//arr = ["Nome"=>Vinícius]

//FOR OFF

// let frutas = ['Melancia', 'Manga', 'Banana', 'Uva', 'Maça'];

// for (let nomeFruta of frutas) {
//   console.log(nomeFruta);
// }

let Herois = [
  {
    identidadeSecreta: 'Steve Roger',
    heroi: 'Capitao América',
  },
  {
    identidadeSecreta: 'Tony Stark',
    heroi: 'Homem de Ferro',
  },
];

Herois.push({ identidadeSecreta: 'Diana', heroi: 'Mulher Maravilha' });
// let marvel = Herois[0].identidadeSecreta;
// console.log(marvel);
for (let marvel of Herois) {
  //console.log(marvel);
  for (let m in marvel) {
    console.log(`${m}->${marvel[m]}`);
  }
}

//Exercício 13
//invertendo palavra

let palavra = 'Hulk';

function inverteP(p) {
  for (let i = p.length - 1; i >= 0; i--) {
    console.log(p[i]);
  }
}
inverteP('Diana');
