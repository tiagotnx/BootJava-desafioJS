// criar função verificando qual é o maior numero entre dois params

function verificaMaiorNum(num1, num2) {
  if (num1 > num2) {
    console.log('o nº ' + num1 + ' é maior que nº' + num2);
  }
  if (num2 > num1) {
    console.log('o nº ' + num1 + ' é menor que nº' + num2);
  } else {
    console.log('Os nº são iguais');
  }
}

// verificaMaiorNum(1, 3);
// verificaMaiorNum(10, 3);
// verificaMaiorNum(1000, 1445453);
// verificaMaiorNum(10, 10);

// function teste() {
//   let nome = 'Vinícius';
//   return nome;
// }
//console.log(teste());

//arrow function
// let msg = (nome) => {
//   alert('estou feliz da vida com JS');
// };

let msg = (nome) => {
  return nome;
};
//console.log(msg('Vinícius'));
//funções auto executaveis

function teste() {
  alert('Estou na funcion teste');
  return nome;
}
//função auto executavel
// (function () {
//   alert('Esta função me chamou sozinha');
// })();

// (function (produto, preco) {
//   alert('O produto é ' + produto + ' e o preco é R$ ' + preco);
// })('Biscoito', 2.35);
let valor1 = prompt('Digite o valor 1');
let valor2 = prompt('Digite o valor 2');
const soma = (valor1, valor2) => {
  let resultado = parseFloat(valor1) + parseFloat(valor2);
  console.log(resultado);
};

soma(valor1, valor2);
