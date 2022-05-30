//exercicio 10
// function valorImc(nome, altura, peso) {
//   a = Number(altura);
//   p = Number(peso);
//   let imc = p / (a * 2);
//   console.log('Nome: ', nome);
//   console.log('Altura ', altura);
//   console.log('Peso ', peso);
//   console.log('IMC', imc);
// }

// pesoPessoa = prompt('digite seu peso');
// alturaPessoa = prompt('digite sua altura');
// nomePessoa = prompt('nome pessoa');
// valorImc(nomePessoa, alturaPessoa, pesoPessoa);

//concat() junta dois arrays
// let nomes = ['Vinícius', 'Andrei', 'Matheus', 'Felipe', 'Saulo', 'Leonardo'];

// let nomes2 = ['Pedro', 'Paulo', 'Maria', 'Lucas', 'Samanta', 'Leandro'];

// let todosNomes = nomes.concat(nomes2);
// console.log(nomes);
// console.log(nomes2);
// console.log(todosNomes);

// let qtdArrayNome = `O array nomes possui ${nomes.length} elementos`;

// console.log(qtdArrayNome);

//index of procura um determinado elemento de um array e retorna sua posicao

// let nomes2 = ['Pedro', 'Paulo', 'Maria', 'Lucas', 'Samanta', 'Leandro'];

// console.log(nomes2.indexOf('Maria'));

// let buscaNome = 'Leandro';

// if (nomes2.indexOf(buscaNome) != -1) {
//   alert(
//     `Eu encontrei o nome ${buscaNome} e esta na posicao ${nomes2.indexOf(
//       buscaNome,
//     )}`,
//   );
// } else {
//   alert(`Não encontrei ${buscaNome}`);
// }

//join transforma elementos de um array em uma string

// let nomes2 = ['Pedro', 'Paulo', 'Maria', 'Lucas', 'Samanta', 'Leandro'];

// console.log(nomes2);
// console.log(nomes2.join());

//push insere elemento no fim do array

// let frutas = ['Uva', 'Pera', 'Jaca', 'Nevascaranga'];
// // frutas.push('Maçã', 'Laranja');
// // console.log(frutas.indexOf('Jaca'));
// let insertFruta = 'Melancia';
// if (frutas.indexOf() == -1) {
//   console.log(`A fruta ${insertFruta} não está na lista`);
//   frutas.push(insertFruta);
// } else {
//   console.log(`A fruta ${insertFruta} já está na lista`);
// }

// console.log(frutas);
//pop remove o ultimo elemetno de um array

// let frutas = ['Uva', 'Pera', 'Jaca', 'Nevascaranga'];

// frutas.pop();
// console.log(frutas);

//reverse, inverte a ordem dos elementos de um array

// let frutas = ['Uva', 'Pera', 'Jaca', 'Nevascaranga'];

// frutas.reverse();
// console.log(frutas);

//shift remove o primeiro elemento

// let frutas = ['Uva', 'Pera', 'Jaca', 'Nevascaranga'];

// frutas.shift();
// console.log(frutas);

//sort ordena elementos de um array em ordem crescente

// let numeros = [200, 2, 1, 189, 67];
// let alpha = ['Pedro', 'Paulo', 'Maria', 'Lucas', 'Samanta', 'Leandro'];
// numeros.sort();
// alpha.sort();

// console.log(numeros);
// console.log(alpha);

//to String converte o array em uma string e retorna esta stringg

// let frutas = ['Uva', 'Pera', 'Jaca', 'Nevascaranga'];

// console.log(frutas.toString());

//unshift insere um elemento no inicio da array

//splice corta ou remove um elemento de um array em um ponto indicado

// let frutas = ['Uva', 'Pera', 'Jaca', 'Nevascaranga'];
// let novasFrutas = frutas.splice(0, 1);

// let indice = frutas.indexOf('Nevascaranga');

// console.log(novasFrutas);
// console.log(frutas);
