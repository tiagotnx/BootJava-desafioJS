//Exerc 11
// let nomes = ['Leandro', 'Matheus', 'Vinícius', 'Andrei', 'Otávio'];

// const coisaNomes = (name, novoNome, index) => {
//   console.log('Qtde de elementos do array ', name.length);
//   console.log(`O indice escolhido  ${index} que é o elemento ${name[index]}`);
//   console.log(`O nome ${novoNome} foi inserido no array`);
//   name.push(novoNome);
//   console.log('A quantidade de elementos atual do array é de   ', name.length);
// };

// coisaNomes(nomes, 'José', 4);
// coisaNomes(nomes, 'Maria', 2);
// coisaNomes(nomes, 'Cida', 3);
//match metodo que procura uma palavra em uma string

// let nome = 'Vinícius Andrei';
// console.log(nome.match('Andrei'));

//search procura pela ocorrencia retornando a posicao na cadeia string

// let nome = 'Vinícius Andrei';
// console.log(nome.search('Andrei'));

// console.log(nome.search('/A/I'));

//REPLACE ESTE METODO SUBSTITUI UMA STRING POR OUTRA

// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus illum delectus explicabo ratione recusandae atque cumque`;
// let strOutra = str.replace(/i/gi, 'y');
// console.log(strOutra);

//LOCALECOMPARE COMPARA EFETUA A COMPARACAO ENTRE DUAS STRINGS
// let gato = 'gato';
// let outroGato = 'gato';

// console.log(gato.localeCompare(outroGato));

//TO STRING CONVERTENDO UM VALOR EM STRING

// let num = Number('1');
// console.log(num);
// console.log(num.toString);

// TOLOWERCASE FAZS A CONVERSAO EM UMA STRING EM MAIUSCULAS

// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus illum delectus explicabo ratione recusandae atque cumque`;

// console.log(str.toLowerCase());
// console.log(str.toLocaleUpperCase()); //upper case

//TRIM faz a remoção de espaco antes e depois de da string especificada

// let str = `      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus illum delectus explicabo ratione recusandae atque cumque`;

// document.write(str.trim());
// let str2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus illum delectus explicabo ratione recusandae atque cumque`;

// document.write(str2.trim());

//NAN

// let num = Number('125');
// console.log(num);
// console.log(isNaN(1));
// console.log(isNaN('8i'));

//tofixed, analisa um valor flutuante e retorna uma string conforme o parametro de casas

// let valor = 2.456;
// console.log(valor.toFixed(1));

//to locale string, ira retornar uma string na moeda definida
// let valor = 2.456;
// console.log(
//   valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
// );
