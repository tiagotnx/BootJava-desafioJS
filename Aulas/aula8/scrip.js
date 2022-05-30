let str = 'Qualquer conteúdo!';

let str2 = `Uma outra string ${str}`;

// let str = 'Qualquer conteúdo!';
// let str2 = ' Uma outra string' + str;

console.log(str2);
// o array é constituido por elementos
// const frutas = ['Uva', 'Banana', 'Laranja', 'Melancia'];
// let euGosto = `Eu gosto de ${frutas[2]} `;
// //console.log(euGosto);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

const Pessoa = [
  'José',
  23,
  'Solteiro',
  'Bola',
  1.7,
  (cores = ['Azul', 'Vermllho', 'Verde']),
];
console.log(Pessoa[5][0]); //array bidimensional
console.log(Pessoa.length);
console.log(Pessoa[5].length);
let key = 2;
key--;

console.log(Pessoa[5][key]);
console.log('Vinícius'.length);

const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]}anos e sou ${Pessoa[2]} eu também gosto de jogar ${Pessoa[3]} eu tenho ${Pessoa[4]} de altura`;

(function (p) {
  const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]}anos e sou ${Pessoa[2]} eu também gosto de jogar ${Pessoa[3]} eu tenho ${Pessoa[4]} de altura`;
  alert(jose);
  document.write(jose);
})(Pessoa);

console.log(jose);
